// Import all dependencies & middleware here
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// Import .env file

// Import controllers

import { userController } from "./controller";

// Init an Express App.
const app = express();

// Call variables from .env file
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.use("/", userController);

// Start Server here
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  mongoose
    .connect(`${mongo_uri}`)
    .then((res) => console.log(`Connection Succesful ${res} to ${mongo_uri}`))
    .catch((err) => console.error(`Error in DB connection ${err} MONGO_URI: ${mongo_uri}`));
});
