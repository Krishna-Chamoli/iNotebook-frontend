import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertContext from '../context/alert/AlertContext';

function Signup() {

    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let navigate = useNavigate();
    const { showAlert } = useContext(AlertContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "name": nameRef.current.value,
            "email": emailRef.current.value,
            "password": passwordRef.current.value
        }

        const response = await fetch(`http://localhost:8080/api/users/adduser`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 201) {
            navigate("/login");
            showAlert("success", "Sign Up Successfully, Now please log in")
        } else {
            let json = await response.json();
            showAlert("error", json.error);
        }
    }
    return (
        <div className='container mt-3'>
            <h2 className='mb-3'>Signup to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
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

export default Signup