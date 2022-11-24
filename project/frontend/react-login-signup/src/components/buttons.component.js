import React, { Component } from "react";
export default class Buttons extends Component {
  render() {
    return (
      <form>
        <h3>Home Page</h3>
        <br></br>
        <br></br>
        <div className="mb-3 flex-box">
          <button type="submit" className="btn btn-primary">
            Private
          </button>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Public
          </button>
        </div>
        <p className="default-text">
          Use this link in order to <a href="/">log out.</a>
        </p>
      </form>
    );
  }
}
