import express from "express";
import { Profile } from "../../database/models";
import sha256 from "sha256";
import comparePasswords from "./login.functions";
import jwt from "jsonwebtoken";

/**
 * username: 'testUser',
   email: 'testUser@gmail.com', 
   password: password
 */

const loginController = express.Router();

loginController.post("/api/login", async (req, res) => {
  try {
    const loginType = Object.keys(req.body)[0];

    const userData = await Profile.where(`${loginType}`).equals(req.body[loginType]);

    const user = userData[0];

    if (!user) {
      return res.status(400).json({ message: "Incorrect username/email or password" });
    }

    const userPassword = user.hashedPassword;

    const loginHashedPassword = sha256(req.body.password);

    const passwordIsValid = comparePasswords(userPassword, loginHashedPassword);

    // creating a token
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15s" });

    if (passwordIsValid) {
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json([{ message: "successful" }]);
    } else {
      res.status(404).send([{ message: "Incorrect username/email or password" }]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send([{ message: `server error: ${err.message}` }]);
  }
});

export default loginController;
