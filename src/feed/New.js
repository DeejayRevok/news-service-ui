import * as React from "react";
import {Card} from "react-bootstrap";
import "./New.css";

export class New extends React.Component{

    render() {
        const title = this.props.newTitle;
        const summary = this.props.newSummary;
        const sentiment = this.props.newSentiment;
       return <Card className="newCard">
           <Card.Header className="newCardHeader" style={{backgroundColor: (sentiment<0) ? '#bf1408':'#069e18',}}>
                         {title}</Card.Header>
           <Card.Body className="newCardBody" style={{backgroundColor: (sentiment<0) ? '#ffbfbf':'#bfffcb'}}>
               <Card.Text>{summary}</Card.Text>
           </Card.Body>
       </Card>;
    }
}
