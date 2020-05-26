import * as React from "react";
import {Button, Modal} from "react-bootstrap";

export class EntityNews extends React.Component{

    handleClose(){
        this.props.onCloseModal();
    }

    render(){
        const showModal = this.props.showModal;
        return <Modal show={showModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    }
}
