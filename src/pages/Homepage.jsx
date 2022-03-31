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
  const [isFacebookLogin, setIsFacebookLogin] = useState(false);

  if (props.user) return (<Redirect to={'/menu'} />)

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!username || !password) {
      setErrMsg('Please fill in all fields')
      setErr(true)
      return
    }
    if (username.trim() && password.trim()) {
      let res
      if (!isLogin) {
        if (!fullname) {
          setErrMsg('Please fill in all fields')
          setErr(true)
          return
        }
        res = await props.onSignup({ username: username.trim(), password, fullname });
        if (!res) {
          setErrMsg('Username already exists')
          setErr(true)
        }
      } else {
        res = await props.onLogin({ username: username.trim(), password });
        if (!res) {
          setErrMsg('Incorrect password or username')
          setErr(true)
        }
      }
      if (res) props.history.push("/menu")
    }
  };

  const onFacebookClicked = () => {
    setIsFacebookLogin(true)
  }

  const responseFacebook = async (res) => {
    if (!isFacebookLogin) return
    const fullname = res.name;
    const username = res.email;
    const password = res.id;
    isLogin
      ? await props.onLogin({ username, password })
      : await props.onSignup({ username, password, fullname });
    props.history.push("/menu");
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
            className={(!username && err) ? 'input-err' : ''}
          />
          {!isLogin && (
            <input
              type="txt"
              value={fullname}
              onChange={(ev) => setFullname(ev.target.value)}
              placeholder="Enter Full Name"
              className={(!fullname && err) ? 'input-err' : ''}
            />
          )}
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="Enter Password"
            className={(!password && err) ? 'input-err' : ''}
          />
          {err && <span className="err">{errMsg}</span>}
          <button className="login-submit">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <FacebookLogin
          appId="1150970532306174"
          autoLoad={true}
          fields="name,email,picture"
          onClick={onFacebookClicked}
          callback={responseFacebook}
          cssClass="loginBtn loginBtn--facebook"
          textButton={isLogin ? "Continue with Facebook" : 'Sign up with Facebook'}
        />

        <p onClick={() => { setErr(false); setIsLogin(!isLogin); }}>
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