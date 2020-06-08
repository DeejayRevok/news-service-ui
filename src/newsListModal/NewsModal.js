import * as React from "react";
import {Button, Modal} from "react-bootstrap";
import "./NewsModal.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

/**
 * News list modal component
 */
export class NewsModal extends React.Component{

    static propTypes = {
        title: PropTypes.string,
        showModal: PropTypes.bool,
        onCloseModal: PropTypes.func
    }

    news = [
        {
            title: 'Title of the first new',
            content: 'This is a sample content. Again another sample content, the best sample content of the world',
            sentiment: -1
        },
        {
            title: 'Title of the second new',
            content: 'This is a sample content. Again another sample content, the best sample content of the world',
            sentiment: 2
        },
        {
            title: 'Title of the third new',
            content: 'This is a sample content. Again another sample content, the best sample content of the world',
            sentiment: -3
        },
        {
            title: 'Title of the fourth new',
            content: 'This is a sample content. Again another sample content, the best sample content of the world',
            sentiment: 1
        },
        {
            title: 'Title of the fifth new',
            content: 'This is a sample content. Again another sample content, the best sample content of the world',
            sentiment: 2
        },
    ]

    /**
     * Component constructor
     *
     * @param props Component properties
     */
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    /**
     * Handle the modal close notifying the parent component
     */
    handleClose(): void{
        this.props.onCloseModal();
    }

    /**
     * Render the news list modal component
     *
     * @returns {*}
     */
    render(): ReactNode{
        const newsList = this.news.map(newData =>
            <Card key={newData.title} style={{borderColor: 'black'}}>
                <Card.Header style={{backgroundColor: (newData.sentiment<0) ? '#ffbfbf':'#bfffcb'}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={newData.title}>
                        {newData.title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={newData.title}>
                    <Card.Body>{newData.content}</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
        const showModal = this.props.showModal;
        const title = this.props.title;
        return <Modal show={showModal} onHide={this.handleClose}>
            <Modal.Header closeButton className="NewsModalHeader">
                <Modal.Title>{title + ' news'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Accordion>
                    {newsList}
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    }
}
