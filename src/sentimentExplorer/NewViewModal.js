import * as React from "react";
import {NewViewer} from "../newViewer/NewViewer";
import {Modal} from "react-bootstrap";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

/**
 * New data viewer modal
 */
export class NewViewModal extends React.Component{

    static propTypes = {
        onCloseModal: PropTypes.func,
        showModal: PropTypes.bool
    }

    newData = {
        title: 'Título de la primera noticia',
        summary: 'Resumen de la primera noticia. Continua el resumen de la primera noticia',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque mauris. Aenean tempus ligula eu lorem dignissim tempor. Praesent et tristique massa, id iaculis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras commodo nibh turpis, non tristique nibh vulputate vitae. Phasellus accumsan erat eget augue vulputate, feugiat tristique lectus vulputate. Suspendisse in porttitor sem, ac consequat odio. Nullam semper volutpat maximus. Donec at arcu et tortor maximus malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit sapien vitae nisi fermentum dignissim. In mollis erat eget lacinia bibendum.',
        entities: [{text: 'Julio Cortazar', value: '3', type: 'PER'}, {
            text: 'Manuela Carmena',
            value: '1',
            type: 'PER'
        }, {text: 'Finlandia', value: '2', type: 'GPE'}, {text: 'España', value: '4', type: 'GPE'}],
        sentiment: 1
    }

    /**
     * Component constructor
     *
     * @param props Component properties
     */
    constructor(props){
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
     * Render the new data viewer modal component
     *
     * @returns {*}
     */
    render(): ReactNode{
        const showModal = this.props.showModal;
        return <Modal show={showModal} onHide={this.handleClose}>
            <NewViewer newData={this.newData} sentimentLink={false}/>
        </Modal>
    }
}