import React from "react";
import "./login.css";

function LoginPage() {
  return (
    <>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <form>
        <div className="username">
          <label>Username:</label>
          <input type="text"></input>
        </div>
        <div className="password">
          <label>Password:</label>
          <input type="password"></input>
        </div>
        <button type="submit">LOGIN</button>
        <a>NOT REGISTERED?</a>
      </form>
    </>
  );
}

export default LoginPage;
