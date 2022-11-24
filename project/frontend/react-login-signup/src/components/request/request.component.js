import React, { useEffect, useState } from "react";

function GetRequest() {
  const [state, setState] = useState("Loading data...");

  useEffect(() => {
    fetch("http://localhost:8080/api/private", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "text/plain",
        Accept: "text/plain",
      },
    })
      .then((response) => response.json())
      //   .then((response) => console.log(response))
      .then((data) => console.dir(data))
      .then((data) => setState(data));
  }, []);

  return (
    <>
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">Total react packages: </div>
      </div>
    </>
  );
}

export default GetRequest;
