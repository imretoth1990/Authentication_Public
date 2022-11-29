import express from "express";
// import { User } from "../database/models";

const confirmController = express.Router();

confirmController.post("/api/confirm/", (req, res) => {
  const { code, user } = req.query;

  //   validateData(code, user);

  console.log(code + user);

  //   res.status(200).send({ message: "Registration confirmed successfully" });
});

export default confirmController;
