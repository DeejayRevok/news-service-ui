import React from 'react';
import './Feed.css';
import {NewsContainer} from "./NewsContainer";
import feed from "../assets/feed.svg";
import {NSNavbar} from "../navbar/NSNavbar";
import {Col, Container, Row} from "react-bootstrap";
import {NewViewer} from "./newViewer/NewViewer";
import {EntityTypeViewer} from "../entityTypeViewer/EntityTypeViewer";

export class Feed extends React.Component {

    news = [{
        title: 'Título de la primera noticia',
        summary: 'Resumen de la primera noticia. Continua el resumen de la primera noticia',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
        entities: [{text: 'Julio Cortazar', value:'3', type:'PER'}, {text: 'Manuela Carmena', value:'1', type:'PER'}, {text: 'Finlandia', value:'2', type:'GPE'}, {text: 'España', value:'4', type:'GPE'}],
        sentiment: 1
    },
        {
            title: 'Título de la segunda noticia',
            summary: 'Resumen de la segunda noticia. Continua el resumen de la segunda noticia',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
            entities: [{text: 'Julio Cortazar', value:'3', type:'PER'}, {text: 'Manuela Carmena', value:'1', type:'PER'}, {text: 'Finlandia', value:'2', type:'GPE'}, {text: 'España', value:'4', type:'GPE'}],
            sentiment: -1
        },
        {
            title: 'Título de la tercera noticia',
            summary: 'Resumen de la tercera noticia. Continua el resumen de la tercera noticia',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
            entities: [{text: 'Julio Cortazar', value:'3', type:'PER'}, {text: 'Manuela Carmena', value:'1', type:'PER'}, {text: 'Finlandia', value:'2', type:'GPE'}, {text: 'España', value:'4', type:'GPE'}],
            sentiment: 2
        },
        {
            title: 'Título de la cuarta noticia',
            summary: 'Resumen de la tercera noticia. Continua el resumen de la tercera noticia',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
            entities: [{text: 'Julio Cortazar', value:'3', type:'PER'}, {text: 'Manuela Carmena', value:'1', type:'PER'}, {text: 'Finlandia', value:'2', type:'GPE'}, {text: 'España', value:'4', type:'GPE'}],
            sentiment: 2
        },
        {
            title: 'Título de la quinta noticia',
            summary: 'Resumen de la tercera noticia. Continua el resumen de la tercera noticia',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
            entities: [{text: 'Julio Cortazar', value:'3', type:'PER'}, {text: 'Manuela Carmena', value:'1', type:'PER'}, {text: 'Finlandia', value:'2', type:'GPE'}, {text: 'España', value:'4', type:'GPE'}],
            sentiment: 2
        },
        {
            title: 'Título de la sexta noticia',
            summary: 'Resumen de la tercera noticia. Continua el resumen de la tercera noticia',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
            entities: [{text: 'Julio Cortazar', value:'3', type:'PER'}, {text: 'Manuela Carmena', value:'1', type:'PER'}, {text: 'Finlandia', value:'2', type:'GPE'}, {text: 'España', value:'4', type:'GPE'}],
            sentiment: 2
        }
    ];

    state = {
        selectedNew:  this.news[0]
    };

    findNewByTitle = newTitle => {
        return this.news.find(newData => newData.title === newTitle);
    };

    onSelectNew = newTitle => {
        this.setState({selectedNew: this.findNewByTitle(newTitle)});
    };

    render() {
        return <Container className="Feed">
            <Row>
                <Col style={{paddingLeft: 0, paddingRight: 0}}>
                    <NSNavbar sectionName="News feed" sectionIcon={feed}/>
                </Col>
            </Row>
            <Row className="Feed-body">
                <Col>
                    <Row style={{paddingBottom: '10px' ,marginBottom: '0'}}>
                        <Col>
                            <NewsContainer onSelectNew={this.onSelectNew} news={this.news}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: '10px', height: '55%', marginTop: '0'}}>
                        <Col className="col-10">
                            <NewViewer newData={this.state.selectedNew}/>
                        </Col>
                        <Col className="col-2">
                            <EntityTypeViewer />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>;
    }
}
