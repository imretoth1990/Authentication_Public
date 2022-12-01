import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import Reset from "./components/reset/reset.component";
import Buttons from "./components/buttons/buttons.component";
import Confirm from "./components/confirm/confirm.component";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="navbar-brand" to={"/"}>
              ReactorS
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/buttons"}>
                    Home
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/confirm/" element={<Confirm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
