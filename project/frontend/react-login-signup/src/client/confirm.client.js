export async function sendDataToConfirm(code, username, setResponse, fullURL) {
  const dataToSend = [];

  const confirmData = {
    code: `${code}`,
    username: `${username}`,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(confirmData),
  };

  const res = await fetch("http://localhost:8080/api/confirm", requestOptions);
  const response = await res.json();

  await response.forEach((res) => dataToSend.push(res.message));

  await setResponse(dataToSend);
}
