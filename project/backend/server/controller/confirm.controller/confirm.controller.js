import express from "express";
import { User } from "../../database/models";

const confirmController = express.Router();

const { validateConfirmation } = require("../../validator/confirm.validator");

import { moveUserToProfileDB } from "./confirm.functions";

confirmController.post("/api/confirm", (req, res) => {
  const { secureCode, username } = req.body;

  const { error } = validateConfirmation(req.body);

  if (error) {
    console.error(error);
    return res.status(500).send(error.details);
  } else {
    // find user by code and username
    User.find({ "confirm.secureCode": secureCode, username: username }, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        if (result.length === 0) {
          res.status(400).send({ message: "Invalid verification link" });
        } else {
          const isUserMoved = moveUserToProfileDB(result);
          console.log(isUserMoved);

          if (isUserMoved) {
            res.status(200).send({
              message: "Registration confirmed successfully, you'll be redirected to login page...",
            });
          } else {
            res.status(400).send({ message: "Confirmation failed, error while moving user data to new db" });
          }
        }
      }
    });

    // add expiration to verification link with JWT (json web token) => npm i jsonwebtoken...
    // ... maybe we could use a JWT token as a secureCode instead of the current random string generated by cryptoBytes ...
    // ... because with JWT we can easily set an expiration date for the token

    // user should not be able to login until registration is not confirmed
  }
});

export default confirmController;

// https://jwt.io/#debugger-io

/**
 * https://auth0.com/learn/json-web-tokens?_gl=1*ogl0ig*rollup_ga*MzA1ODk0NzI3LjE2Njk4MTEyODI.*rollup_ga_F1G3E656YZ*MTY2OTgxNzQ4NC4yLjEuMTY2OTgxNzY5MS41OS4wLjA.&_ga=2.169022055.733188914.1669811282-305894727.1669811282
 */
