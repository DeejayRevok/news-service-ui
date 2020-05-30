import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./SentimentExplorer.css";
import {NSNavbar} from "../navbar/NSNavbar";
import emotion from "../assets/emotion.svg";

export class SentimentExplorer extends React.Component {
    render() {
        return <Container className="SentimentExplorer">
            <Row>
                <Col style={{paddingLeft: 0, paddingRight: 0}}>
                    <NSNavbar sectionName="Sentiment explorer" sectionIcon={emotion}/>
                </Col>
            </Row>
            <Row className="SentimentExplorer-body">
                <Col className="col-sm-10">
                    <Container fluid>
                        <Row></Row>
                        <Row>
                            <Col className="col-7"></Col>
                            <Col className="col-3"></Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="col-sm-2">
                    <Container fluid>
                        <Row></Row>
                        <Row></Row>
                    </Container>
                </Col>
            </Row>
        </Container>;
    }
}