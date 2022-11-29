import { Link } from "react-router-dom"

export default function Login() {
  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username/Email</label>
        <input
          type="username/email"
          className="form-control"
          placeholder="Enter username or email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
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
