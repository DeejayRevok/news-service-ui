import * as React from "react";
import {Card} from "react-bootstrap";
import "./EntityRelationsGraph.css";
import entityTypes from '../lib/Entities';
import ForceGraph2D from 'react-force-graph-2d';

export class EntityRelationsGraph extends React.Component {

    PERGraph = {
        nodes: [
            {
                id: "Julio Cortazar",
                label: "Julio Cortazar",
                color: entityTypes['PER']['color'],
                value: 8,
            },
            {
                id: "Manolo el del bombo",
                label: "Manolo el del bombo",
                color: entityTypes['PER']['color'],
                value: 6,
            },
            {
                id: "Benito Camela",
                label: "Benito Camela",
                color: entityTypes['PER']['color'],
                value: 5,
            },
            {
                id: "Julia Bond",
                label: "Julia Bond",
                color: entityTypes['PER']['color'],
                value: 4,
            },
            {
                id: "María Fontaneda",
                label: "María Fontaneda",
                color: entityTypes['PER']['color'],
                value: 3,
            }
        ],
        links: [
            {source: 'Julio Cortazar', target: 'Manolo el del bombo', width: 3},
            {source: 'Julio Cortazar', target: 'Julia Bond', width: 1},
            {source: 'Manolo el del bombo', target: 'Benito Camela', width: 2.5},
            {source: 'Benito Camela', target: 'Julio Cortazar', width: 2},
            {source: 'Benito Camela', target: 'María Fontaneda', width: 2.5},
            {source: 'María Fontaneda', target: 'Julia Bond', width: 1.5}
        ]
    };

    state = {
        height: null,
        width: null
    };

    componentDidMount() {
        const height = document.getElementById('graphContainer').clientHeight;
        const width = document.getElementById('graphContainer').clientWidth;
        this.setState({ height: height, width: width});
    }

    render() {
        const entity = this.props.entity;
        const entityType = this.props.entityType;
        return <Card className="EntityRelationsGraph">
            <Card.Header style={{backgroundColor: 'silver'}}>
                {(entity === null || entity === undefined) ?
                    <span>{entityType + ' relations graph'}</span>
                    :
                    <span>{entity + ' relations graph'}</span>
                }
            </Card.Header>
            <Card.Body>
                <div id='graphContainer' style={{height: '100%', width: '100%'}}>
                    { (this.state.height !==null) ?
                        <ForceGraph2D
                            width={this.state.width}
                            height={this.state.height}
                            graphData={this.PERGraph}
                            nodeVal='value'
                            nodeColor='color'
                            nodeLabel='label'
                            linkWidth='width'
                        /> : <div />
                    }
                </div>
            </Card.Body>
        </Card>
    }
}
