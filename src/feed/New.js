import * as React from "react";
import {Card} from "react-bootstrap";
import "./New.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

/**
 * New data component
 */
export class New extends React.Component {

    static propTypes = {
        newTitle: PropTypes.string,
        newSummary: PropTypes.string,
        newSentiment: PropTypes.number
    }

    getCardHeaderColor = (sentiment) => {
        if (sentiment > 0) {
            return '#069e18';
        }else if (sentiment < 0) {
            return '#bf1408';
        }else{
            return '#ccc12b';
        }
    }

    getCardBodyColor = (sentiment) => {
        if (sentiment > 0) {
            return '#bfffcb';
        }else if (sentiment < 0) {
            return '#ffbfbf';
        }else{
            return '#f7ee6d';
        }
    }

    /**
     * Render the new component
     *
     * @returns {*}
     */
    render(): ReactNode {
        const title = this.props.newTitle;
        const summary = (this.props.newSummary !== undefined && this.props.newSummary !== null)
            ? this.props.newSummary : 'New summary is not available yet';
        const sentiment = this.props.newSentiment;
        return <Card className="newCard">
            <Card.Header className="newCardHeader" style={{backgroundColor: this.getCardHeaderColor(sentiment),}}>
                {title}</Card.Header>
            <Card.Body className="newCardBody" style={{backgroundColor: this.getCardBodyColor(sentiment)}}>
                <Card.Text>{summary}</Card.Text>
            </Card.Body>
        </Card>;
    }
}
