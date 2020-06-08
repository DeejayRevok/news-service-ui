import * as React from "react";
import {Card, ListGroup} from "react-bootstrap";
import "./EntityTypeViewer.css"
import entities from "../lib/Entities";
import ReactTooltip from "react-tooltip";
import {Link} from "react-router-dom";
import {ReactNode} from "react";

export class EntityTypeViewer extends React.Component {

    render(): ReactNode{
        const entityList = Object.keys(entities).map(entityType =>
            <ListGroup.Item key={entityType}>
                <div className="EntityTypeLabel">
                    <div className="EntityTypeColorSquare" style={{backgroundColor: entities[entityType].color}}/>
                    <div data-tip="React-tooltip" data-for={entityType + 'Tooltip'}>
                            <Link to={"/entities/" + entityType}>
                                <div style={{paddingLeft: '10px'}}>{entityType}</div>
                            </Link>
                    </div>
                </div>
                <ReactTooltip id={entityType + 'Tooltip'} type='info'>
                    <span>{entities[entityType].description}</span>
                </ReactTooltip>
            </ListGroup.Item>
        );

        return <Card className="EntityTypeViewer">
            <Card.Header style={{backgroundColor: 'silver'}}>
                Entity types
            </Card.Header>
            <Card.Body className="EntityTypeViewerBody">
                <ListGroup className="EntityTypeViewerGroup">
                    {entityList}
                </ListGroup>
            </Card.Body>
        </Card>
    }
}
