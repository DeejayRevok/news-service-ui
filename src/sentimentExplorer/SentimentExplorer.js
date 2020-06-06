import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./SentimentExplorer.css";
import {NSNavbar} from "../navbar/NSNavbar";
import emotion from "../assets/emotion.svg";
import {SentimentScatter} from "./SentimentScatter";
import {SentimentAggregateChart} from "./SentimentAggregateChart";
import {SentimentPie} from "./SentimentPie";
import {SentimentTopList} from "./SentimentTopList";

export class SentimentExplorer extends React.Component {

    sentimentScatterData = [
        { value: 1.2, time: 1503617297689 },
        { value: -1, time: 1503616962277 },
        { value: 2.02, time: 1503616882654 },
        { value: -0.4, time: 1503613184594 },
        { value: -3.1, time: 1503611308914 },
    ]

    sentimentAggregateData = [
        { value: 1, time: 1591441200000 },
        { value: -1, time: 1591444800000 },
        { value: 0.5, time: 1591448400000 },
        { value: -0.5, time: 1591452000000 },
        { value: -1.2, time: 1591455600000 },
    ]

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
                                <SentimentScatter data={this.sentimentScatterData}/>
                            </div>
                        </Row>
                        <Row style={{height: '35%'}}>
                            <Col className="col-8" style={{paddingLeft: '0px'}}>
                                <div style={{height: '100%', width: '100%'}}>
                                    <SentimentAggregateChart data={this.sentimentAggregateData}/>
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