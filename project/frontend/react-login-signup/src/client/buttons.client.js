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

export async function sendSignupData(username, email, password, confirmPassword) {
  const signupData = {
    username: `${username}`,
    email: `${email}`,
    password: `${password}`,
    confirmPassword: `${confirmPassword}`,
  };

  console.dir(signupData);

  // send post request

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupData),
  };

  const res = await fetch("http://localhost:8080/api/signup", requestOptions);
  const data = await res.json();
  console.log(data);
}
