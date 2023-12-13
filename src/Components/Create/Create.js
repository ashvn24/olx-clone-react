import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { firebaseContext,AuthContext } from "../../Store/Firebasecontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const {firebase} = useContext(firebaseContext) 
  const {user} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const date = new Date()

  const history = useHistory()

  const handleSubmit=()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
          firebase.firestore().collection('Products').add({
            name:name,
            category:category,
            price:price,
            ImageUrl:url,
            UserId:user.uid,
            createdAt:date.toDateString()
          })
          history.push('/')
        })
      })
  }

  return (
    
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              type="text"
              id="fname"
              name="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              value={category}
              type="text"
              id="fname"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):' '}></img>
          
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
