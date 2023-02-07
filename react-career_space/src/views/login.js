// import React from 'react';


// function Login() {
//   return (
//     <div className="Login">
//         <h1>This is the Login page</h1>
//     </div>
//   )
// }

// export default Login
// 

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";


export const Login = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //create a "check" so if they have a login, they will go to Dashboard page


  //create State for email and password

  return (
    <div>
      <div className="signup-form">
        <div className="forms">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="forms">
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button onClick={() => actions.sign_up(email, password)} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
    //create button to send data to endpoint (user information)

  );
};

export default Login