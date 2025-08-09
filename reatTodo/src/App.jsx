import { useEffect, useState } from 'react'
import {auth, provider } from './config'

import {signInWithPopup} from "firebase/auth"
import Home from './Home'
import "./App.css"
function App() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  };

  useEffect(() =>{
    setValue(localStorage.getItem("email"));
  })

  return (
    <>
      {value?<Home/>:
      <div className='register'>
        <h1>Welcome To <span>Fresh Market</span></h1>
        <h6>We bring your kitchen closer.</h6>
      <button onClick={handleClick}>Sign in with Google</button>
      </div>
    }
    </>
  )
  }

export default App
