import React, { useState } from "react";
import { connect } from "react-redux";
import { onLogin, onSignup } from "../store/user.actions";
import { Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

function _Homepage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  if (props.user) return (<Redirect to={'/menu'} />)

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (username.trim() && password.trim()) {
      let res
      if (!isLogin) {
        // props.onSignup({ username, password, fullname });
        res = await props.onSignup({ username, password, fullname });
        if (!res) {
          setErrMsg('Username already exists')
          setErr(true)
        }
      } else {
        res = await props.onLogin({ username, password });
        if (!res) {
          setErrMsg('Incorrect password or username')
          setErr(true)
        }
      }
      if (res) props.history.push("/menu");
    }
  };

  const componentClicked = () => {
    console.log('clicked')
  }

  const responseFacebook = (res) => {
    console.log('res', res)
  }

  return (
    <div className="login-signup flex column align-center margin-top">
      <div className="login-container flex column">
        {isLogin ? <p>Log in to Fitness Pal</p> : <p>Sign up</p>}
        <form className="flex column" onSubmit={onSubmit}>
          <input
            type="txt"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
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
          {err && <span className="err">{errMsg}</span>}
          <button className="login-submit">
            {isLogin ? "Log me in" : "Sign me up"}
          </button>
        </form>
        
        <FacebookLogin
          appId="1150970532306174"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          cssClass="loginBtn loginBtn--facebook"
          textButton= {isLogin ? "Continue with Facebook" : 'Sign up with Facebook'}
        />

        <p onClick={() => { setIsLogin(!isLogin); setErr(false); }}>
          {isLogin ? "Or sign up..." : "Back to Login"}
        </p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userModule.loggedinUser,
  };
}

const mapDispatchToProps = {
  onLogin,
  onSignup,
};

export const Homepage = connect(mapStateToProps, mapDispatchToProps)(_Homepage);