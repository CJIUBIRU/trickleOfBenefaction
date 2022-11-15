import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Navbar from "../elements/navbar";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import TitleSec from "../elements/titleSec";

import ButtonLink from "../elements/button";

                    


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

function ApplicationUpload() {
   
   
    const cardStyle = {
        width: "75%",
        color: "black",
        left: "50%",
        marginTop: "100px",
        transform: `translate(${-50}%, ${-5}%)`,
        paddingTop: "5%",
        paddingBottom: "6%",
        paddingLeft: "8%",
        paddingRight: "8%",
        letterSpacing: "1px",

    };


    const btnStyle = {
        position: "absolute",
        marginTop: "40px",
        left: "50%",
        transform: `translate(${-50}%, ${-50}%)`,
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "15px",
        paddingRight: "15px",
        borderRadius: "10px",
        letterSpacing: "1px",
    }
    const h4Style = {
        fontWeight: "bold",
        lineHeight: "80px",
    }
    const pStyle = {
        lineHeight: "40px",
    }


    const nameStyle = {
        lineHeight: "40px",
        marginRight: "10px",
    }
    const labelStyle = {
        height: "40px",
        borderRadius: "5px",
    }
    const inputStyle = {
        marginLeft: "5%",
        marginRight: "5%",
    }
    return (
        <div>
            <Navbar/>
            <TitleSec name="公益團體申請資料-填寫及上傳" />
            
            <Card style={cardStyle}>
                <Card.Body>
                    <h4 style={h4Style}>一、公益團體基本資料</h4>
                    <ol style={{ paddingLeft: "50px", fontWeight: "520", marginTop: "8px" }} type='a'>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>募捐需求物資團體全銜：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>登記地址：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>聯絡地址：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>負責人姓名：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>負責人聯絡電話：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>機構電子信箱：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>現行主管機關：&nbsp;</Form.Label></li>
                            <Form.Control
                                style={labelStyle}
                                placeholder='請輸入文字' />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>募捐需求物資目的：&nbsp;</Form.Label></li>
                            <Form.Control
                        as="textarea"
                        placeholder="請輸入文字"
                        style={{ height: '100px' }}
                    />
                        </InputGroup>
                       
                   
                        
                    </ol>
                    <h4 style={h4Style}>二、切結書一份</h4>
                  
                    <p style={pStyle}>　　檔案格式：Word（.docx）檔填寫資料，並轉檔成PDF（.pdf）檔上傳，<span style={{ color: "red", fontWeight: "bold" }}>請注意簽章應以正楷填寫</span>。</p>
                    <div style={inputStyle}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                    <h4 style={h4Style}>三、法人登記書一份</h4>
                    <p style={pStyle}>　　檔案格式：以照片上傳，需保證照片清晰、色調正常，JPG（.jpg／.jpeg）檔、PNG（.png）檔均可。</p>
                    <div style={inputStyle}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                    <h4 style={h4Style}>四、衛生福利部或直轄市、縣（市）政府勸募許可函一份</h4>
                    <p style={pStyle}>　　檔案格式：以照片上傳，需保證照片清晰、色調正常，JPG（.jpg／.jpeg）檔、PNG（.png）檔均可。</p>
                    <div style={inputStyle}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                  
                    <div style={btnStyle}>
                        <ButtonLink to="/uploadSuccess" name="確定上傳" />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ApplicationUpload;