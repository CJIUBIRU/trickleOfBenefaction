import React from 'react';
import "../App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../elements/navbar";
// import { hover } from 'npx create-react-app testing-library-project';

import TitleSec from "../elements/titleSec";
import CharityCard from '../elements/charityCard';



function Charity() {
    return (
        <div>
            <Navbar />
            <TitleSec name="合作店家一覽表" />
            <Container>
                {/* , display: "flex", flexDirection: "row" */}
                <div style={{ padding: "30px", textSpacing: "1px" }}>
                    <Row>
                        <Col>
                            <CharityCard />
                        </Col>
                        <Col>
                            <CharityCard />
                        </Col>
                        <Col >
                            <CharityCard />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Charity;