import React, { useState } from "react";
import { findEmail, findPassword, findUsername } from "./signup.validator";
import { getAllUsers } from "../../client/buttons.client";

export default function SignUp() {
  const [inputValue, setInputValue] = useState([]);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  function getInputValue(e) {
    const inputName = e.target.name;

    if (inputName === "username") {
      findUsername();
    } else if (inputName === "email") {
      findEmail();
    }

    // console.log(e.target.name);
    // setInputValue(e.target.value);
    // console.log(inputValue);
    // getAllUsers(setData);
    // console.dir(data);
    // validateInput(inputValue, data, setMessage);
  }

  return (
    <form>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={(e) => getInputValue(e)} />
      </div>
      <p className="forgot-password">{username === "found" ? "Username is occupied" : username === "notFound" ? "OK" : "Searching in database..."}</p>
      <div className="mb-3">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => getInputValue(e)} />
      </div>
      <p className="forgot-password">{email === "found" ? "Email adress is occupied" : email === "notFound" ? "OK" : "Searching in database..."}</p>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" name="password" />
      </div>
      <div className="mb-3">
        <label></label>
        <input type="password" className="form-control" placeholder="Confirm password" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}
