import React, { Component } from "react";
export default class Reset extends Component {
  render() {
    return (
      <form>
        <h3>Reset password</h3>
        <p className="default-text">Send a request to reset your password</p>
        <br></br>
        <div className="mb-3">
          <label>Username or Email</label>
          <input type="username/email" className="form-control" placeholder="Enter username or email" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
        <p className="not-registered text-right">
          Go back to <a href="/sign-in">sign in.</a>
        </p>
      </form>
    );
  }
}
