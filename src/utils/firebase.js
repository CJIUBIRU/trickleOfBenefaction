// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//     apiKey: "AIzaSyBYBRBZXCiPS9exGAC4RsmwfEuurjICcmM",
//     authDomain: "login-80bd3.firebaseapp.com",
//     projectId: "login-80bd3",
//     storageBucket: "login-80bd3.appspot.com",
//     messagingSenderId: "344085065269",
//     appId: "1:344085065269:web:1040fdf2e8677d046a8b7c",
//     measurementId: "G-9KB65QGE3M"
//   };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export default app;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAPbleT4vXpJ7DdsCFp_RijjhzGd4lRJHs",
  authDomain: "donation-platform-54f2b.firebaseapp.com",
  databaseURL: "https://donation-platform-54f2b-default-rtdb.firebaseio.com",
  projectId: "donation-platform-54f2b",
  storageBucket: "donation-platform-54f2b.appspot.com",
  messagingSenderId: "229918689081",
  appId: "1:229918689081:web:ae5f56b680c524fd128ae8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
