import express from "express";
import { User } from "../database/models";

// const Joi = require("joi");
const crypto = require("crypto");

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
        secureCode: crypto.randomBytes(6).toString("hex"),
      },
    };
    // save req.body to database
    const newUser = new User(userData);

    newUser
      .save()
      .then(() => {
        res.status(200).send([{ message: "Registration is successful", data: value }]);
        sendConfirmationEmail(value);
      })
      .catch((err) => {
        res.status(400).send([{ message: "Unable to save" }]);
      });
  }
});

// api/confirm
// példa request: http://localhost:8080/api/confirm?code=7894&user=imi

userController.post("/api/confirm/", (req, res) => {
  const { code, user } = req.query;

  const link = `http://localhost:8080${req.url}`;

  res.status(200).send(link);

  // User.findOne({ "sentOutVerificationLink": link }, (err, result) => {
  //   if (err) {
  //     res.status(400).send([{ message: "Unable to find link" }]);
  //   } else {
  //     if (result) {
  //       res.status(200).send([{ message: "Link found" }]);
  //     } else {
  //       res.status(400).send([{ message: "Link not found" }]);
  //     }
  //   }
  // });
});

// api/login

// api/logout
function createLink(code, username) {
  const link = `http://localhost:3000/confirm?code=${code}&user=${username}`;
}
// api/reset

export default userController;
