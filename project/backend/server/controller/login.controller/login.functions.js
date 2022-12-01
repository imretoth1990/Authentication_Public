export default function comparePasswords(password, hashedPassword) {
  if (password === hashedPassword) {
    return true;
  } else {
    return false;
  }
}
