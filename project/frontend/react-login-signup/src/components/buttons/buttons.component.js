import React, { Component /* useState */ } from "react";
// import getButtonData from "./buttons.functions";

export default class Buttons extends Component {
  // const [message, setMessage] = useState('');

  render() {
    return (
      <form>
        <h3>Home Page</h3>
        <br></br>
        <br></br>
        <div className="mb-3 flex-box">
          <button type="submit" className="btn btn-primary" /* onClick={(e) => getButtonData(e, "private")} */>
            <a href="/request">Private</a>
          </button>

          <br></br>
          <button type="submit" className="btn btn-primary" /* onClick={(e) => getButtonData(e, "public")} */>
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
