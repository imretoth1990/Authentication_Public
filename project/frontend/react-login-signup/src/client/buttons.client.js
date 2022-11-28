// import { response } from "express";

export function getButtonData(setData, buttonClicked) {
  // Guard clause
  if (buttonClicked === "" || buttonClicked === undefined) return;

  fetch(`http://localhost:8080/api/${buttonClicked}`)
    .then((response) => response.json())
    .then((actualData) => setData(actualData.data.string))
    .catch((err) => console.error(err));
}

export function getAllUsers(setData) {
  fetch(`http://localhost:8080`)
    .then((response) => response.json())
    .then((actualData) => setData(actualData.data))
    .catch((err) => console.error(err));
}

export function sendSignupData(username, email, password, confirmPassword, setResult) {
  const signupData = {
    username: `${username}`,
    email: `${email}`,
    password: `${password}`,
    confirmPassword: `${confirmPassword}`,
  };

  // console.dir(signupData);

  // send post request

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupData),
  };

  fetch("http://localhost:8080/api/signup", requestOptions)
    .then((response) => response.json())
    .then((data) => setResult(data))
    .catch((err) => console.error(err));
}
