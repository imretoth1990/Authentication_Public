import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { sendDataToConfirm } from "../../client/confirm.client";

export default function Confirm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState("");
  const [renderResponse, setRenderResponse] = useState(false);

  const navigate = useNavigate();

  function handleConfirm() {
    const code = searchParams.get("code");
    const username = searchParams.get("user");

    sendDataToConfirm(code, username, setResponse);
    setRenderResponse(true);
  }

  /* function returnToSignIn() {
    window.location.href = "/sign-in";
    navigate("/sign-in");
  } */

  /* function returnToSignUp() {
    window.location.href = "/sign-up";
    navigate("/sign-up");
  } */

  if (renderResponse) {
    if (response.includes("Invalid")) {
      setTimeout(() => {
        navigate("/sign-up");
      }, 3000);
    } else {
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    }
  }

  if (renderResponse) {
    if (response.includes("Invalid")) {
      return (
        <>
          <div className="card text-center m-3">
            <h3 className="card-header text-danger">Oooops. Something missing!</h3>
          </div>
          <div /* className={"input-red"} */>
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
          <div /* className={"input-green"} */>
            <p>{response || "Waiting for response..."}</p>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <div>
          <h3>Confirm </h3>
          <h3>your registration!</h3>
          <br></br>
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </>
    );
  }
}
