import React from 'react';
import "../App.css";
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Navbar from "../elements/navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

import TitleSec from "../elements/titleSec";
import ButtonLink from "../elements/button";
                   


function ManagerProveData() {
   
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
        lineHeight: "100px",
    }
    // const pStyle = {
    //     lineHeight: "40px",
    // }


    const nameStyle = {
        lineHeight: "40px",
        marginRight: "10px",
        fontWeight: "bold",
    }
    const ansStyle = {
        height: "40px",

        lineHeight: "40px",
    }
    // const tableStyle = {
    //     paddingBottom: "40px",
    //     position: "absolute",
    //     marginTop: "30px",
    //     left: "50%",
    //     transform: `translate(${-50}%, ${-50}%)`,

    // }


    return (
        <div>
            <Navbar />
            <TitleSec name="公益單位申請-資料內容" />
            {/* <TitleStep name="申請資料填寫及上傳" /> */}

            <Card style={cardStyle}>
                <Card.Body>
                    <h4 style={h4Style}>一、公益團體基本資料</h4>
                    <ol style={{ paddingLeft: "50px", fontWeight: "520", marginTop: "8px" }} type='a'>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>募捐需求物資團體全銜：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>社團法人中華愛悅公益慈善發展協會</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>審核狀態：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>待審核</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>登記地址：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>台東縣卑南鄉富山村10鄰富山80號</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>聯絡地址：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>卑南鄉莿桐部落活動中心（台東縣卑南鄉富山村10鄰富山80號）</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>負責人姓名：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>＊＊＊</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>負責人聯絡電話：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>0800-700-365</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>機構電子信箱：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>fengchihsiang@gmail.com</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>現行主管機關：&nbsp;</Form.Label></li>
                            <p style={ansStyle}>台東縣政府</p>
                        </InputGroup>
                        <InputGroup className="mb-6">
                            <li><Form.Label htmlFor="basic-url" style={nameStyle}>募捐需求物資目的：&nbsp;</Form.Label></li>
                            <p style={{ lineHeight: "40px" }}>在台東偏鄉部落中大部份的住家都至少有50%是鐵皮，在部落中的聚會所也不例外，部落的聚會所是部落族人聚會的場所，也包括了部落中的會議、慶典活動、婚喪喜慶都會在此，但並非每天都有慶典活動、會議，因此，本會向當地的卑南鄉公所提出申請借用聚會所這個場地，成立了鐵皮屋下的課輔班-莿桐書屋，希望能帶給當地弱勢家庭的孩子們有更多的學習資源與機會。</p>
                        </InputGroup>
                    </ol>

                    <h4 style={h4Style}>二、審核資料</h4>
                    <ol style={{ lineHeight: "45px", paddingLeft: "50px" }}>
                        <li><span style={{ color: "#90AACB", cursor: "pointer" }}>法人登記書PDF&nbsp;<FontAwesomeIcon icon={faCloudDownload} /></span></li>
                        <li><span style={{ color: "#90AACB", cursor: "pointer" }}>切結書WORD&nbsp;<FontAwesomeIcon icon={faCloudDownload} /></span></li>
                        <li><span style={{ color: "#90AACB", cursor: "pointer" }}>政府勸募許可函PDF&nbsp;<FontAwesomeIcon icon={faCloudDownload} /></span></li>
                    </ol>
                    {/*                   
                    <div style={{ marginBottom: "40px" }}>
                            <table style={tableStyle}>
                                <tr>
                                    <td style={{ paddingRight: "10px" }}><Button as={Link}   to="/charityInfo"  style={btnStyle}>返回</Button></td>
                                    <td style={{ paddingLeft: "10px" }}><Button as={Link}   to="/charityInfoSuccess"  style={btnStyle}>送出</Button></td>
                                </tr>

                            </table>
                        </div>
                    */}
                    <div style={btnStyle}>
                        <ButtonLink to="/managerProve" name="返回" />
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ManagerProveData;