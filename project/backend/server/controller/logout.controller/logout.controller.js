import express from "express";

const logoutController = express.Router();

logoutController.get("/api/logout", (req, res) => {
  res.clearCookie("access_token");
  res.status(200).json("logout successful");
});

export default logoutController;
