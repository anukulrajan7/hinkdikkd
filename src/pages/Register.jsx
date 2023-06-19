import React from 'react'

function Register() {
  return (
      <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Anukul chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" name="" id="" placeholder='email' />
                <input type="password"  name="" id="" placeholder='passwordd' />
                <input type="file" name="" id="" />
                <button>sign up</button>
            </form>
            <p>you do have an accoutn?Login</p>
        </div>
      </div>
    )
}

export default Register