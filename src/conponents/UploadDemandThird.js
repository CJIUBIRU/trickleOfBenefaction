import { Container } from "react-bootstrap";
import React, { Component } from "react";
import "../App.css";
import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";
import ButtonLink from "../elements/button";
import DemandStep3 from "../elements/demandStep3";
import Navbar from "../elements/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { v4 as uuidv4 } from "uuid";

function UploadDemand() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user){
    navigate("/loginin");
  }
  // const nextStepStyle = {
  //   marginLeft: "10px",
  // };
  const nextStepStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    border: "none",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    marginLeft: "10px",
    height: "35px",
    fontWeight: "bold",
  };
  // const returnStepStyle = {
  //   marginLeft: "39%",
  // };
  const returnStepStyle = {
    color: "#ffffff",
    backgroundColor: "#002B5B",
    borderRadius: "30px",
    border: "none",
    fontSize: "16px",
    width: "120px",
    textAlign: "center",
    height: "35px",
    fontWeight: "bold",
    // marginLeft: "39%",
    // marginTop: "40px"
  };
  const stepBtnStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "40px",
    marginTop: "25px",
  };

  let demandList = JSON.parse(localStorage.getItem('demandList'));

  const handleSubmit = async () => {
    try {
      for (let i = 0; i < demandList.length; i++) {
        await addDoc(collection(db, "demand"), {
          name: demandList[i].name,
          availibility: "",
          charity: demandList[i].charityName,
          description: demandList[i].demandInfo,
          photo: "",
          quantity: demandList[i].count,
          received: "",
          state: "徵求中",
          store: demandList[i].store,
          uid: user.uid,
          id: uuidv4(),
        });
      }
      navigate("/myDemand");
      alert("刊登成功。");
      localStorage.removeItem('demandList');
      localStorage.removeItem('cart')
    } catch (err) {
      console.log(err);
      window.location.reload();
      alert("刊登不成功，請再試一次，謝謝。");
    }
  };


  return (
    <div>
      <Navbar />
      <TitleSec name="刊登物資需求" />
      <Container>
        <TitleStep name="STEP3&nbsp;-&nbsp;確認並送出" />
        {
          (demandList)
          ? (demandList.map((item, index) => (
            <>
              <DemandStep3
                key={index}
                id={item.id}
                name={item.name}
                store={item.store}
                demandInfo={item.demandInfo}
                count={item.count}
                user={item.charityName}
              />
            </>
          )))
          : <p>請返回上一頁填寫需求物資之資料</p>
        }
        {
          (demandList)
          ? (<p
              style={{
                fontSize: "17px",
                textAlign: "center",
                marginTop: "10px",
                color: "red",
                fontWeight: "bold",
              }}
            >
              ※需求資訊刊登後，仍可進行更改。
            </p>)
          : ''
        }
        <div style={stepBtnStyle}>
          <Link to="/demandstep2">
            <button style={returnStepStyle}
              onClick={() => {
                localStorage.removeItem('demandList')
              }}
            >
              返回
            </button>
          </Link>
          {
            (demandList !== null)
            ? (<button style={nextStepStyle} onClick={handleSubmit}>刊登</button>)
            : ''
          }
        </div>
      </Container>
    </div>
  );
}

export default UploadDemand;
