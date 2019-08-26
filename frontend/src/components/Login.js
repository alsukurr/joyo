import React, { useState } from 'react';
import xss from 'xss';


const Login = ({ }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');


  const submitLogin = (e) => {
    e.preventDefault();
    
    if(!email) {
      alert('please enter your email');
      return
    }

    if(!password) {
      alert('please enter your password');
      return
    }

    if(!passwordConfirmation) {
      alert('please confirm your password');
      return
    }

    if(password !== passwordConfirmation) {
      alert('please make sure your passwrds match');
      return
    }
  }
  
  const sanitizeEmail = xss(email);
  const sanitizePassword = xss(password);

  // const saveDayBtn = () => {
  //   const sanitizeTitle = xss(title);
  //   const sanitizeDescription = xss(description);
  //   storeDay({ 
  //     title: sanitizeTitle, 
  //     description: sanitizeDescription, 
  //     datetime 
  //   });
  //   reloadDays();
  //   setScreen('days');
  // }

  // const backBtn = () => {
  //   setScreen('days');
  // }

  return (
    <div className="login"> 
      <form className="login__form"  onSubmit={submitLogin}>
        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="your email"/>
        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password"/>
        <input type="password" onChange={e => setPasswordConfirmation(e.target.value)} placeholder="confirm passowrd"/>

        <button type="submit" className="login__btn">Save</button>
      </form>
    </div>
  );
};

export default Login;