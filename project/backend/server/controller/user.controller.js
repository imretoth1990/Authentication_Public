import express from "express";
import { User } from "../database/models";
// const Joi = require("joi");

import sha256 from "sha256";

const userController = express.Router();

const { validateSignup } = require("../validator/signup.validator");

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
    console.log(error);
    return res.send(error.details);
  } else {
    const userData = {
      username,
      email,
      hashedPassword: sha256(password),
      hashedConfirmPassword: sha256(confirmPassword),
    };
    // save req.body to database
    const newUser = new User(userData);
    newUser
      .save()
      .then(() => {
        res.status(200).send(`"message": "Registration is successful"`);
      })
      .catch((err) => {
        res.status(400).send(`"message": "Unable to save"`);
      });
  }
});

// api/confirm

// api/login

// api/logout

// api/reset

export default userController;
