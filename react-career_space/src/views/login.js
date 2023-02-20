import React, { useState } from "react";
import { Context } from "../store/appContext";
import "../styles/signup.css";
import axios from "axios";

import '../styles/login.css';

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = values;

    const userData = { email, password };

    const options = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    await axios
      .post(
        `https://3001-therhetttho-group1miami-83kks56v92r.ws-us87.gitpod.io/api/login`,
        userData,
        options
      )
      .then((result) => {
        window.localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
        window.location.href = "/jobs"
        console.log(result.data);
      })

      .catch((error) => {
        console.log(error);
      });
    // try {
    //   const res = await axios.post(
    //     `https://3001-therhetttho-group1miami-8zuciurcbbs.ws-us86.gitpod.io/api/login`,
    //     userData,
    //     options
    //   );

    //   const { token } = res.token;
    //   localStorage.setItem("token", token);
    // } catch (error) {
    //   console.log("error", error.response);
    // }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //create State for email and password

  return (
    <div className="LogBox">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="forms">
          {/* <label>Email</label> */}
          <br/>
          <input
            type="email"
            value={values.email}
            placeholder="Email"
            onChange={handleChange("email")}
          />
          <br></br>
          {/* <label>Password</label> */}
          <input
            type="password"
            value={values.password}
            placeholder="Password"
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

export default Login;
