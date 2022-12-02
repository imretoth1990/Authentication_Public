import express from "express";
import { User } from "../database/models";
import { Profile } from "../database/models";

const rootController = express.Router();

/**
 * GET NON-VERIFIED USERS
 */

rootController.get("/", (req, res) => {
  const allUsers = [];
  User.find({}, (err, allpending) => {
    if (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    } else {
      allUsers.push(allpending);
      Profile.find({}, (err, allverified) => {
        if (err) {
          console.error(err);
          res.status(400).json({ message: err.message });
        } else {
          allUsers.push(allverified);
          console.log(allUsers);
          res.status(200).json({ data: allUsers });
        }
      });
    }
  });
});

/**
 * GET VERIFIED USERS (FROM PROFILE COLLECION)
 */

rootController.get("/verifiedUsers", (req, res) => {
  Profile.find({}, (err, result) => {
    if (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json({ data: result });
    }
  });
});

export default rootController;
