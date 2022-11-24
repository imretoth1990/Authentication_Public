// Send GET request to server on button click
const getButtonData = /* async */ (e, buttonName) => {
  e.preventDefault();

  fetch("http://localhost:8080/api/private", {
    method: "GET",
    // mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
      Accept: "text/plain",
    },
  })
    .then((response) => response.json())
    .then((data) => /* this.setState({ totalReactPackages: data.total }) */ console.log(data));

  /* This sends an HTTP GET request from React to the npm api 
    to search for all react packages using the query q=react, then assigns the 
    total returned in the response to the component state property totalReactPackages 
    so it can be displayed in the render() method. */

  //   try {
  //     const res = await fetch(`http://localhost:8080/api/${buttonName}`, {
  //       method: "GET",
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // const data = await res.json();
  //     console.log(res);
  //   } catch (error) {
  //     console.error(error);
  //   }

  // and we also need to fetch the current user id
};

export default getButtonData;
