import mongoose from "mongoose";
import buttonsSchema from "../schemas/buttons.schema";

const Button = mongoose.model("Button", buttonsSchema);

export default Button;
