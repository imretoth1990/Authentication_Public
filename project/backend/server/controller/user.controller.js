import express from "express";
import { User } from "../database/models";
import sha256 from "sha256";

const userController = express.Router();

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
  const { username, email, password } = req.body;
  const userData = {
    username,
    email,
    hashedPassword: sha256(password),
  };
  const newUser = new User(userData);
  newUser
    .save()
    .then(() => {
      res.status(200).send("Registration is successful!");
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database!");
    });
});

// api/confirm

// api/login

// api/logout

// api/reset

export default userController;
