export function getButtonData(setData, buttonClicked) {
  // Guard clause
  if (buttonClicked === "" || buttonClicked === undefined) return;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  };

  fetch(`http://localhost:8080/api/${buttonClicked}`, options)
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
