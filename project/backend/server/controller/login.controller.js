import express from "express";

const loginController = express.Router();

loginController.post("/api/login", async (req, res) => {
  console.log("api/login working");
  res.send({ message: "api/login working" });

  // const { userInput, password } = req.body;
  // res.send(userInput);
  // try{
  //   const user = await Profile.where(inputType).equals(userInput)
  // }
});

export default loginController;
