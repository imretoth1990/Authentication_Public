import { Schema } from "mongoose";

const resetSchema = new Schema({
  date: { type: Date, required: true },
  secureCode: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
});

export default resetSchema;
