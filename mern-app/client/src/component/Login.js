import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedName, setLoggedName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const res = response.data;

        if (res.password === password) {
          setLoggedName(res.name);
        } else if (res.password !== password) {
          setLoggedName("Password is wrong please try again");
          setTimeout(myTimeout, 5000);
        }
      });
  }

  function myTimeout() {
    setLoggedName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label className="title">Login</label>
          <div className="inf-div">
            <div className="email-div">
              <label>Email</label>
              <input
                type="email"
                required={true}
                placeholder="test@test.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="pass-div">
              <label>Password</label>
              <input
                type="password"
                required={true}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit">Submit</button>

            <label className="label">Don't you have any account </label>
            <Link to={"/register"}> Sign Up Now!</Link>
          </div>
        </div>
      </form>
      <h1> {loggedName} </h1>
    </>
  );
}
