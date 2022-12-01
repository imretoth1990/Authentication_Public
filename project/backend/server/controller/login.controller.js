import express from "express";

const loginController = express.Router();

loginController.post("/api/login", async (req, res) => {
  //   const { input, password } = req.body;
  console.log("req.body 👉️", req.body);
  res.send({ message: "api/login working" });

  const loginType = Object.keys(req.body)[0];

  try{
    const user = await Profile.where(`${loginType}`).equals(req.body.`${loginType}`);
  }

 

  // const { userInput, password } = req.body;
  // res.send(userInput);
 
});

export default loginController;
