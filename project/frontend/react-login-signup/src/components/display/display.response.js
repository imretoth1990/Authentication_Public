import { useState } from "react";

export function DisplayResponse({ response }) {
  const [message, setMessage] = useState([]);

  setMessage(response);

  console.log(message);

  if (message.includes("Registration is successful")) {
    return (
      <>
        <div className="card text-center m-3">
          <h5 className="card-header">You are done!</h5>
          <div className="card-body">
            Message: <p>{message}</p>
          </div>
        </div>
        <p className="input-green">
          Go back to <a href="/sign-in"> sign in.</a>
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className="card text-center m-3">
          <h5 className="card-header">Oooops. Something missing!</h5>
          <div className="card-body">
            Message: <p>{message}</p>
          </div>
        </div>
        <p className="input-red">
          Go back to <a href="/sign-up"> sign up again.</a>
        </p>
      </>
    );
  }
}
