import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';

import ButtonLink from "../elements/button";


import Form from 'react-bootstrap/Form';
import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";


function ManagerProveMail() {


    const cardStyle = {
        width: "50%",
        color: "black",
        left: "50%",
        marginTop: "70px",
        transform: `translate(${-50}%, ${-10}%)`,
        paddingTop: "3%",
        paddingBottom: "5%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };




    const btnStyle = {
        // position: "absolute",
        // marginTop: "30px",
        // left: "50%",
        // transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",

        letterSpacing: "1px",
    }
    const pStyle = {
        lineHeight: "40px",
        textAlign: "left",
    }
    const tableStyle = {
        paddingBottom: "40px",
        position: "absolute",
        marginTop: "30px",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,

    }
    return (

        <div style={{ textAlign: "center" }}>
            <Navbar />
            <TitleSec name="公益單位申請-審核信件發送通知" />

            <Card style={cardStyle}>
                <Card.Body>
                    <p style={pStyle}>將對「<span style={{ fontWeight: "bold" }}>財團法人董氏基金會</span>」之審核結果發送至對方信箱裡。請先勾選下列審核狀態：</p>
                    <input
                        type="radio"
                        value="male"
                    />
                    <label style={{ fontWeight: "bold", color: "#007500" }}>&nbsp;審核通過</label>
                    <input
                        type="radio"
                        value="male"
                        style={{ marginLeft: "6%" }}
                    />
                    <label style={{ fontWeight: "bold", color: "#CE0000" }}>&nbsp;審核不通過</label>
                    <br></br>  <br></br>
                    <Form.Control
                        as="textarea"
                        placeholder="若審核不通過，請填寫審核失敗原因..."
                        style={{ height: '100px' }}
                    />
                    <br></br>
                    <div style={{ marginBottom: "40px" }}>
                        <table style={tableStyle}>
                            <tr>
                                <td style={{ paddingRight: "10px" }}>

                                    <div style={btnStyle}>
                                        <ButtonLink to="/managerProve" name="返回" />
                                    </div>

                                </td>
                                <td style={{ paddingLeft: "10px" }}>
                                    <div style={btnStyle}>
                                        <ButtonLink name="發送信件" />
                                    </div>

                                </td>
                            </tr>

                        </table>
                    </div>
                    {/* <Button as={Link} to="/setPassword" style={btnStyle}>發送審核結果信件</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ManagerProveMail;