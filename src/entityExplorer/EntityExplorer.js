import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import NSNavbar from "../navbar/NSNavbar";
import graph from "../assets/molecule.svg";
import "./EntityExplorer.css";
import {EntityTypeViewer} from "../entityTypeViewer/EntityTypeViewer";
import {EntityList} from "./EntityList";
import {EntityRelationsGraph} from "./EntityRelationsGraph";
import {NewsModal} from "../newsListModal/NewsModal";
import {EntityTypesChart} from "./EntityTypesChart";
import {ReactNode} from "react";

/**
 * Named entities explorer
 */
export class EntityExplorer extends React.Component {

    /**
     * Component constructor
     *
     * @param props Component properties
     */
    constructor(props: object) {
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

    /**
     * Update the initial entity type from the URI after the component mount
     */
    componentDidMount(): void {
        const entityType = this.props.match.params.entityType;
        this.setState((state) => {
            state.entityType = entityType;
            state.entity = null;
            return state;
        });
    }

    /**
     * Update the entity type from the URI after the component is updated
     *
     * @param prevProps Previous component properties
     * @param prevState Previous component state
     * @param snapshot Component snapshot
     */
    componentDidUpdate(prevProps:object, prevState:object, snapshot): void {
        const entityType = this.props.match.params.entityType;
        if (entityType !== prevProps.match.params.entityType) {
            this.setState((state) => {
                state.entityType = entityType;
                state.entity = null;
                return state;
            });
        }
    }

    /**
     * Set the selected entity in the state and its corresponding entity type
     *
     * @param entity Named entity selected
     * @param entityType Type of the selected entity
     */
    onSelectEntity(entity: string, entityType: string): void {
        this.setState((state) => {
            state.entityType = entityType;
            state.entity = entity;
            return state;
        });
    }

    /**
     * Close the entity news modal updating the state
     */
    closeEntityModal(): void {
        this.setState((state) => {
            state.showEntityModal = false;
            return state;
        });
    }

    /**
     * Open the entity news modal for the given entity
     *
     * @param entity Entity used to get the modal news
     */
    openEntityModal(entity: string): void {
        this.setState((state) => {
            state.showEntityModal = true;
            state.modalLabel = entity;
            return state;
        });
    }

    /**
     * Close the link news modal updating the state
     */
    closeLinkModal(): void{
        this.setState((state) => {
            state.showLinkModal = false;
            return state;
        });
    }

    /**
     * Open the link news modal for the given source and target entities
     *
     * @param sourceEntity Source named entity of the link
     * @param targetEntity Target named entity of the link
     */
    openLinkModal(sourceEntity: string, targetEntity: string): void {
        this.setState((state) => {
            state.showLinkModal = true;
            state.modalLabel = sourceEntity + '-' + targetEntity;
            return state;
        });
    }

    /**
     * Render the entity explorer
     *
     * @returns {*}
     */
    render(): ReactNode {
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
                    <Container fluid style={{height: '100%'}}>
                        <Row style={{height: '65%', paddingBottom: '10px'}}>
                            <div style={{height: '100%', width: '100%'}}>
                                <EntityRelationsGraph entityType={this.state.entityType}
                                                      entity={this.state.entity}
                                                      onEntityClick={this.openEntityModal}
                                                      onLinkClick={this.openLinkModal}/>
                            </div>
                        </Row>
                        <Row style={{height: '28%'}}>
                            <div style={{height: '100%', width: '100%'}}>
                                <EntityTypesChart entityType={this.state.entityType}/>
                            </div>
                        </Row>
                    </Container>
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
