import express from "express";
import { User } from "../database/models";

const crypto = require("crypto");

import sha256 from "sha256";

const jwt = require("jsonwebtoken");

const userController = express.Router();

const { validateSignup } = require("../validator/signup.validator");

import { sendConfirmationEmail } from "./nodemailer/nodemailer";

/**
 * SIGNUP
 */

userController.post("/api/signup", (req, res) => {
  // ****** TEST START ******

  // Generate JWT
  const generateToken = (_id) => {
    return jwt.sign({ _id }, /* process.env.JWT_SECRET */ "shhhhh", {
      expiresIn: "20s",
    });
  };

  const testToken = generateToken("123abc");

  console.log(testToken, "\n"); // => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjNhYmMiLCJpYXQiOjE2Njk4MTg1NzYsImV4cCI6MTY2OTgxODU5Nn0.l6qsYt63NzvZCYi4aqQvOzk6PtuF5kmRdhhmM3TH-5k

  const decoded = jwt.verify(testToken, "shhhhh");
  console.log(decoded); // => { _id: '123abc', iat: 1669818615, exp: 1669818635 }

  res.end();
  return;

  // ****** TEST END ******

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
        secureCode: crypto.randomBytes(6).toString("hex"), // a crypto.randomBytes helyett...
        // ... használhatnánk JWT-t, mert annak lehet adni expirationt (npm i jsonwebtoken)
      },
    };

    const newUser = new User(userData);

    // save req.body to database
    newUser
      .save()
      .then(() => {
        res.status(200).send([{ message: "Registration is successful", data: value }]);
        sendConfirmationEmail(newUser.email, newUser.confirm.secureCode, newUser.username);
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send([{ message: `Unable to save: ${err.message}` }]);
      });
  }
});

export default userController;
