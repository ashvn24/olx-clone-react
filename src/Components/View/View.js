import React,{useEffect,useContext, useState}from 'react';

import './View.css';
import { PostContext } from '../../Store/PostContext';
import { firebaseContext } from '../../Store/Firebasecontext';
function View() {

  const [userDetails, setUserDetails] = useState('')
  
  const {post} = useContext(PostContext)
  const {firebase} = useContext(firebaseContext)

  useEffect(() => {
    const {UserId} = post
    firebase.firestore().collection('users').where('id','==',UserId).get().then((res)=>{
      res.forEach(doc =>{
        setUserDetails(doc.data())
      })
    })
  
  }, [])
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.ImageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {post.price} </p>
          <span>{post.name}</span>
          <p>{post.category}</p>
          <span>{post.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
