import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendConfirmDataToBackend } from "../../client/confirm.client";

export default function Confirm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [code, setCode] = useState(null);
  const [username, setUsername] = useState(null);
  const [response, setResponse] = useState(null);

  function handleConfirm() {
    // event.preventDefault();
    const codeFromUrl = searchParams.get("code");
    const usernameFromUrl = searchParams.get("user");
    setCode(codeFromUrl);
    setUsername(usernameFromUrl);

    console.log(code + " " + username);

    sendConfirmDataToBackend(code, username, setResponse);
  }

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
