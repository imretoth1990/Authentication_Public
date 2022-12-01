import express from "express";
import Reset from "../../database/models/reset.model";
import { Profile } from "../../database/models";

// import jwt from "jsonwebtoken";

const resetController = express.Router();

resetController.post("/api/reset", async (req, res) => {
  const email = req.body.email;
  console.log("email hello", email);

  //   find profile by email
  const profileData = await Profile.where("email").equals(`${email}`);

  const profile = profileData[0];

  console.log("profileData", profile.email);
  console.log("profileUsername", profile._id);

  if (!profileData) {
    res.status(404).send([{ message: "Invalid email adress" }]);
  } else {
    //   const resetData = {
    //     date: new Date().toString(),
    //     secureCode: generateToken(this.userId),
    //     userId: { type: String, required: true },
    //     email: { type: String, required: true },
    //   };
    //   function generateToken(userId) {
    //     return jwt.sign({ userId }, process.env.JWT_SECRET, {
    //       expiresIn: "5m",
    //     });
    //   }
  }

  res.send([{ message: "Success" }]);
});

export default resetController;
