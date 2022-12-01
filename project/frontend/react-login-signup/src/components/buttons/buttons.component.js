import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pubi from "../../images/pubi.png";
import { getButtonData } from "../../client/buttons.client";

export default function Buttons() {
  const [data, setData] = useState("");
  const [buttonClicked, setButtonClicked] = useState("");

  useEffect(() => {
    getButtonData(setData, buttonClicked);
  }, [buttonClicked]);

  const displayMessage = (
    <>
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Message: <p>{data === undefined ? "undefined" : data}</p>
        </div>
      </div>
      <p className="not-registered text-right">
        Go back to <a href="./buttons">home page.</a>
      </p>
    </>
  );

  const displayHome = (
    <form>
      <h3>Home Page</h3>
      <div className="image-container">
        <img src={pubi} alt="funny" height={180} />
      </div>
      <br></br>
      <br></br>
      <div className="mb-3 flex-box">
        <button type="button" className="btn btn-primary" onClick={() => setButtonClicked("private")}>
          Private
        </button>

        <br></br>

        <button type="button" className="btn btn-primary" onClick={() => setButtonClicked("public")}>
          Public
        </button>
      </div>
      <p className="default-text">
        Use this link in order to <Link to="/">log out</Link>.
      </p>
    </form>
  );

  if (data) {
    return displayMessage;
  } else {
    return displayHome;
  }
}
