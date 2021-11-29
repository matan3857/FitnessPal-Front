import React, { useState } from "react";
import { connect } from "react-redux";
import { onLogin, onSignup } from "../store/user.actions";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from '../assets/img/logo.jpg';

function _Homepage(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (username.trim() && password.trim()) {
      if (username === 'admin' && password === '123') props.history.push("/menu");
      // if (fullname) {
      // await props.onSignup({ username, password, fullname, imgUrl: "" });
      // } else {
      // props.onLogin({ username, password });
      // }
    }
    // props.history.push("/menu");
  };


  return (
    <div className="login-signup  flex column align-center">
      <div className="logo flex ">
        <img src={logo} className="logo logo-icon" />
        <h1>Fitness Pal</h1>
      </div>
      <div className="login-container flex column">
        {isLogin ? <p>Log in to Fitness Pal</p> : <p>Sign up</p>}
        <form className="flex column" onSubmit={onSubmit}>
          <input
            type="txt"
            value={username}
            onChange={(ev) =>  setUsername(ev.target.value)}
            placeholder="Enter Username"
          />
          {!isLogin && (
            <input
              type="txt"
              value={fullname}
              onChange={(ev) => setFullname(ev.target.value)}
              placeholder="Enter Full Name"
            />
          )}
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Enter Password"
          />
          <button className="login-submit">
            {isLogin ? "Log me in" : "Sign me up"}
          </button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Or sign up..." : "Back to Login"}
        </p>
      </div>
    </div>
  );

}

const mapDispatchToProps = {
  onLogin,
  onSignup,
};

export const Homepage = connect(null, mapDispatchToProps)(_Homepage);