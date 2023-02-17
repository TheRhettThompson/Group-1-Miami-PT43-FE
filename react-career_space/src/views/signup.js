 import React, { useState } from "react";
import { Context } from "../store/appContext";
import "../styles/signup.css";
import axios from "axios";

export const signup = () => {
  const [values, setValues] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, firstname, lastname } = values;

    const userData = { email, password, firstname, lastname };

    const options = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    await axios
      .post(
        `https://3001-therhetttho-group1miami-8zuciurcbbs.ws-us86.gitpod.io/api/signup`,
        userData,
        options
      )
      .then((result) => {
        console.log(result.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //create State for email and password

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="forms">
          <label>First Name</label>
          <input
            type="text"
            value={values.firstname}
            placeholder="Enter your First name"
            onChange={handleChange("firstname")}
          />
          <br></br>
          <label>Last Name</label>
          <input
            type="text"
            value={values.lastname}
            placeholder="Enter your Last Name"
            onChange={handleChange("lastname")}
          />
          <br></br>
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            placeholder="Enter your email"
            onChange={handleChange("email")}
          />
          <br></br>
          <label>Password</label>
          <input
            type="password"
            value={values.password}
            placeholder="Enter your password"
            onChange={handleChange("password")}
          />
        </div>
        <br></br>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>

    //create button to send data to endpoint (user information)
  );
};

export default signup;
