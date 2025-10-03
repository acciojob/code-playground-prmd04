import React, { useState } from 'react'

const Login = ({setIsAuthenticate}) => {
  const [buttonText, setButtonText] = useState('Log In')
  function handleClick(){
    setIsAuthenticate((prev=> !prev));
    setButtonText((prev)=>prev==="Log In"?"Log Out":"Log In");
  }
  return (
    <div>
    <h1>Log in</h1>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default Login