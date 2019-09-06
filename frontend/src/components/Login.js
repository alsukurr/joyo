import React, { useState } from 'react';
import xss from 'xss';
import { navigate } from '@reach/router'



const Login = ({ }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const submitLogin = event => {
    event.preventDefault()

    if (!email) {
      alert('Please enter your email')
      return
    }
    if (!password) {
      alert('Please enter your password')
      return
    }
    if (!passwordConfirmation) {
      alert('Please enter your password two times')
      return
    }
    if (password.length < 8) {
      alert('Please enter at least 8 chars in your password')
      return
    }
    if (password !== passwordConfirmation) {
      alert('Please enter the same value in both the password fields')
      return
    }

    const url = 'http://localhost:3001/register'
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: `email=${email}&password=${password}&passwordConfirmation=${passwordConfirmation}`
    }

    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        if (response.status === 401) {
          alert('Error, please retry')
        }
      }
      return response
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.cookie = 'token=' + data.token
        navigate('/new-entry')
      }
    })
  }


  return (
    <div className="login"> 
      <form className="login__form"  onSubmit={submitLogin}>
        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="your email"/>
        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password"/>
        <input type="password" onChange={e => setPasswordConfirmation(e.target.value)} placeholder="confirm passowrd"/>

        <button type="submit" className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;