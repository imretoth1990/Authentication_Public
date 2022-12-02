import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findEmails, findUsernames } from "./signup.validator";
import { getAllUsers } from "../../client/buttons.client";
import { sendSignupData } from "../../client/signup.client";

export default function SignUp() {
  const [data, setData] = useState([]);
  const [findUsername, setFindUsername] = useState(null);
  const [findEmail, setFindEmail] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [response, setResponse] = useState([]);

  const [renderDisplay, setRenderDisplay] = useState(false);

  useEffect(() => {
    getAllUsers(setData);
  }, []);

  // Check if username and email occupied

  function getInputValue(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "username") {
      findUsernames(inputValue, data, setFindUsername);
      if (findUsername === "notFound") {
        setUsername(inputValue);
      }
    } else if (inputName === "email") {
      findEmails(inputValue, data, setFindEmail);
      if (findEmail === "notFound") {
        setEmail(inputValue);
      }
    } else if (inputName === "password") {
      setPassword(inputValue);
    } else if (inputName === "confirmPassword") {
      setConfirmPassword(inputValue);
    }
    console.log(findUsername);
    console.log(findEmail);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendSignupData(username, email, password, confirmPassword, setResponse);
    setRenderDisplay(true);
  }

  if (renderDisplay) {
    if (response.includes("Registration is successful")) {
      return (
        <>
          <div className="card text-center">
            <h5 className="card-header text-success">You are done!</h5>
            <div className="card-body">
              Message:{" "}
              <p>
                {response} <br /> Check your inbox to verify your account.
              </p>
            </div>
          </div>
          <p className="input-green">
            Go back to <Link to="/sign-in"> sign in.</Link>
          </p>
        </>
      );
    } else {
      return (
        <>
          <div className="card text-center m-3">
            <h5 className="card-header text-danger">Oooops. Something missing!</h5>
            <div className="card-body">
              Message:
              {response.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <p>{item}</p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <p className="input-red">
            Go back to <a href="/sign-up"> sign up</a> again.
          </p>
        </>
      );
    }
  } else {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={(e) => getInputValue(e)} />
        </div>
        <p className={findUsername === "found" ? "input-red" : findUsername === "notFound" ? "input-green" : "forgot-password"}>
          {findUsername === "found" ? "Username is occupied" : findUsername === "notFound" ? "OK" : "Searching in database..."}
        </p>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => getInputValue(e)} />
        </div>
        <p className={findEmail === "found" ? "input-red" : findEmail === "notFound" ? "input-green" : "forgot-password"}>
          {findEmail === "found" ? "Email adress is occupied" : findEmail === "notFound" ? "OK" : "Searching in database..."}
        </p>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e) => getInputValue(e)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword" onChange={(e) => getInputValue(e)} />
        </div>
        <br></br>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/sign-in">sign in?</Link>
        </p>
      </form>
    );
  }
}
