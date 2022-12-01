import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendLoginData } from "../../client/login.client";

export default function Login() {
  const [loginInput, setLoginInput] = useState(null);
  const [password, setPassword] = useState(null);
  const [response, setResponse] = useState([]);
  const [warnMessage, setWarnMessage] = useState("");
  const [renderDisplay, setRenderDisplay] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("loginInput 👉️", loginInput);
    console.log("password 👉️", password);

    // send data to login client
    sendLoginData(loginInput, password, setResponse);
    setRenderDisplay(true);

    // console.log("response 👉️", response);
    // clear input values
    // setLoginInput(null);
    // setPassword(null);
  }

  /**
   * if response OK, redirect to homepage (to buttons)
   */

  if (renderDisplay) {
    if (response.includes("successful")) {
      navigate("/buttons");
    } else {
      // setWarnMessage(response);
      // setRenderResponse(false);
      return <p className="text-danger text-center">{response}</p>;
    }
  } else {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Username or Email</label>
          <input type="username" className="form-control" placeholder="username or email" onChange={(e) => setLoginInput(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <Link to="/reset">password?</Link>
        </p>
        <p className="not-registered text-right">
          If your are not registered, please <Link to="/sign-up">sign up!</Link>
        </p>
      </form>
    );
  }
}
