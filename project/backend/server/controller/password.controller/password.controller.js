import express from "express";
import { Profile } from "../../database/models";

const passwordController = express.Router();

passwordController.post("/api/password", (req, res) => {
  const { secureCode, username, newPassword } = req.body;
  // find document in profile

  Profile.find({ username: username }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      if (result.length === 0) {
        res.status(400).send({ message: "No user found with this verification link" });
      } else {
        // update password with save()
        console.log("userObject", result);
      }
    }
  });
});

export default passwordController;
