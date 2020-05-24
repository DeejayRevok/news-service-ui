import * as React from "react";
import {Card, Nav} from "react-bootstrap";
import "./NewViewer.css";
import ReactWordcloud from "react-wordcloud";
import entities from "../../lib/Entities";

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
        return <Card className="NewViewer">
            <Card.Header style={{backgroundColor: 'silver'}}>
                <div className="NewTitle">{newTitle}</div>
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
                <Card.Text>
                    {this.state.activeTab === "#content" ? newContent :
                        <ReactWordcloud options={this.wordCloudOptions} callbacks={this.wordCloudCallbacks}
                                        words={newEntities}/>}
                </Card.Text>
            </Card.Body>
        </Card>;
    }
}
