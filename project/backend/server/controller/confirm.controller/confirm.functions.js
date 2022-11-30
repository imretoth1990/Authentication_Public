import { User } from "../../database/models";
import { Profile } from "../../database/models";

export async function moveUserToProfileDB(userObject) {
  // if data is confirmed, copy user from authEntity and insert into /user/profiledb as user/profile

  // insert user into new db

  const profileData = {
    username: userObject[0].username,
    email: userObject[0].email,
    hashedPassword: userObject[0].hashedPassword,
  };

  const confirmedUser = new Profile(profileData);
  await confirmedUser.save();
  /*     .then(() => {
      res.status(200).send([{ message: "ConfirmedUser saved id Profiledb", data: value }]);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send([{ message: "Unable to save" }]);
    }); */

  // delete user from original db
  const deletedInfo = await User.deleteOne({ _id: userObject[0]._id });
  console.log(deletedInfo); // { deletedCount: 1 } or { deletedCount: 0 }

  if (deletedInfo.deletedCount === 1) return true;
  else return false;
}
