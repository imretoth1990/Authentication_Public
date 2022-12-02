import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendResetData } from "../../client/reset.client";

export default function Reset() {
  const email = useRef(null);
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    sendResetData(email.current.value, setResponse);
  }

  useEffect(() => {
    if (response[0]?.message.includes("Successful")) {
      email.current.value = "Check your inbox. Now you'll be redirected";
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
  }, [response]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Reset password</h3>
      <p className="default-text-lg text-center">Use your email to reset your password</p>
      {response &&
        response.map((res, index) => (
          <p key={index} className="default-text-lg text-center">
            {res.message}
          </p>
        ))}

      <br></br>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" ref={email} className="form-control" placeholder="Enter email" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
      <p className="not-registered text-right">
        Go back to <Link to="/sign-in">sign in.</Link>
      </p>
    </form>
  );
}
