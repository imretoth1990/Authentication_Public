// Import all dependencies & middleware here
import express from "express";
const cors = require("cors");
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// Import controllers
import { userController, buttonController, confirmController } from "./controller";

// Init an Express App.
const app = express();

// Pass cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Call variables from .env file
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.use("/", buttonController);
app.use("/", userController);
app.use("/", confirmController);

// Start Server here
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  mongoose
    .connect(`${mongo_uri}`)
    .then((res) => {
      console.log(`Connection Succesful to ${mongo_uri}`);
    })
    .catch((err) => console.error(`Error in DB connection ${err} MONGO_URI: ${mongo_uri}`));
});
