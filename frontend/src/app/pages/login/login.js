import React from "react";
import "./login.css";

function LoginPage() {
  return (
    <>
      <div className="contentBlock">
        <h2>LOGIN TO YOUR ONLINE ACCOUNT</h2>
        <form>
          <div className="username">
            <input type="text"></input>
          </div>
          <div className="password">
            <input type="password"></input>
          </div>
          <button type="submit">LOGIN</button>
          <button type="submit">Not Registered?</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
