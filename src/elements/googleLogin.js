import React, { useState, useEffect } from "react";
import google from "../img/Google__G__Logo.svg.png";
import Button from "react-bootstrap/Button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function GoogleLogin() {
  //sign in with google
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();
  // const [checkUser, setcheckUser] = useState(false);

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      localStorage.setItem('email',JSON.stringify(result.user.email));
      console.log(result);
      checkUserExist(result);
      // if (checkUser === false) {
        // addUser(result.user);
      // }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const [checkUser, setcheckUser] = useState();

  function checkUserExist(result) {
    // useEffect((result) => {
      let userData = JSON.parse(localStorage.getItem('email'));
      const q = query(collection(db, 'users'), where('email', '==', userData))
          onSnapshot(q, (querySnapshot) => {
            if (querySnapshot.empty) {
              console.log("Document not Exist");
              addUser(result.user);
            }
            else {
              console.log("Document Exist");
            }
            // setcheckUser(querySnapshot.docs.map(doc => ({
            //   id: doc.id,
            //   data: doc.data()
            // })))
            // setIsUser(querySnapshot.docs.map(doc => ({
            //       id: doc.id,
            //       data: doc.data()
            //   })))
          })
    // },[])
  }

  // checkUser.map((item) =>
  //   console.log(item.data.email)
  // )
  // const [user1] = useAuthState(auth);

  function addUser(user) {
    try {
      addDoc(collection(db, "users"), {
        email: user.email,
        level: "member",
        uid: user.uid,
        name: user.displayName
      });
    } catch (err) {
      console.log(err);
    }
  }


  //style
  const mulLoginBtnGoogleStyle = {
    width: "200px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    border: "none",
    height: "35px",
    paddingBottom: "35px",
    fontSize: "16px",
    marginBottom: "10px",
    color: "black",
  };
  const mulLogoGoogleStyle = {
    height: "18px",
    width: "18px",
    marginRight: "15px",
    marginBottom: "3px",
  };
  return (
    <div>
      <Button onClick={GoogleLogin} style={mulLoginBtnGoogleStyle}>
        <img style={mulLogoGoogleStyle} src={google} alt="fbIcon"></img>
        Google登入
      </Button>
    </div>
  );
}

export default GoogleLogin;
