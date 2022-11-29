import express from "express";
import { User } from "../database/models";

const confirmController = express.Router();

confirmController.post("/api/confirm/", (req, res) => {
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

export default confirmController;
