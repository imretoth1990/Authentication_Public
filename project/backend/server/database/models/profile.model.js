import mongoose from "mongoose";
import profileSchema from "../schemas/profile.schema";

const Profile = mongoose.model("user-profiles", profileSchema);

export default Profile;
