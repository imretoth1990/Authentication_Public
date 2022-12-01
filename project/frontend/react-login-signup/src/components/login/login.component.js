import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { sendLoginData } from "../../client/login.client"

export default function Login() {
  const navigate = useNavigate()

  const loginInput = useRef(null)
  const passwordInput = useRef(null)

  const [response, setResponse] = useState([])
  const [warnMessage, setWarnMessage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    sendLoginData(loginInput.current.value, passwordInput.current.value, setResponse)

    if (response.includes("successful")) {
      navigate("/buttons")
    } else {
      setWarnMessage("Incorrect username/email or password")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <p className="text-danger text-center">{warnMessage}</p>
      <div className="mb-3">
        <label>Username or Email</label>
        <input
          type="username"
          ref={loginInput}
          className="form-control"
          placeholder="username or email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          ref={passwordInput}
          className="form-control"
          placeholder="password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <Link to="/reset">password?</Link>
      </p>
      <p className="not-registered text-right">
        If your are not registered, please <Link to="/sign-up">sign up!</Link>
      </p>
    </form>
  )
}
