import express from "express";
import { User } from "../database/models";

const rootController = express.Router();

/**
 * GET ALL USERS
 */

rootController.get("/", (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result,
    });
  });
});

export default rootController;
