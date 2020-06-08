import * as React from "react";
import {Card} from "react-bootstrap";
import "./EntityRelationsGraph.css";
import entityTypes from '../lib/Entities';
import ForceGraph2D from 'react-force-graph-2d';
import PropTypes from 'prop-types';
import {ReactNode} from "react";

export class EntityRelationsGraph extends React.Component {

    static propTypes = {
        entityType: PropTypes.string,
        entity: PropTypes.string,
        onEntityClick: PropTypes.func,
        onLinkClick: PropTypes.func
    }

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
            {source: 'Julio Cortazar', target: 'Manolo el del bombo', width: 3, label:'Julio Cortazar - Manolo el del bombo'},
            {source: 'Julio Cortazar', target: 'Julia Bond', width: 1, label:'Julio Cortazar - Julia Bond'},
            {source: 'Manolo el del bombo', target: 'Benito Camela', width: 2.5, label:'Manolo el del bombo - Benito Camela'},
            {source: 'Benito Camela', target: 'Julio Cortazar', width: 2, label:'Benito Camela - Julio Cortazar'},
            {source: 'Benito Camela', target: 'María Fontaneda', width: 2.5, label:'Benito Camela - María Fontaneda'},
            {source: 'María Fontaneda', target: 'Julia Bond', width: 1.5, label:'María Fontaneda - Julia Bond'}
        ]
    };

    JulioGraph = {
        nodes: [
            {
                id: "Julio Cortazar",
                label: "Julio Cortazar",
                color: entityTypes['PER']['color'],
                value: 8,
            },
            {
                id: "Finlandia",
                label: "Finlandia",
                color: entityTypes['GPE']['color'],
                value: 6,
            },
            {
                id: "Everest",
                label: "Everest",
                color: entityTypes['LOC']['color'],
                value: 5,
            },
            {
                id: "Apple",
                label: "Apple",
                color: entityTypes['ORG']['color'],
                value: 4,
            },
            {
                id: "30 de Febrero",
                label: "30 de Febrero",
                color: entityTypes['DATE']['color'],
                value: 3,
            }
        ],
        links: [
            {source: 'Julio Cortazar', target: 'Finlandia', width: 3, label:'Julio Cortazar - Finlandia'},
            {source: 'Finlandia', target: 'Apple', width: 1, label:'Finlandia - Apple'},
            {source: 'Finlandia', target: '30 de Febrero', width: 2.5, label:'Finlandia - 30 de Febrero'},
            {source: 'Finlandia', target: 'Everest', width: 2, label:'Finlandia - Everest'},
            {source: 'Everest', target: 'Apple', width: 2.5, label:'Everest - Apple'},
            {source: '30 de Febrero', target: 'Julio Cortazar', width: 1.5, label:'30 de Febrero - Julio Cortazar'}
        ]
    };

    state = {
        height: null,
        width: null,
    };

    constructor(props: object) {
        super(props);
        this.onEntityClick = this.onEntityClick.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions(): void{
        const height = document.getElementById('graphContainer').clientHeight;
        const width = document.getElementById('graphContainer').clientWidth;
        this.setState({height: height, width: width});
    }

    componentDidMount(): void {
        const height = document.getElementById('graphContainer').clientHeight;
        const width = document.getElementById('graphContainer').clientWidth;
        this.setState({height: height, width: width});
        window.addEventListener('resize', this.updateDimensions);
    }

    onEntityClick(node: object, event: object): void{
        this.props.onEntityClick(node.label);
    }

    onLinkClick(link: object, event: object): void{
        this.props.onLinkClick(link.source.label, link.target.label);
    }


    render(): ReactNode{
        const entity = this.props.entity;
        const entityType = this.props.entityType;
        const graphData = (entity !== null && entity !== undefined) ? this.JulioGraph : this.PERGraph;
        return <Card className="EntityRelationsGraph">
            <Card.Header style={{backgroundColor: 'silver'}}>
                {(entity === null || entity === undefined) ?
                    <span>{entityType + ' relations graph'}</span>
                    :
                    <span>{entity + ' relations graph'}</span>
                }
            </Card.Header>
            <Card.Body>
                <div id='graphContainer' style={{minHeight: '100%', width: '100%'}}>
                    {(this.state.height !== null) ?
                        <ForceGraph2D
                            width={this.state.width}
                            height={this.state.height}
                            graphData={graphData}
                            nodeVal='value'
                            nodeColor='color'
                            nodeLabel='label'
                            linkWidth='width'
                            linkLabel='label'
                            onNodeClick={this.onEntityClick}
                            onLinkClick={this.onLinkClick}
                        /> : <div/>
                    }
                </div>
            </Card.Body>
        </Card>
    }
}
