import { Schema } from "mongoose";
import sha256 from "sha256";
// import randomBytes from

const profileSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

/**
 * @param {*} password
 */

profileSchema.methods.comparePassword = function comparePassword(password) {
  return this.hashedPassword === sha256(password);
};

export default profileSchema;
