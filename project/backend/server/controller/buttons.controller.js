import express from "express";
import { Button } from "../database/models";
import { checkAuth } from "../middlewares/checkAuth.js";

const buttonController = express.Router();

/**
 * BUTTONS
 */

/**
 * GET/
 * read data from MongoDB and display the result in the browser
 */

buttonController.get("/api/private", checkAuth, (req, res) => {
  Button.findOne({ string: "private" }, (err, result) => {
    res.status(200).json({
      data: result,
    });
  });
});

buttonController.get("/api/public", (req, res) => {
  Button.findOne({ string: "public" }, (err, result) => {
    res.status(200).json({
      data: result,
    });
  });
});

/**
 * POST/
 * save strings into button database
 */

buttonController.post("/create/button", (req, res) => {
  const { string } = req.body;
  const buttonData = {
    string,
  };

  const newButton = new Button(buttonData);
  newButton
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

export default buttonController;
