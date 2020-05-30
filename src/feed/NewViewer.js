import * as React from "react";
import {Card, Nav} from "react-bootstrap";
import "./NewViewer.css";
import ReactWordcloud from "react-wordcloud";
import entities from "../lib/Entities";
import {Link} from "react-router-dom";

export class NewViewer extends React.Component {

    state = {
        activeTab: '#content'
    };

    setActiveTab(tab) {
        this.setState({activeTab: tab});
    }

    wordCloudCallbacks = {
        getWordTooltip: word => `${word.type}`,
        getWordColor: word => entities[word.type].color,
        onWordClick: word => {
            window.open(`https://duckduckgo.com/?q=${word.text}`, '_blank');
        }
    };

    wordCloudOptions = {
        fontSizes: [15, 40]
    };

    render() {
        const newTitle = this.props.newData.title;
        const newContent = this.props.newData.content;
        const newEntities = this.props.newData.entities;
        const newSentiment = this.props.newData.sentiment;
        return <Card className="NewViewer">
            <Card.Header style={{backgroundColor: 'silver'}}>
                <div style={{display: 'flex'}}>
                    <div className="NewTitle">{newTitle}</div>
                    <div style={{marginLeft: 'auto', display: 'flex'}}>
                        <Link to="/sentiment">
                            Sentiment:
                        </Link>
                        <div style={{
                            paddingLeft: '5px',
                            fontWeight: 'bold',
                            color: (newSentiment < 0) ? '#bf1408' : '#069e18'
                        }}>
                            {newSentiment}</div>
                    </div>
                </div>
                <Nav variant="tabs" defaultActiveKey='#content'>
                    <Nav.Item>
                        <Nav.Link href="#content" onClick={() => this.setActiveTab("#content")}>Content</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#entities" onClick={() => this.setActiveTab("#entities")}>Entities</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {this.state.activeTab === "#content" ? <Card.Text>{newContent}</Card.Text>
                    :
                    <ReactWordcloud options={this.wordCloudOptions} callbacks={this.wordCloudCallbacks}
                                    words={newEntities}/>}
            </Card.Body>
        </Card>;
    }
}
