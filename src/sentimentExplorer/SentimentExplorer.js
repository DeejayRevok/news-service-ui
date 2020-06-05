import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./SentimentExplorer.css";
import {NSNavbar} from "../navbar/NSNavbar";
import emotion from "../assets/emotion.svg";
import {SentimentChart} from "./SentimentChart";
import {SentimentAggregateChart} from "./SentimentAggregateChart";
import {SentimentPie} from "./SentimentPie";
import {SentimentTopList} from "./SentimentTopList";

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
                    <Container fluid style={{height: '100%'}}>
                        <Row style={{height: '58%'}}>
                            <div style={{height: '100%', width: '100%', paddingBottom: '10px'}}>
                                <SentimentChart/>
                            </div>
                        </Row>
                        <Row style={{height: '35%'}}>
                            <Col className="col-8" style={{paddingLeft: '0px'}}>
                                <div style={{height: '100%', width: '100%'}}>
                                    <SentimentAggregateChart/>
                                </div>
                            </Col>
                            <Col className="col-4" style={{paddingRight: '0px'}}>
                                <div style={{height: '100%', width: '100%'}}>
                                    <SentimentPie />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="col-sm-2">
                    <Container fluid style={{height: '100%'}}>
                        <Row style={{height: '46.5%'}}>
                            <div style={{height: '100%', width: '100%', paddingBottom: '10px'}}>
                                <SentimentTopList title="Best news" headerColor="green" />
                            </div>
                        </Row>
                        <Row style={{height: '46.5%'}}>
                            <div style={{height: '100%', width: '100%'}}>
                                <SentimentTopList title="Worst news" headerColor="red" />
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>;
    }
}