import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { firebaseContext } from "../../Store/Firebasecontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Signup() {
  const history = useHistory()
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { firebase } = useContext(firebaseContext);

  const handleData = (e) => {
    e.preventDefault();
    console.log(firebase);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: Username }).then(() => {
          firebase.firestore().collection("users").add({
            id: result.user.uid,
            username: Username,
            phone: phone,
          }).then(()=>{
            history.push('/login')
          })
        });
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt="img" src={Logo}></img>
        <form onSubmit={handleData}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={Username}
            type="text"
            id="fname"
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            value={phone}
            className="input"
            type="number"
            id="lname"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{history.push('/login')}}>Login</a>
      </div>
    </div>
  );
}
