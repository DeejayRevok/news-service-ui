import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./SentimentExplorer.css";
import {NSNavbar} from "../navbar/NSNavbar";
import emotion from "../assets/emotion.svg";
import {SentimentScatter} from "./SentimentScatter";
import {SentimentAggregateChart} from "./SentimentAggregateChart";
import {SentimentPie} from "./SentimentPie";
import {SentimentTopList} from "./SentimentTopList";
import {NewViewModal} from "./NewViewModal";
import {NewsModal} from "../newsListModal/NewsModal";
import {ReactNode} from "react";

export class SentimentExplorer extends React.Component {

    sentimentScatterData = [
        { value: 1.2, time: 1503617297689, newTitle: 'Título de la primera noticia'},
        { value: -1, time: 1503616962277, newTitle: 'Título de la segunda noticia'},
        { value: 2.02, time: 1503616882654, newTitle: 'Título de la tercera noticia'},
        { value: -0.4, time: 1503613184594, newTitle: 'Título de la cuarta noticia'},
        { value: -3.1, time: 1503611308914, newTitle: 'Título de la quinta noticia'},
    ]

    topPositiveNews = [
        {title: 'Título de la más positiva', sentiment: 5.8},
        {title: 'Título de la segunda más positiva', sentiment: 5},
        {title: 'Título de la tercera más positiva', sentiment: 4.4}
    ]

    topNegativeNews = [
        {title: 'Título de la más negativa', sentiment: -5.8},
        {title: 'Título de la segunda más negativa', sentiment: -5},
        {title: 'Título de la tercera más negativa', sentiment: -4.4}
    ]

    state = {
        showNewModal: false,
        showAggregateModal: false,
        selectedAggregate: ''
    }

    constructor(props) {
        super(props);
        this.onCloseNewModal = this.onCloseNewModal.bind(this);
        this.handleScatterClick = this.handleScatterClick.bind(this);
        this.onCloseAggregateModal = this.onCloseAggregateModal.bind(this);
        this.handleAggregateClick = this.handleAggregateClick.bind(this);
    }

    onCloseNewModal(): void{
        this.setState((state) =>{
            state.showNewModal = false;
            return state;
        })
    }

    onCloseAggregateModal(): void{
        this.setState((state) =>{
            state.showAggregateModal = false;
            return state;
        })
    }

    handleScatterClick(newTitle: string): void{
        this.setState((state) => {
           state.showNewModal = true;
           return state;
        });
    }

    handleAggregateClick(aggregateTimestamp: string): void{
        this.setState((state) => {
            state.showAggregateModal = true;
            state.selectedAggregate = aggregateTimestamp;
            return state;
        });
    }

    render(): ReactNode{
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
                                <SentimentScatter data={this.sentimentScatterData} handleNewClick={this.handleScatterClick}/>
                            </div>
                        </Row>
                        <Row style={{height: '35%'}}>
                            <Col className="col-8" style={{paddingLeft: '0px'}}>
                                <div style={{height: '100%', width: '100%'}}>
                                    <SentimentAggregateChart handleClick={this.handleAggregateClick}/>
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
                                <SentimentTopList title="Best news" headerColor="green" data={this.topPositiveNews} />
                            </div>
                        </Row>
                        <Row style={{height: '46.5%'}}>
                            <div style={{height: '100%', width: '100%'}}>
                                <SentimentTopList title="Worst news" headerColor="red" data={this.topNegativeNews} />
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <NewViewModal showModal={this.state.showNewModal} onCloseModal={this.onCloseNewModal} />
            <NewsModal title={this.state.selectedAggregate} showModal={this.state.showAggregateModal}
                       onCloseModal={this.onCloseAggregateModal}/>
        </Container>;
    }
}