import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import { sendDataToResetPassword } from "../../client/password.client";

export default function Password() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState([]);
  const [renderResponse, setRenderResponse] = useState(false);

  const [newPassword, setNewPassword] = useState(null);

  //   const navigate = useNavigate();

  function handleConfirm() {
    const code = searchParams.get("code");
    const username = searchParams.get("user");

    sendDataToResetPassword(code, username, newPassword, setResponse);
    setRenderResponse(true);
  }

  //   if (renderResponse) {
  //     if (response.includes("Invalid")) {
  //       setTimeout(() => {
  //         navigate("/sign-up"); // react useNavigate doesn't cause re-render
  //       }, 3000);
  //     } else {
  //       setTimeout(() => {
  //         navigate("/sign-in"); // react useNavigate doesn't cause re-render
  //       }, 3000);
  //     }
  //   }

  if (renderResponse) {
    if (response.includes("Invalid")) {
      return (
        <>
          <div className="card text-center m-3">
            <h3 className="card-header text-danger">Oooops. Something went wrong!</h3>
          </div>
          <div className={"input-red"}>
            <p>{response || "Waiting for response..."}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="card text-center m-3">
            <h3 className="card-header text-success">Hurray!</h3>
          </div>
          <div className="input-green text-center">
            <p>{response || "Waiting for response..."}</p>
          </div>
          <p className="text-center">
            <Link to={"/"}>Login</Link>
          </p>
        </>
      );
    }
  } else {
    return (
      <>
        <div>
          <h3>Change </h3>
          <h3>your password.</h3>
          <br></br>
        </div>
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control" placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={handleConfirm}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
