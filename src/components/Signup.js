// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'

// const Signup = (props) => {
//   const [credentials, setCredentials] = useState({name:"",email:"", password:"", cpassword:""})
//   let history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const {name,email,password}=credentials;
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name, email, password})
//     });
//     const json = await response.json()
//     console.log(json);
  
//     if (json.success){
//       // Save the auth token and redirect
//       localStorage.setItem('token', json.authtoken); 
//       history.push("/");
// prop
//   }
//   else{
//       props.showAlert("Invalid credentials","danger");
//   }
 
// }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }
//     return (
//         <div className='container'>
//            <form onSubmit={handleSubmit}>
//            <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" id="name" name="name"onChange={onChange} aria-describedby="name"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="email" name="email"onChange={onChange} aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="passowrd" className="form-label">Password</label>
//     <input type="password" className="form-control" id="password" name="passowrd" onChange={onChange} required minLength={5} />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="cpassowrd" className="form-label"> Confirm Password</label>
//     <input type="password" className="form-control" id="cpassword" name="cpassowrd" onChange={onChange} required minLength={5}/>
//   </div>

//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
//         </div>
//     )
// }

// export default Signup

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
       props.showAlert("Account created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-warning mb-4">Sign Up to access iNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-floating">
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            required
            minLength={3}
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>
        <div className="mb-3 form-floating">
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            minLength={5}
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 form">
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            required
            minLength={5}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div id="passwordHelp" className="form-text">
            <strong>
              Note: ** You cannot reset your password again for security reasons
              **
            </strong>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
