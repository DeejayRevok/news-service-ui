import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NSNavbar} from "../navbar/NSNavbar";
import graph from "../assets/molecule.svg";
import "./EntityExplorer.css";
import {EntityTypeViewer} from "../entityTypeViewer/EntityTypeViewer";
import {EntityList} from "./EntityList";
import {EntityRelationsGraph} from "./EntityRelationsGraph";
import {NewsModal} from "./NewsModal";

export class EntityExplorer extends React.Component {

    constructor(props) {
        super(props);
        this.onSelectEntity = this.onSelectEntity.bind(this);
        this.closeEntityModal = this.closeEntityModal.bind(this);
        this.openEntityModal = this.openEntityModal.bind(this);
        this.openLinkModal = this.openLinkModal.bind(this);
        this.closeLinkModal = this.closeLinkModal.bind(this);
    }

    state = {
        entityType: null,
        entity: null,
        showEntityModal: false,
        showLinkModal: false,
        modalLabel: null
    };

    componentDidMount() {
        const entityType = this.props.match.params.entityType;
        this.setState((state) => {
            state.entityType = entityType;
            state.entity = null;
            return state;
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const entityType = this.props.match.params.entityType;
        if (entityType !== prevProps.match.params.entityType) {
            this.setState((state) => {
                state.entityType = entityType;
                state.entity = null;
                return state;
            });
        }
    }

    onSelectEntity(entity, entityType) {
        this.setState((state) => {
            state.entityType = entityType;
            state.entity = entity;
            return state;
        });
    }


    closeEntityModal() {
        this.setState((state) => {
            state.showEntityModal = false;
            return state;
        });
    }

    openEntityModal(entity) {
        this.setState((state) => {
            state.showEntityModal = true;
            state.modalLabel = entity;
            return state;
        });
    }

    closeLinkModal() {
        this.setState((state) => {
            state.showLinkModal = false;
            return state;
        });
    }

    openLinkModal(sourceEntity, targetEntity) {
        this.setState((state) => {
            state.showLinkModal = true;
            state.modalLabel = sourceEntity + '-' + targetEntity;
            return state;
        });
    }

    render() {
        return <Container className="EntityExplorer">
            <Row>
                <Col style={{paddingLeft: 0, paddingRight: 0}}>
                    <NSNavbar sectionName="Entity explorer" sectionIcon={graph}/>
                </Col>
            </Row>
            <Row className="EntityExplorer-body">
                <Col className="col-2">
                    <div style={{height: '93%'}}>
                        <EntityList entityType={this.state.entityType} onSelectEntity={this.onSelectEntity}/>
                    </div>
                </Col>
                <Col className="col-8">
                    <div style={{height: '93%'}}>
                        <EntityRelationsGraph entityType={this.state.entityType}
                                              entity={this.state.entity}
                                              onEntityClick={this.openEntityModal}
                                              onLinkClick={this.openLinkModal}/>
                    </div>
                </Col>
                <Col className="col-2">
                    <div style={{height: '93%'}}>
                        <EntityTypeViewer/>
                    </div>
                </Col>
            </Row>
            <NewsModal title={this.state.modalLabel} showModal={this.state.showEntityModal}
                       onCloseModal={this.closeEntityModal}/>
            <NewsModal title={this.state.modalLabel} showModal={this.state.showLinkModal}
                       onCloseModal={this.closeLinkModal}/>
        </Container>;
    }
}
