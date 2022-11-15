import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYBRBZXCiPS9exGAC4RsmwfEuurjICcmM",
    authDomain: "login-80bd3.firebaseapp.com",
    projectId: "login-80bd3",
    storageBucket: "login-80bd3.appspot.com",
    messagingSenderId: "344085065269",
    appId: "1:344085065269:web:1040fdf2e8677d046a8b7c",
    measurementId: "G-9KB65QGE3M"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;