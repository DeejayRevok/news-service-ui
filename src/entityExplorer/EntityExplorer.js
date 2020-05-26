import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NSNavbar} from "../navbar/NSNavbar";
import graph from "../assets/molecule.svg";
import "./EntityExplorer.css";
import {EntityTypeViewer} from "../entityTypeViewer/EntityTypeViewer";
import {EntityList} from "./EntityList";
import {EntityRelationsGraph} from "./EntityRelationsGraph";
import {EntityNews} from "./EntityNews";

export class EntityExplorer extends React.Component {

    constructor(props) {
        super(props);
        this.onSelectEntity = this.onSelectEntity.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    state = {
        entityType: null,
        entity: null,
        showModal: false
    };

    componentDidMount() {
        const entityType = this.props.match.params.entityType;
        this.setState((state) => {
            state.entityType = entityType;
            return state;
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const entityType = this.props.match.params.entityType;
        if (entityType !== prevProps.match.params.entityType) {
            this.setState((state) => {
                state.entityType = entityType;
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


    closeModal() {
        this.setState((state) => {
            state.showModal = false;
            return state;
        });
    }

    openModal() {
        this.setState((state) => {
            state.showModal = true;
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
                    <div style={{height: '90%'}}>
                        <EntityList entityType={this.state.entityType} onSelectEntity={this.onSelectEntity}/>
                    </div>
                </Col>
                <Col className="col-8">
                    <div style={{height: '90%'}}>
                        <EntityRelationsGraph entityType={this.state.entityType} entity={this.state.entity}/>
                    </div>
                </Col>
                <Col className="col-2">
                    <div style={{height: '90%'}}>
                        <EntityTypeViewer/>
                    </div>
                </Col>
            </Row>
            <EntityNews showModal={this.state.showModal} onCloseModal={this.closeModal}/>
        </Container>;
    }
}
