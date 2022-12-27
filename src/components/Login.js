import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertContext from '../context/alert/AlertContext';

function Login() {

  let navigate = useNavigate();
  let emailRef = useRef();
  let passwordRef = useRef();
  const { showAlert } = useContext(AlertContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    }

    const response = await fetch(`http://localhost:8080/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (response.status === 200) {
      let json = await response.json();
      localStorage.setItem("token", json.token);
      navigate("/");
      showAlert("success", "Logged In Successfully");
    } else {
      showAlert("error", "Invalid Credentials");
    }

  }
  return (
    <div className="container mt-2">
      <h2>Login to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login