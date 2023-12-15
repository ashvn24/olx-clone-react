import React, { useState,useContext} from 'react';
import { firebaseContext } from "../../Store/Firebasecontext";
import { useHistory } from "react-router-dom";

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Login() {

  const history= useHistory()
  const {firebase} = useContext(firebaseContext);

  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(Email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={Email}
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            type="password"
            id="lname"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup' style={{TextDecoder:'null',color:'black'}}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
