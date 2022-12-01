import { User } from "../../database/models";
import { Profile } from "../../database/models";

export async function moveUserToProfileDB(userObject) {
  try {
    const profileData = {
      userId: userObject[0].confirm.userId,
      username: userObject[0].username,
      email: userObject[0].email,
      hashedPassword: userObject[0].hashedPassword,
    };

    const confirmedUser = new Profile(profileData);
    await confirmedUser.save();

    const deletedInfo = await User.deleteOne({ _id: userObject[0]._id });

    if (deletedInfo.deletedCount === 1) return true;
    else throw Error("Unable to delete user from User database");
  } catch (error) {
    console.error(error);
    return false;
  }
}
