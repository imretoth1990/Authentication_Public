import express from "express";
import { User } from "../database/models";

const confirmController = express.Router();

const { validateConfirmation } = require("../validator/confirm.validator");

confirmController.post("/api/confirm", (req, res) => {
  const { code, username } = req.body;
  console.log(req.body);

  const { error, value } = validateConfirmation(req.body);

  if (error) {
    console.error(error);
    return res.send(error.details);
  } else {
    // find user by code and username
    User.where("username")
      .equals(username)
      .where("secureCode")
      .equals(code)
      .exec((err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });

    // if data found, setConfirmation("confirmed")
    // if data is confirmed, copy user from authEntity and insert into /user/profiledb as user/profile
    // if data is saved, send response message: "Registration confirmed successfully"
    res.status(200).send({ message: "Registration confirmed successfully" });
  }
});

export default confirmController;
