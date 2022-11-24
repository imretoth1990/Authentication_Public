// import React from "react";

// class GetRequest extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       totalReactPackages: null,
//     };
//   }

//   componentDidMount() {
//     // Simple GET request using fetch
//     fetch("http://localhost:8080/api/private")
//       .then((response) => response.json())
//       .then((data) => this.setState({ totalReactPackages: data.total }))
//       .then((data) => console.dir(data));
//   }

//   render() {
//     const { totalReactPackages } = this.state;
//     return (
//       <div className="card text-center m-3">
//         <h5 className="card-header">Simple GET Request</h5>
//         <div className="card-body">Total react packages: {totalReactPackages}</div>
//       </div>
//     );
//   }
// }

// export { GetRequest };
import React, { useState } from "react";

function GetRequest() {
  const [state, setState] = useState("Loading data...");

  function fetchData() {
    fetch("http://localhost:8080/api/private", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "text/plain",
        Accept: "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => console.dir(data))
      .then((data) => setState(data));
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
