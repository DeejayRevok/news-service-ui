import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentAggregateChart.css";

export class SentimentAggregateChart extends React.Component{

    render() {
        return <Card className="SentimentAggregateChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                News sentiments aggregate chart
            </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
    }
}