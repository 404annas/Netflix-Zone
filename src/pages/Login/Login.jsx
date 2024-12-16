import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import loadingSpinner from "../../assets/netflix_spinner.gif";
import { logIn, signUp } from "../../firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await logIn(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="spinner">
      <img src={loadingSpinner} alt="Loader" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="Netflix Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
              required
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />
          <button onClick={userAuth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New To Netflix ?{" "}
              <span onClick={() => setSignState("Sign Up")}>SignUp Now</span>
            </p>
          ) : (
            <p>
              Already Have An Account ?{" "}
              <span onClick={() => setSignState("Sign In")}>SignIn Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
