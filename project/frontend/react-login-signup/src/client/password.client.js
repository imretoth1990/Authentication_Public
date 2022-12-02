export async function sendDataToResetPassword(secureCode, username, newPassword, setResponse) {
  const dataWithNewPassword = {
    secureCode: `${secureCode}`,
    username: `${username}`,
    newPassword: `${newPassword}`,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataWithNewPassword),
  };

  const res = await fetch("http://localhost:8080/api/password", requestOptions);
  const response = await res.json();

  await setResponse(response.message);
}
