import { Link } from "react-router-dom"
import pubi from "../../images/pubi.png"

export default function Buttons({ setButtonClicked }) {
  return (
    <form>
      <h3>Home Page</h3>
      <div className="image-container">
        <img src={pubi} alt="funny" height={180} />
      </div>
      <br></br>
      <br></br>
      <div className="mb-3 flex-box">
        <Link to="/request">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => setButtonClicked(e.target.textContent.toLowerCase())}
          >
            Private
          </button>
        </Link>

        <br></br>
        <Link to="/request">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => setButtonClicked(e.target.textContent.toLowerCase())}
          >
            Public
          </button>
        </Link>
      </div>
      <p className="default-text">
        Use this link in order to <Link to="/">log out</Link>.
      </p>
    </form>
  )
}
