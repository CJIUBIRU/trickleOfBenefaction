// import React from 'react';
// import "../App.css";
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import ButtonLink from "../elements/button";



// function CharityCardDetail(props) {


//     const cardStyle = {
//         width: "80%",
//         color: "black",
//         left: "50%",
//         marginTop: "100px",
//         transform: `translate(${-50}%, ${-5}%)`,
//         paddingTop: "5%",
//         paddingBottom: "6%",
//         paddingLeft: "8%",
//         paddingRight: "8%",
//         letterSpacing: "1px",
//     };
//     const h1Style = {
//         color: "#002B5B",
//         letterSpacing: "1px",
//         textAlign: "center",
//         fontWeight: "bold",
//     }

//     const btnStyle = {
//         position: "absolute",
//         marginTop: "30px",
//         left: "50%",
//         transform: `translate(${-50}%, ${-50}%)`,
//         paddingTop: "5px",
//         paddingBottom: "5px",
//         paddingLeft: "15px",
//         paddingRight: "15px",
//         borderRadius: "10px",

//         letterSpacing: "1px",
//     }
//     const imgStyle = {
//         padding: "20%",
//     }
//     const tagStyle = {
//         textAlign: "center",
//         backgroundColor: "#FFDCB9",
//         width: "90px",
//         letterSpacing: "1px",
//         padding: "5px",
//         fontSize: "13px",
//         fontWeight: "600",
//         borderRadius: "5px",
//     }
//     const dataStyle = {
//         position: "absolute",
//         fontWeight: "bold",
//         top: "50%",
//         transform: `translate(${0}%, ${-50}%)`,

//     }
//     const ContentStyle = {
//         lineHeight: "30px",
//         fontSize: "13px",
//     }
//     const borderStyle = {
//         border: "none"
//         ,
//     }
//     return (
//         <div>
           
//                 <Card style={cardStyle}>
//                     <Card.Body>
//                         <h1 style={h1Style}>{props.h1Title}</h1>

//                         <Row>
//                             <Col>
//                                 <Card style={borderStyle}>
//                                     <Card.Body style={{ height: "300px" }}><Card.Img style={imgStyle} variant="top" src="https://www.post.gov.tw/post/FileCenter/post_ww2//PW_TeamIntroduction/small_pic/s_1658221203795.png" /></Card.Body>
//                                 </Card>
//                             </Col>
//                             <Col>
//                                 <Card style={borderStyle}>
//                                     <Card.Body style={{ height: "300px" }}>
//                                         <div style={dataStyle}>
//                                             <p>機構類別：<span style={tagStyle}>{props.tag}</span></p>
//                                             <p>電子信箱：{props.mail}</p>
//                                             <p>機構電話：{props.phone}</p>
//                                             <p>勸募許可文號：{props.number}</p>
//                                         </div>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         </Row>
//                         <Row>

//                             <Col>
//                                 <Card style={borderStyle}>
//                                     <Card.Body style={{ padding: "30px" }}>
//                                         <p style={{ fontWeight: "bold" }}>機構宗旨：</p>
//                                         <div style={ContentStyle}>
//                                             <p>&nbsp;&nbsp;&nbsp;&nbsp;{props.charityContent}</p>
//                                         </div>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col>
//                                 <Card style={borderStyle}>
//                                     <Card.Body style={{ padding: "30px" }}>
//                                         <p style={{ fontWeight: "bold" }}>機構簡介（含募資目的）：</p>
//                                         <div style={ContentStyle}>
//                                             <p>&nbsp;&nbsp;&nbsp;&nbsp;
//                                                {props.charityGoal}
//                                             </p>
//                                         </div>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>

//                         </Row>

//                         <div style={{ marginBottom: "40px" }}>
//                             <div style={btnStyle}>
//                                 <ButtonLink to="/charity" name="返回" />
//                             </div>

//                         </div>
//                     </Card.Body>
//                 </Card>
            
//         </div>
//     )
// }

// export default CharityCardDetail;