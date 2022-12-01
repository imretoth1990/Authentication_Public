import express from "express";
import { User } from "../database/models";

const crypto = require("crypto");

import sha256 from "sha256";

import jwt from "jsonwebtoken";

const userController = express.Router();

const { validateSignup } = require("../validator/signup.validator");

import { sendConfirmationEmail } from "./nodemailer/nodemailer";

/**
 * SIGNUP
 */

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
        secureCode: generateToken(this.userId),
      },
    };

    function generateToken(userId) {
      return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "5m",
      });
    }

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
