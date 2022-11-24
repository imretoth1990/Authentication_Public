import React, { useState } from "react";

function GetRequest() {
  const [state, setState] = useState("Hello");

  /** !!!!!!!!!!!!
  * You need to remove the mode: 'no-cors' setting from your request. Setting no-cors mode is exactly the cause of the problem you’re having.

    A no-cors request makes the response type opaque. The log snippet in the question shows that. 
    Opaque means your frontend JavaScript code can’t see the response body or headers.
  */

  /**
     * People sometimes try setting no-cors mode when a response doesn’t include the Access-Control-Allow-Origin 
     * response header or else because the request is one that triggers a CORS preflight, and so your browser does an OPTIONS preflight.

    But using no-cors mode isn’t a solution to those problems. The solution is either to:

    configure the server to which you’re making the request such that it sends the Access-Control-Allow-Origin response header, 
    and such that it handles OPTIONS requests

    or set up a CORS proxy using code from https://github.com/Rob--W/cors-anywhere/ or such; see the How to use a CORS proxy to get 
    around “No Access-Control-Allow-Origin header” problems section of the answer at No 'Access-Control-Allow-Origin' header is 
    present on the requested resource—when trying to get data from a REST API
     */

  // Simple GET request using fetch
  function fetchData() {
    fetch("http://localhost:8080/api/private", {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "text/plain",
        Accept: "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => setState("Hello"));
  }

  fetchData();

  return (
    <>
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">Total react packages: {state}</div>
      </div>
    </>
  );
}

export default GetRequest;
