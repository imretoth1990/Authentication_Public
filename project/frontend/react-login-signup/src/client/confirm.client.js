export async function sendDataToConfirm(secureCode, username, setResponse, fullURL) {
  const confirmData = {
    secureCode: `${secureCode}`,
    username: `${username}`,
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(confirmData),
  }

  const res = await fetch("http://localhost:8080/api/confirm", requestOptions)
  const data = await res.json()

  await setResponse(data.message)
}
