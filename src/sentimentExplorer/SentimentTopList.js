import * as React from "react";
import {Card, ListGroup} from "react-bootstrap";
import "./SentimentTopList.css";
import ReactTooltip from "react-tooltip";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

export class SentimentTopList extends React.Component{

    static propTypes = {
        title: PropTypes.string,
        headerColor: PropTypes.string,
        data: PropTypes.arrayOf(
            PropTypes.object
        )
    }

    render(): ReactNode{
        const title = this.props.title;
        const headerColor = this.props.headerColor;
        const newList = this.props.data.map(newData =>
                <ListGroup.Item key={newData.title}>
                    <div className="NewLabel" data-tip="React-tooltip" data-for={newData.title + 'Tooltip'}>
                        <div>{newData.title}</div>
                    </div>
                    <ReactTooltip id={newData.title + 'Tooltip'} type='info'>
                        <span>{newData.sentiment}</span>
                    </ReactTooltip>
                </ListGroup.Item>);
        return <Card className="SentimentTopList">
            <Card.Header style={{color: 'white', backgroundColor: headerColor}}>
                {title}
            </Card.Header>
            <Card.Body style={{padding: '0px'}}>
                <ListGroup className="NewListGroup">
                    {newList}
                </ListGroup>
            </Card.Body>
        </Card>
    }
}