export default function comparePasswords(password, hashedPassword) {
  if (password === hashedPassword) {
    console.log("Yesssss");
    return true;
  } else {
    console.log("Noooo fuck");
    return false;
  }
}
