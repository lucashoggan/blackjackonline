import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { useRouter } from "next/router";
var crypto = require("crypto");

const signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const router = useRouter();

  const signup_fnc = () => {
    setErrorText("");
    if (username != "" && password != "") {
      const passhash = crypto
        .createHash("sha256")
        .update(password)
        .digest("hex");
      const r = fetch("/api/signup", {
        body: JSON.stringify({ username, passhash }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((response) =>
        response.json().then((data) => {
          if (data.success == true) {
            sessionStorage.setItem("username", data.username);
            sessionStorage.setItem("token-id", data.token_id);
            router.push("/games");
          } else {
            setErrorText(data.reason);
          }
        })
      );
    } else {
      setErrorText("Enter both a username and password.");
    }
  };

  return (
    <>
      <Header></Header>
      <main className="signup">
        <h2 className="title">Sign-Up</h2>
        <input
          className="su-un-in"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="su-pw-in"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="su-btn" onClick={signup_fnc}>
          Sign-Up
        </button>
        <h4 className="error-info">{errorText}</h4>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </main>
    </>
  );
};

//sessionStorage.setItem("username", success[0].username); sessionStorage.setItem("token-id", success[0].token_id);
export default signup;
