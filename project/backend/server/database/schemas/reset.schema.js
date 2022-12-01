import { Schema } from "mongoose";

const resetSchema = new Schema({
  date: { type: Date, required: true },
  username: { type: String, required: true },
  userId: { type: String, required: true },
  secureCode: { type: String, required: true, unique: true },
  email: { type: String, required: true },
});

export default resetSchema;
