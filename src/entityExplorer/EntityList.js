import * as React from "react";
import {Card, ListGroup} from "react-bootstrap";
import "./EntityList.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

export class EntityList extends React.Component{

    static propTypes = {
        entityType: PropTypes.string
    }

    entitiesByType = {
        PER: ['Julio Cortazar', 'Manolo el del bombo', 'Benito Camela', 'Julia Bond', 'María Fontaneda'],
        GPE: ['Finlandia', 'Portugal', 'España', 'Mexico', 'Estados Unidos', 'Antartida'],
        LOC: ['Los Andes', 'La iglesia del pueblo', 'Lago titicaca', 'Everest', 'Río Tajo'],
        ORG: ['Apple', 'Samsung', 'Facebook', 'Google', 'Hnos Gonzalez S.L.', 'CNI', 'Organizacion de las Naciones Unidas'],
        DATE: ['Diez de Enero de 1990', 'Desde Abril hasta Septiembre', '30 de Febrero', 'Antes de ayer por la tarde'],
        MONEY: ['13000 $', '150.000 €', 'Un millón de dólares', '300.000 millones de pesetas']
    };

    onClickEntity = entity => {
        this.props.onSelectEntity(entity, this.props.entityType)
    };

    render(): ReactNode{
        const entityType = this.props.entityType;
        const entityList = (entityType !== null && entityType !== undefined) ? this.entitiesByType[entityType].map(entity =>
            <ListGroup.Item key={entity} action onClick={(ev) => this.onClickEntity(entity)}>
                <div className="EntityLabel">
                    <div>{entity}</div>
                </div>
            </ListGroup.Item>)
            : [];

        return <Card className="EntityList">
            <Card.Header style={{backgroundColor: 'silver'}}>
                Entities
            </Card.Header>
            <Card.Body className="EntityListBody">
                <ListGroup className="EntityListGroup">
                    {entityList}
                </ListGroup>
            </Card.Body>
        </Card>
    }
}
