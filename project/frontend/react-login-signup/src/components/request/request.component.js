import { useState } from "react";
import { getButtonData } from "../../client/buttons.client";

function GetRequest({ buttonClicked }) {
  const [data, setData] = useState("");

  getButtonData(setData, buttonClicked);

  return (
    <>
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Message: <p>{data === undefined ? "undefined" : data}</p>
        </div>
      </div>
      <p className="not-registered text-right">
        Go back to <a href="/buttons">home page.</a>
      </p>
    </>
  );
}

export default GetRequest;
