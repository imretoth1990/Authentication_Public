export async function sendDataToResetPassword(secureCode, username, newPassword, setResponse) {
  //   console.log("secureCode 👉", secureCode);
  //   console.log("username 👉", username);
  //   console.log("newPassword 👉", newPassword);

  setResponse([{ message: "Success" }]);
  // const confirmData = {
  //   secureCode: `${secureCode}`,
  //   username: `${username}`,
  // }

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(confirmData),
  // }

  // const res = await fetch("http://localhost:8080/api/confirm", requestOptions)
  // const data = await res.json()

  // await setResponse(data.message)
}
