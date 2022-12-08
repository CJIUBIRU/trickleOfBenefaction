// import React from 'react';
// import "../App.css";
// import Card from 'react-bootstrap/Card';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// import ButtonLink from "./button";
// import TagType from './tagType';




// function CharityCard() {


//     const cardStyle = {
//         width: '20rem',
//         height: "450px",
//         marginBottom: "20px",
//         "&:hover": {
//             transform: `scale(1.5)`,
//         },

//     };

//     const btnStyle = {
//         position: "absolute",
//         // marginTop: "30px",

//         left: "50%",
//         transform: `translate(${-50}%, ${-50}%)`,
//         paddingTop: "5px",
//         paddingBottom: "5px",
//         paddingLeft: "15px",
//         paddingRight: "15px",
//         borderRadius: "10px",

//         letterSpacing: "1px",
//         fontSize: "2px",
//     }
//     const imgStyle = {
//         paddingLeft: "30%",
//         paddingRight: "30%",
//         paddingBottom: "10%",
//         paddingTop: "15%",

//     }
//     const nameStyle = {
//         fontWeight: "bold",
//         color: "#002B5B",
//         textAlign: "center",
//         paddingBottom: "10px",
//     }
//     const dataStyle = {

//         textAlign: "center",
//         left: "50%",
//     }
   
//     return (
//         <div>
//             <Card style={cardStyle}>

//                 <Card.Img style={imgStyle} variant="top" src="https://www.post.gov.tw/post/FileCenter/post_ww2//PW_TeamIntroduction/small_pic/s_1658221203795.png" />

//                 <Card.Body>
//                     <TagType name="#弱勢關懷" />
//                     <div style={{ height: "65%" }}>
//                         <Card.Title style={nameStyle}>財團法人董氏基金會</Card.Title>
//                         <Card.Text style={dataStyle}>
//                             <p><FontAwesomeIcon icon={faEnvelope} />：mhjtf@jtf.org.tw</p>
//                             <p><FontAwesomeIcon icon={faPhone} />：07777755</p>
//                         </Card.Text>
//                     </div>
//                     <div style={{ marginBottom: "0px", paddingBottom: "0px" }}>

//                         <div style={btnStyle}>
//                             <ButtonLink to="/charitydetail" name="了解更多" />
//                         </div>

//                     </div>
//                 </Card.Body>
//             </Card>

//         </div>
//     )
// }

// export default CharityCard;