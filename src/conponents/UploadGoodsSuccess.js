import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';

import Navbar from "../elements/navbar";
import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";

import SuccessInfo from '../elements/successInfo';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function UploadSuccess() {

    const navigate = useNavigate("");
    const [user] = useAuthState(auth);
    if (!user){
      navigate("/loginin");
    }
    const cardStyle = {
        width: "50%",
        color: "black",
        left: "50%",
        marginTop: "230px",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "3%",
        paddingBottom: "6%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };

    const btnStyle = {
        position: "absolute",
        marginTop: "45px",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",
        letterSpacing: "1px",
        display: "flex",
        flexDirection: "row"
    }
    return (
        <div>
            <Navbar />
            <TitleSec name="上架物資" />

            <Card style={cardStyle}>
                <Card.Body>
               
                    <SuccessInfo name="物資已上架成功！" name2="（可至 物資一覽表 查看已上架物資。）" />
                    <div style={btnStyle}>
                        <ButtonLink to="/uploadGoods" name="繼續上架" />&nbsp;
                        <ButtonLink to="/allGoods" name="物資一覽表" />
                    </div>


                </Card.Body>
            </Card>
        </div>
    )
}

export default UploadSuccess;