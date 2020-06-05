import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentTopList.css";

export class SentimentTopList extends React.Component{

    render() {
        const title = this.props.title;
        const headerColor = this.props.headerColor;
        return <Card className="SentimentTopList">
            <Card.Header style={{color: 'white', backgroundColor: headerColor}}>
                {title}
            </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
    }
}