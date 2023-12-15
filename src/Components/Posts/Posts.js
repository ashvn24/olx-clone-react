import React, { useEffect, useContext, useState } from "react";

import Heart from "../../assets/Heart";
import "./Post.css";
import { firebaseContext } from "../../Store/Firebasecontext";
import { PostContext } from "../../Store/PostContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Posts() {
  const history = useHistory();

  const { setPost } = useContext(PostContext);

  const { firebase } = useContext(firebaseContext);
  // const { user } = useContext(AuthContext);

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Products")
      .get()
      .then((snapshot) => {
        const allpost = snapshot.docs.map((products) => ({
          ...products.data(),
          id: products.id,
        }));
        setProducts(allpost);
      });
  }, [firebase]);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {Products.map((prod) => (
            <div
              className="card"
              onClick={() => {
                setPost(prod);
                history.push("/view");
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={prod.ImageUrl} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {prod.price}</p>
                <span className="kilometer">{prod.category}</span>
                <p className="name"> {prod.name}</p>
              </div>
              <div className="date">
                <span>{prod.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {Products.map((prod) => (
            <div
              className="card"
              onClick={() => {
                setPost(prod);
                history.push("/view");
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={prod.ImageUrl} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {prod.price}</p>
                <span className="kilometer">{prod.category}</span>
                <p className="name"> {prod.name}</p>
              </div>
              <div className="date">
                <span>{prod.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
