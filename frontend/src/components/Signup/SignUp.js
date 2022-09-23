import React, { useContext } from 'react'
import './signup.css'
import movieContext from '../../context/Movie/movieContext'
import { useNavigate, Link } from 'react-router-dom'

const SignUp = () => {
    const context = useContext(movieContext)
    const { handleOnChange, userInput, setUserInput, setAlert } = context
    const navigate = useNavigate();
    const { name, email, password } = userInput
    const registerUser = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3005/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        })

        const json = await response.json()
        console.log(json);
        if (json.success) {
            setAlert(json.msg)
            handleOnChange(true)
            navigate('/explore')
        } else {
            setAlert(json.msg)
        }
    }
    const change = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }


    return (
        <>

            <div className="sigin-up">
                <div className="sigin-box">
                    <h2 className='sigin-heading'>Sign Up</h2>
                    <div className="sigin-input">
                        <input type="text" className='sigin-link' value={userInput.name} onChange={change} name="name" id='name' placeholder='Enter Your Name Here' />
                        <input type="email" className='sigin-link' value={userInput.email} onChange={change} name="email" id='email' placeholder='Enter Your Email Here' />
                        <input type="password" className='sigin-link' value={userInput.password} onChange={change} name="password" id='password' placeholder='Enter Your Password Here' />
                        <input type="password" className='sigin-link' value={userInput.epassword} onChange={change} name="epassword" id='password' placeholder='Confirm Your Password Here' />

                    </div>
                    <div className="btn">
                        <button type='submit' className='btn-input' onClick={registerUser} >Sign Up</button>
                    </div>
                    <Link to="/">Already Have an Account?</Link>
                </div>
            </div>

        </>
    )
}

export default SignUp



