export async function sendLoginData(loginInput, password, setResponse) {
  /**
   * store response data
   */

  const responseData = [];

  /**
   * check input
   */

  function checkEmail(str) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return regex.test(str);
  }

  const isEmail = checkEmail(loginInput);

  /**
   * assign key values to object
   */

  let loginData = "";

  if (isEmail) {
    loginData = {
      email: `${loginInput}`,
      password: `${password}`,
    };
  } else {
    loginData = {
      username: `${loginInput}`,
      password: `${password}`,
    };
  }

  // send post request to backend

  const requestOptions = {
    method: "POST",
    mode: "cors",
    redirect: "follow",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(loginData),
  };

  const res = await fetch("http://localhost:8080/api/login", requestOptions);
  const response = await res.json();

  await response.forEach((res) => responseData.push(res.message));

  await setResponse(responseData);
}
