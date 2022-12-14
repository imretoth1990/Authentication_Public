import { Schema } from "mongoose";

// import randomBytes from

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  hashedConfirmPassword: { type: String, required: true },
  confirm: {
    date: { type: Date, required: true },
    userId: { type: String, required: true },
    secureCode: { type: String, required: true, unique: true },
  },
});

export default userSchema;
