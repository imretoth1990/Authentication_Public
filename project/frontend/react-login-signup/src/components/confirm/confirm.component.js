import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { sendConfirmDataToBackend } from "../../client/confirm.client";

export default function Confirm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [code, setCode] = useState(null);
  const [username, setUsername] = useState(null);
  const [response, setResponse] = useState(null);
  const [renderResponse, setRenderResponse] = useState(false);

  function handleConfirm() {
    // event.preventDefault();
    const codeFromUrl = searchParams.get("code");
    const usernameFromUrl = searchParams.get("user");
    setCode(codeFromUrl);
    setUsername(usernameFromUrl);

    console.log(code + " " + username);

    sendConfirmDataToBackend(code, username, setResponse);
    setRenderResponse(true);
  }

  if (renderResponse) {
    return (
      <>
        <div>
          <h3>Hurray! </h3>
          {/* <h3>your registration!</h3> */}
          <br></br>
        </div>
        <div className="input-green">
          <h3>{response || "Waiting for connection..."}</h3>
        </div>
      </>
    );
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
