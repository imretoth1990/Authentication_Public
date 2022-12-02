import express from "express";
import Reset from "../../database/models/reset.model";
import { Profile } from "../../database/models";
import { sendPasswordResetEmail } from "../nodemailer/nodemailer";
import jwt from "jsonwebtoken";
// import jwt from "jsonwebtoken";

const resetController = express.Router();

resetController.post("/api/reset", async (req, res) => {
  const email = req.body.email;

  //   find profile by email
  const profileData = await Profile.where("email").equals(`${email}`);

  // Guard clause
  if (profileData.length === 0) return res.status(400).json([{ message: "Email not found" }]);

  const profile = profileData[0];

  const userId = profile.userId;
  const userEmail = profile.email;
  const userName = profile.username;

  if (!profileData) {
    res.status(404).send([{ message: "Invalid email adress" }]);
  } else {
    function generateToken(userId) {
      return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "5m",
      });
    }

    const resetData = {
      date: new Date().toString(),
      username: userName,
      userId: userId,
      secureCode: generateToken(this.userId),
      email: userEmail,
    };

    const newReset = new Reset(resetData);

    newReset
      .save()
      .then(() => {
        res.status(200).send([{ message: "Successful request for password reset" }]);
        sendPasswordResetEmail(newReset.email, newReset.secureCode, newReset.username);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send([{ message: `Unable to save: ${err.message}` }]);
      });
  }
});

export default resetController;
