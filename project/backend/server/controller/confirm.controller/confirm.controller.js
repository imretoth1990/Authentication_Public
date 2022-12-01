import express from "express";
import { User } from "../../database/models";
import jwt from "jsonwebtoken";
require("dotenv/config");

const confirmController = express.Router();

// const { validateConfirmation } = require("../../validator/confirm.validator")

import { moveUserToProfileDB } from "./confirm.functions";

confirmController.post(
  "/api/confirm",
  (req, res) => {
    const { secureCode, username } = req.body;

    try {
      jwt.verify(secureCode, process.env.JWT_SECRET);
    } catch (error) {
      console.error(error.message);
      res.status(400).send({ message: "Invalid verification link" });
      return;
    }

    /* const { error } = validateConfirmation(req.body);

  if (error) {
    console.error(error);
    return res.status(500).send(error.details);
  } else { */

    // find user by code and username
    User.find({ "confirm.secureCode": secureCode, username: username }, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        if (result.length === 0) {
          res.status(400).send({ message: "No user found with this verification link" });
        } else {
          moveUserToProfileDB(result).then((isSuccess) => {
            if (isSuccess) {
              res.status(200).send({
                message: "Registration confirmed successfully, you'll be redirected to login page...",
              });
            } else {
              res.status(400).send({ message: "Confirmation failed, error while moving user data to new db" });
            }
          });
        }
      }
    });

    // user should not be able to login until registration is not confirmed
  }
  /* } */
);

export default confirmController;
