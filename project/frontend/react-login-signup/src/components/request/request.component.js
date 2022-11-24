import React, { useEffect, useState } from "react";

function GetRequest() {
  const [data, setData] = useState([]);

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
      .then((actualData) => {
        console.dir(actualData);
        setData(actualData.string);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Total react packages: <p>{data === undefined ? "undefined" : data}</p>
        </div>
      </div>
    </>
  );
}

export default GetRequest;
