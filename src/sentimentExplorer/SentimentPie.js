import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentPie.css";

export class SentimentPie extends React.Component{

    render() {
        return <Card className="SentimentPie">
            <Card.Header style={{backgroundColor: 'silver'}}>
                Sentiments comparision
            </Card.Header>
            <Card.Body>

            </Card.Body>
        </Card>
    }
}