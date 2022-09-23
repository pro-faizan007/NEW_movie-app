import React, { useState, useContext } from 'react'
import './signin.css'
import movieContext from '../../context/Movie/movieContext'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = () => {
    const context = useContext(movieContext)
    const { handleOnChange, setAlert } = context


    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const loginUser = async (e) => {
        e.preventDefault()
        // const response = await fetch('http://localhost:3005/api/auth/signin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',

        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password })
        // });
        // const json = await response.json();
        // console.log(json);
        // if (json.success) {

        //     setAlert(json.msg)
        //     handleOnChange(true)
        //     navigate('/explore')
        // } else {
        //     setAlert(json.msg)
        // }

        if (credentials.email !== "osama" && credentials.password !== "1234") {

        } else {
            handleOnChange(true)
            navigate('/explore')
            setAlert("Successfully Login")
        }


    }
    const change = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>

            <div className="sigin-in">
                <div className="input-box">
                    <h2 className='heading'>Sign In</h2>
                    <div className="sub-input">
                        <input type="email" className='input-link' value={credentials.email} onChange={change} name="email" id='email' />
                        <input type="password" className='input-link' value={credentials.password} onChange={change} name="password" id='password' />
                    </div>
                    <div className="btn">
                        <button type='submit' className='btn-input' onClick={loginUser} >Sign In</button>
                    </div>
                    <Link to="/signup">Don't Have an Account?</Link>
                </div>
            </div>

        </>
    )
}

export default SignIn



