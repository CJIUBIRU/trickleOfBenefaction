import React from 'react';
import "../App.css";
import Container from 'react-bootstrap/Container';

import Navbar from "../elements/navbar";

import TitleSec from "../elements/titleSec";

import CharityCardDetail from '../elements/charityCardDetail';



function CharityDetail() {


  
    return (
        <div>
            <Navbar />
            <TitleSec name="機構基本介紹" />

            <Container>

                <CharityCardDetail h1Title="財團法人董氏基金會" tag="#兒童醫療" mail="mhjtf@jtf.org.tw" phone="0912345678" number="12312312"
                charityContent="「財團法人董氏基金會」成立宗旨為「促進國民身心健康，預防保健重於治療」。致力於推動菸害防制、食品營養與衛生，以及心理衛生等工作，全方位關懷全民身心健康。
                董氏基金會心理衛生中心自1990年起，持續進行初級預防推動工作，促進國人心理健康、關心社會心理問題。更朝「建立正向思考觀念」著手，提醒民眾檢視自我情緒與壓力，更以憂鬱及憂鬱症為主題，每年研發心理健康方案及教材、進行系列調查研究、舉辦講座、比賽等各項活動，並拍攝公益影片及錄製廣播帶，積極推動憂鬱症的預防宣導工作，提升民眾憂鬱症防治的認知程度。透過長期推廣，讓更多民眾不害怕談論憂鬱症、提升求助意願。"
                charityGoal=" 您捐助的每一筆錢都將用在兒童青少年網路霸凌防護教育中，我們將把這些愛心款項使用在以下項目：

                1.強化心理韌性-校園網路霸凌防護教育課程

                2.研製網路霸凌防治教案及教材，提供教師應用於課程教學

                3.辦理校園心理健康促進教育家長講座

                4.提供線上諮詢平台服務-【心情頻道聊天室】

                每週由不同精神科醫師/心理師駐診，提供情緒支持與相關建議。"
                />
            </Container>
        </div>
    )
}

export default CharityDetail;