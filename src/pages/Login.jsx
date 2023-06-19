import React from 'react'

function Login() {
  return (
      <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Anukul chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="email" name="" id="" placeholder='email' />
                <input type="password"  name="" id="" placeholder='passwordd' />
                <button>sign in</button>
            </form>
            <p>you do have an accoutn?Register</p>
        </div>
      </div>
    )
}

export default Login