import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {NSNavbar} from "../navbar/NSNavbar";
import graph from "../assets/molecule.svg";
import "./EntityExplorer.css";
import {EntityTypeViewer} from "../entityTypeViewer/EntityTypeViewer";
import {EntityList} from "./EntityList";
import {EntityRelationsGraph} from "./EntityRelationsGraph";

export class EntityExplorer extends React.Component {

    state = {
        entityType: null,
        entity: null
    };

    componentDidMount() {
        const entityType = this.props.match.params.entityType;
        this.setState({entityType: entityType});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const entityType = this.props.match.params.entityType;
        if (entityType !== prevProps.match.params.entityType) {
            this.setState({entityType: entityType});
        }
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
                        <EntityList entityType={this.state.entityType}/>
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
        </Container>;
    }
}
