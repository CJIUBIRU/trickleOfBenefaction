import React, { useState } from 'react';
// import "../App.css";
//引入資料庫
import { db } from "../utils/firebase";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Card from 'react-bootstrap/Card';
import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";
import TitleStep from "../elements/titleStep";

import ButtonLink from "../elements/button";


function CharityInfo() {

    const cardStyle = {
        width: "80%",
        color: "black",
        left: "50%",
        marginTop: "130px",
        transform: `translate(${-50}%, ${-10}%)`,
        paddingTop: "25px",
        paddingBottom: "5%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };
    const h4Style = {
        fontWeight: "550",
        marginTop: "30px"
    }

    const infoStyle = {
        marginBottom: "8%",
        margingLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        /* color: #6C6C6C; */

    }

    const changeBtn = {
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
        marginBottom: "8%",
    }

    const inputStyle = {
        marginLeft: "10%",
        marginRight: "10%",
    }
    // const inputStyle_2={
    //     marginLeft: "5%",
    //     marginRight: "5%",
    //     paddingBottom: "6%"
    // }

    const textareaStyle = {
        marginLeft: "5%",
        marginRight: "5%",
    }
    const nameStyle = {
        lineHeight: "40px",
        marginRight: "10px",
    }
    const labelStyle = {
        height: "40px",
        borderRadius: "5px",
    }

    const [charityName, setCharityName] = useState("");
    const [charityFundraisingNo, setCharityFundraisingNo] = useState("");
    const [charityMail, setCharityMail] = useState("");
    const [charityTel, setCharityTel] = useState("");
    const [charityAddress, setCharityAddress] = useState("");

    const [charityConcept, setCharityConcept] = useState("");
    const [charityIntro, setCharityIntro] = useState("");

    const [charityCategory, setCharityCategory] = useState("");

    // const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoader(true);

        //寫入資料庫
        db.collection('charity').add({
            charityName: charityName,
            charityFundraisingNo: charityFundraisingNo,
            charityMail: charityMail,
            charityTel: charityTel,
            CharityAddress: charityAddress,
            charityConcept: charityConcept,
            charityIntro: charityIntro,
            charityCategory: charityCategory,
        })
            .then(() => {
                alert('Message has been submitted.');
                // setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                // setLoader(false);
            });

        //一開始值要清空
        setCharityName('');
        setCharityFundraisingNo('');
        setCharityMail('');
        setCharityTel('');
        setCharityAddress('');
        setCharityConcept('');
        setCharityIntro('');
        setCharityCategory('');
    }

    return (
        <div>
            <Navbar />
            {/* <form className='form' onSubmit={handleSubmit}> */}

            <form className='form'>
                <TitleSec name="基本資料設定" />
                <TitleStep name="STEP2&nbsp;-&nbsp;填寫機構簡介" />


                <Card style={cardStyle}>
                    <Card.Body>
                        <div>
                            <div style={infoStyle}>
                                <h4 style={h4Style}>一、機構LOGO圖檔</h4><br></br>
                                <div style={inputStyle}>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </div>
                                <h4 style={h4Style}>二、機構基本資料</h4><br></br>
                                <div style={inputStyle}>
                                    {/* <h5>1. 機構LOGO圖檔</h5><br></br>
                        <h5>2. 機構基本資料</h5><br></br> */}
                                    <div>
                                        <InputGroup className="mb-3">
                                            <Form.Label htmlFor="basic-url" style={nameStyle}>1. 機構名稱：&nbsp;</Form.Label>
                                            <Form.Control
                                            
                                                style={labelStyle}
                                                placeholder='請輸入文字'
                                                value={charityName}
                                                onChange={(e) => setCharityName(e.target.value)} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Form.Label htmlFor="basic-url" style={nameStyle}>2. 勸募許可文號：</Form.Label>
                                            <Form.Control
                                                style={labelStyle}
                                                placeholder='請輸入文字'
                                                value={charityFundraisingNo}
                                                onChange={(e) => setCharityFundraisingNo(e.target.value)} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Form.Label htmlFor="basic-url" style={nameStyle}>3. 電子信箱：</Form.Label>

                                            <Form.Control
                                                style={labelStyle}
                                                placeholder='請輸入文字'
                                                value={charityMail}
                                                onChange={(e) => setCharityMail(e.target.value)} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Form.Label htmlFor="basic-url" style={nameStyle}>4. 機構電話：</Form.Label>

                                            <Form.Control
                                                style={labelStyle}
                                                placeholder='請輸入文字'
                                                value={charityTel}
                                                onChange={(e) => setCharityTel(e.target.value)} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Form.Label htmlFor="basic-url" style={nameStyle}>5. 機構地址：</Form.Label>

                                            <Form.Control
                                                style={labelStyle}
                                                placeholder='請輸入文字'
                                                value={charityAddress}
                                                onChange={(e) => setCharityAddress(e.target.value)} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Form.Label htmlFor="basic-url" style={nameStyle}>6. 機構類別：</Form.Label>
                                            <Form.Select placeholder='請選擇'
                                                value={charityCategory}
                                                style={labelStyle}
                                                onChange={(e) => setCharityCategory(e.target.value)}>
                                                <option value="偏鄉教育">偏鄉教育</option>
                                                <option value="老人關懷">老人關懷</option>
                                                <option value="動物關懷">動物關懷</option>
                                            </Form.Select>
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url" style={{ marginTop: "12px", lineHeight: "40px", }}>7. 機構宗旨：</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                style={textareaStyle}
                                                as="textarea" placeholder='請輸入文字'
                                                value={charityConcept}
                                                onChange={(e) => setCharityConcept(e.target.value)} />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url" style={{ marginTop: "12px", lineHeight: "40px", }}>8. 機構簡介（含募捐目的）：</Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                style={textareaStyle}
                                                as="textarea" placeholder='請輸入文字'
                                                value={charityIntro}
                                                onChange={(e) => setCharityIntro(e.target.value)} />
                                        </InputGroup><br></br>
                                    </div>

                                </div>

                                {/* <Button type='submit' style={changeBtn}>Submit</Button> */}

                                <div style={changeBtn}>
                                    <ButtonLink to="/charityPreview" name="預覽" />
                                </div>


                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </form>
        </div>
    )
}

export default CharityInfo