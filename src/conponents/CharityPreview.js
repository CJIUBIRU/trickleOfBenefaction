import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonLink from "../elements/button";

import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

function CharityPreview() {
  const navigate = useNavigate("");
  const [user] = useAuthState(auth);
  if (!user) {
    navigate("/loginin");
  }
  const cardStyle = {
    width: "80%",
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
  const h1Style = {
    color: "#002B5B",
    letterSpacing: "1px",
    textAlign: "center",
    fontWeight: "bold",
  };

  const btnStyle = {
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    letterSpacing: "1px",
  };
  const imgStyle = {
    padding: "20%",
  };
  const tagStyle = {
    textAlign: "center",
    backgroundColor: "#FFDCB9",
    width: "90px",
    letterSpacing: "1px",
    padding: "5px",
    fontSize: "13px",
    fontWeight: "600",
    borderRadius: "5px",
  };
  const dataStyle = {
    position: "absolute",
    fontWeight: "bold",
    top: "50%",
    transform: `translate(${0}%, ${-50}%)`,
  };
  const ContentStyle = {
    lineHeight: "30px",
    fontSize: "13px",
  };
  const borderStyle = {
    border: "none",
  };
  const tableStyle = {
    paddingBottom: "40px",
    position: "absolute",
    marginTop: "30px",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
  };
  return (
    <div>
      <Navbar />
      <TitleSec name="基本資料設定" />
      <Container>
        <Card style={cardStyle}>
          <Card.Body>
            <h1 style={h1Style}>財團法人董氏基金會</h1>

            <Row>
              <Col>
                <Card style={borderStyle}>
                  <Card.Body style={{ height: "300px" }}>
                    <Card.Img
                      style={imgStyle}
                      variant="top"
                      src="https://www.post.gov.tw/post/FileCenter/post_ww2//PW_TeamIntroduction/small_pic/s_1658221203795.png"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={borderStyle}>
                  <Card.Body style={{ height: "300px" }}>
                    <div style={dataStyle}>
                      <p>
                        機構類別：<span style={tagStyle}>#兒童醫療</span>
                      </p>
                      <p>電子信箱：mhjtf@jtf.org.tw</p>
                      <p>機構電話：07777755</p>
                      <p>勸募許可文號：12312312</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={borderStyle}>
                  <Card.Body style={{ padding: "30px" }}>
                    <p style={{ fontWeight: "bold" }}>機構宗旨：</p>
                    <div style={ContentStyle}>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;「財團法人董氏基金會」成立宗旨為「促進國民身心健康，預防保健重於治療」。致力於推動菸害防制、食品營養與衛生，以及心理衛生等工作，全方位關懷全民身心健康。
                        董氏基金會心理衛生中心自1990年起，持續進行初級預防推動工作，促進國人心理健康、關心社會心理問題。更朝「建立正向思考觀念」著手，提醒民眾檢視自我情緒與壓力，更以憂鬱及憂鬱症為主題，每年研發心理健康方案及教材、進行系列調查研究、舉辦講座、比賽等各項活動，並拍攝公益影片及錄製廣播帶，積極推動憂鬱症的預防宣導工作，提升民眾憂鬱症防治的認知程度。透過長期推廣，讓更多民眾不害怕談論憂鬱症、提升求助意願。
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={borderStyle}>
                  <Card.Body style={{ padding: "30px" }}>
                    <p style={{ fontWeight: "bold" }}>
                      機構簡介（含募資目的）：
                    </p>
                    <div style={ContentStyle}>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        您捐助的每一筆錢都將用在兒童青少年網路霸凌防護教育中，我們將把這些愛心款項使用在以下項目：
                        1.強化心理韌性-校園網路霸凌防護教育課程
                        2.研製網路霸凌防治教案及教材，提供教師應用於課程教學
                        3.辦理校園心理健康促進教育家長講座
                        4.提供線上諮詢平台服務-【心情頻道聊天室】
                        每週由不同精神科醫師/心理師駐診，提供情緒支持與相關建議。
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div style={{ marginBottom: "40px" }}>
              <table style={tableStyle}>
                <tr>
                  <td style={{ paddingRight: "10px" }}>
                    <div style={btnStyle}>
                      <ButtonLink to="/charityInfo" name="返回" />
                    </div>
                  </td>
                  <td style={{ paddingLeft: "10px" }}>
                    <div style={btnStyle}>
                      <ButtonLink to="/charityInfoSuccess" name="送出" />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default CharityPreview;
