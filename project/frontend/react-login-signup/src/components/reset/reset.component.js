import { useState } from "react";
import { Link } from "react-router-dom";
import { sendResetData } from "../../client/reset.client";

export default function Reset() {
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("email 👉", email);

    //call reset client and make request
    sendResetData(email, setResponse);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Reset password</h3>
      <p className="default-text">Use your email to reset your password</p>
      <br></br>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
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
