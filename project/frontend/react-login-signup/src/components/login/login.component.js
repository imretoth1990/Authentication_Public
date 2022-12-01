import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendLoginData } from "../../client/login.client";

export default function Login() {
  const loginInput = useRef(null);
  const password = useRef(null);

  const [response, setResponse] = useState([]);
  const [renderDisplay, setRenderDisplay] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // send data to login client
    sendLoginData(loginInput.current.value, password.current.value, setResponse);
    setRenderDisplay(true);
  }

  /**
   * if response OK, redirect to homepage (to buttons)
   */

  if (renderDisplay) {
    if (response.includes("successful")) {
      navigate("/buttons");
    } else {
      return <p className="text-danger text-center">{response}</p>;
    }
  } else {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Username or Email</label>
          <input type="username" ref={loginInput} className="form-control" placeholder="Enter username or email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" ref={password} className="form-control" placeholder="Enter password" />
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
