// Import all dependencies & middleware here
import express from "express";
const cors = require("cors");
require("dotenv/config");
import mongoose from "mongoose";

// Import controllers
import { rootController, userController, buttonController, confirmController, loginController } from "./controller";
// import App from "../../frontend/react-login-signup/src/App";

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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use all controllers(APIs) here
app.use("/", rootController);
app.use("/", buttonController);
app.use("/", userController);
app.use("/", confirmController);
app.use("/", loginController);

// Start Server here
app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  mongoose
    .connect(`${mongo_uri}`)
    .then((res) => {
      console.log(`Connection Succesful to ${mongo_uri}`, "\n");
    })
    .catch((err) => console.error(`Error in DB connection ${err} MONGO_URI: ${mongo_uri}`));
});
