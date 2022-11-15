import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";

import ButtonLink from "../elements/button";



function setPassword() {

    const cardStyle = {
        width: "50%",
        color: "black",
        left: "50%",
        marginTop: "210px",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5%",
        paddingBottom: "6%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };
    const labelStyle = {
        width: "25%",
        textAlign: "center",
        paddingTop: "1%"
    };
    const inputStyle = {
        width: "75%",
        borderRadius: "5px"
    };
    const groupStyle = {
        marginTop: "30px",
    };
    const btnStyle = {
        position: "absolute",
        marginTop: "30px",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",
        letterSpacing: "1px",
    }
    return (
        <div>
            <Navbar />
            <TitleSec name="基本資料設定" />
            <TitleStep name="STEP1&nbsp;-&nbsp;設定密碼" />
            <Card style={cardStyle}>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <Form.Label htmlFor="basic-url" style={labelStyle}>帳號：</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            placeholder="LinYuhui@gmail.com"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            readOnly
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" style={groupStyle}>
                        <Form.Label htmlFor="basic-url" style={labelStyle}>設定密碼：</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            placeholder="輸入"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" style={groupStyle}>
                        <Form.Label htmlFor="basic-url" style={labelStyle}>確認密碼：</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            placeholder="輸入"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div style={btnStyle}>
                        <ButtonLink to="/passwordSuccess" name="確定" />
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default setPassword;