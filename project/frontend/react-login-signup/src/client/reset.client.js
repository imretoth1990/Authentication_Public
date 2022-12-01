export async function sendResetData(email, setResponse) {
  function checkEmail(str) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return regex.test(str);
  }

  // const responseData = [];

  const isEmail = checkEmail(email);

  // hellomiki@gmail.com
  let loginData = "";

  if (isEmail) {
    loginData = {
      email: `${email}`,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };

    const res = await fetch("http://localhost:8080/api/reset", requestOptions);
    // const response = await res.json();

    // console.log(response);

    // await response.forEach((res) => responseData.push(res.message));

    // await setResponse(responseData);
    // } else {
    //   setResponse([{ message: "Invalid email adress" }]);
    // }
  }
}
