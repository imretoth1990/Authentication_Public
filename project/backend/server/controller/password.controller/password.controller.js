import express from "express";
import { Profile } from "../../database/models";
import sha256 from "sha256";

const passwordController = express.Router();

passwordController.post("/api/password", (req, res) => {
  const { secureCode, username, newPassword } = req.body;
  // find document in profile

  Profile.find({ username: username }, (err, result) => {
    if (err) {
      res.status(404).send([{ message: "User not found" }]);
    } else {
      if (result.length === 0) {
        res.status(400).send([{ message: "No user found with this verification link" }]);
      } else {
        // update password with save()
        // hash newPassword

        const newHashedPassword = sha256(newPassword);

        const filter = { username: `${result[0].username}` };
        const update = { hashedPassword: `${newHashedPassword}` };
        const opts = { new: true };

        Profile.findOneAndUpdate(filter, update, opts, (err, doc) => {
          if (err) {
            res.status(400).send([{ message: "Unable to update password" }]);
          } else {
            res.status(200).send([{ message: "Password updated successfully" }]);
          }
        });
      }
    }
  });
});

export default passwordController;
