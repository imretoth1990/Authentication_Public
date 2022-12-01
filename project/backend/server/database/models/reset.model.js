import mongoose from "mongoose";
import resetSchema from "../schemas/reset.schema";

const Reset = mongoose.model("reset", resetSchema);

export default Reset;
