export async function sendSignupData(username, email, password, confirmPassword, setResponse) {
  const dataToSend = [];

  const signupData = {
    username: `${username}`,
    email: `${email}`,
    password: `${password}`,
    confirmPassword: `${confirmPassword}`,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupData),
  };

  const res = await fetch("http://localhost:8080/api/signup", requestOptions);
  const response = await res.json();

  await response.forEach((res) => dataToSend.push(res.message));

  await setResponse(dataToSend);
}
