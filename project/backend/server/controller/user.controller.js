import express from "express";
import { User } from "../database/models";

// const Joi = require("joi");
const crypto = require("crypto");

var uniqueValidator = require("mongoose-unique-validator");

import sha256 from "sha256";

const userController = express.Router();

const { validateSignup } = require("../validator/signup.validator");

import { sendConfirmationEmail } from "./nodemailer/nodemailer";

/**
 * USERS
 */

/**
 * GET/
 * retrieve and display all Users in the User Model
 */

userController.get("/", (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result,
    });
  });
});

userController.post("/api/signup", (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // validate req.body
  const { error, value } = validateSignup(req.body);

  if (error) {
    console.error(error);
    return res.send(error.details);
  } else {
    const userData = {
      username,
      email,
      hashedPassword: sha256(password),
      hashedConfirmPassword: sha256(confirmPassword),
      confirm: {
        date: new Date().toString(),
        userId: crypto.randomBytes(4).toString("hex"),
        secureCode: "f02fe0f741b91" /* crypto.randomBytes(6).toString("hex") */,
      },
    };

    let newUser;

    // check if secure code is unique
    function checkIfSecureCodeIsUnique() {
      console.log("CALLED");
      User.exists({ "confirm.secureCode": userData.confirm.secureCode }, (err, result) => {
        if (err) {
          console.error(err);
        } else if (result === null) {
          console.log("RESULT NULL");
          newUser = new User(userData);
          console.log("newUser", newUser);
          return;
        } else {
          userData.confirm.secureCode = crypto.randomBytes(6).toString("hex");
          // checkIfSecureCodeIsUnique();
        }
      });
    }

    checkIfSecureCodeIsUnique();

    console.log("newUser 77", newUser);

    // save req.body to database
    newUser
      .save()
      .then(() => {
        res.status(200).send([{ message: "Registration is successful", data: value }]);
        sendConfirmationEmail(newUser.email, newUser.confirm.secureCode, newUser.username);
      })
      .catch((err) => {
        res.status(400).send([{ message: "Unable to save" }]);
      });
  }
});

// api/confirm
// példa request: http://localhost:8080/api/confirm?code=7894&user=imi

// api/login

// api/logout

// api/reset

export default userController;
