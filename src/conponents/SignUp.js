import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonLink from "../elements/button";
import ReturnHome from "../elements/returnHome";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../elements/input";
import app from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUp = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/loginIn");
        setIsLoading(false);
        alert("註冊成功，正在前往登入頁面...");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode);
        // alert(errorMessage);
        switch (errorCode) {
          case "auth/email-already-in-use":
            setErrorMessage("信箱已存在");
            break;
          case "auth/invalid-email":
            setErrorMessage("信箱格式不正確");
            break;
          case "auth/weak-password":
            setErrorMessage("密碼強度不足");
            break;
          default:
        }
        setIsLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await setDoc(doc(db, "goodsDemand", user.uid), {
      await addDoc(collection(db, "users"), {
        email: email,
        password: password,
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  const loginCardStyle = {
    backgroundColor: "#D7E9F7",
    width: "450px",
    height: "350px",
    position: "absolute",
    top: "45%",
    left: "75%",
    margin: "-150px 0px 0px -225px",
    // boxShadow: "0px 0px 4px 4px #f0f0f0",
    boxShadow: "10px 10px 15px lightgray",
    // boxShadow: "10px 10px 25px #9d9d9d",
    // boxShadow: "6px 6px 8px 8px #E0E0E0",
    borderRadius: "30px",
  };
  const loginContentStyle = {
    width: "380px",
    height: "300px",
    position: "absolute",
    top: "55%",
    left: "50%",
    margin: "-150px 0px 0px -190px",
  };
  const titleStyle = {
    color: "#002B5B",
    fontSize: "30px",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "bold",
  };
  const inputStyle = {
    marginBottom: "20px",
    border: "1.5px solid #90AACB",
  };
  const btnContentStyle = {
    width: "240px",
    height: "35px",
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "0px 0px 0px -125px",
    marginTop: "55px",
    display: "flex",
    flexDirection: "row",
  };
  const loginLogoStyle = {
    width: "550px",
    height: "500px",
    backgroundColor: "#FEF1E6",
    position: "absolute",
    top: "50%",
    margin: "-250px 0px 0px 50px",
  };
  const loginPageStyle = {
    width: "50%",
  };
  const loginBodyStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const logoItemStyle = {
    textAlign: "center",
    lineHeight: "450px",
  };
  const stepBtnStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
  };
  const errorMessageStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginTop: "85px",
    border: "1px red solid",
    backgroundColor: "#FFECEC",
  };
  return (
    <div style={loginBodyStyle}>
      <div style={loginLogoStyle}>
        <h5 style={logoItemStyle}>logo</h5>
      </div>
      <div style={loginPageStyle}>
        <div style={loginCardStyle}>
          <div style={loginContentStyle}>
            <p style={titleStyle}>註冊</p>
            <form onSubmit={handleSubmit}>
              <Form.Control
                style={inputStyle}
                type="email"
                placeholder="使用者帳號"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                style={inputStyle}
                type="password"
                placeholder="使用者密碼"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div style={btnContentStyle}>
                <ButtonLink to="/loginIn" name="返回登入" />
                &nbsp;&nbsp;
                <button style={stepBtnStyle} type="submit" onClick={signUp}>
                  註冊
                </button>
              </div>
            </form>
            {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}
          </div>
        </div>
      </div>
      <ReturnHome />
    </div>
  );
}

export default Login;
