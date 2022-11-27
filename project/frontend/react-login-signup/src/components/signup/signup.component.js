import React, { useEffect, useState } from "react";
import { findEmails, findUsernames /* , matchPasswords */ } from "./signup.validator";
import { getAllUsers } from "../../client/buttons.client";
import { sendSignupData } from "../../client/buttons.client";

export default function SignUp() {
  const [data, setData] = useState([]);
  const [findUsername, setFindUsername] = useState(null);
  const [findEmail, setFindEmail] = useState(null);
  // const [matchingPassword, setMatchingPassword] = useState(null);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  /**
   * Request allowed if
   * username: "notFound"
   * email: "notFound"
   * matchingPassword: "match"
   *  */

  useEffect(() => {
    getAllUsers(setData);
  }, []);

  function getInputValue(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    // console.log(inputValue);

    if (inputName === "username") {
      findUsernames(inputValue, data, setFindUsername);
      if (findUsername === "notFound") {
        setUsername(inputValue);
        console.log("setUsername: " + username);
      } /* else if (findUsername === "found") {
        setUsername("");
      } */
    } else if (inputName === "email") {
      findEmails(inputValue, data, setFindEmail);
      if (findEmail === "notFound") {
        setEmail(inputValue);
        console.log("setEmail: " + email);
      } /* else if (findEmail === "found") {
        setEmail("");
      } */
    } else if (inputName === "password") {
      setPassword(inputValue);
      console.log(password);
    } else if (inputName === "confirmPassword") {
      setConfirmPassword(inputValue);
      console.log(confirmPassword);
    }
    // } else if (inputName === "password") {
    //   setPassword(inputValue);
    //   // console.log(password);
    // } else if (inputName === "confirmPassword") {
    //   matchPasswords(inputValue, password, setMatchingPassword);
    //   if (matchingPassword === "notMatch") {
    //     // setPassword("");
    //     setConfirmPassword("");
    //   } else if (matchingPassword === "match") {
    //     // setPassword(inputValue);
    //     setConfirmPassword(inputValue);
    //     console.log("password: " + password + " " + confirmPassword);
    //   }
    // }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendSignupData(username, email, password, confirmPassword);
  }

  return (
    <form>
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
        {/* <label></label> */}
        <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword" onChange={(e) => getInputValue(e)} />
      </div>
      {/* <p className={matchingPassword === "match" ? "input-green" : matchingPassword === "notMatch" ? "input-red" : "forgot-password"}>
        {matchingPassword === "match" ? "Password is correct" : matchingPassword === "notMatch" ? "Incorrect password" : "Checking passwords..."}
      </p> */}
      <br></br>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}
