import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("http://localhost:3001/users/", {
      name: name,
      email: email,
      password: password,
    });

    alert("Your account has been created");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label className="title">Register</label>
          <div className="name-div">
            <label>Name</label>
            <input
              type="text"
              placeholder="Tim"
              required={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="email-div">
            <label>Email</label>
            <input
              type="email"
              placeholder="test@test.com"
              required={true}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="pass-div">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required={true}
            />
          </div>
          <button type="submit">Submit</button>
          <label className="to-login">Already have an account</label>
          <Link to={"/login"}> Login</Link>
        </div>
      </form>
    </>
  );
}
