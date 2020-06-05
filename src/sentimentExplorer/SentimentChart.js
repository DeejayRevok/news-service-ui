import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentChart.css";

export class SentimentChart extends React.Component{

    render() {
        return <Card className="SentimentChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                News sentiments chart
            </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
    }
}