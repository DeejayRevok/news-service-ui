import * as React from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import entities from '../lib/Entities';
import {Card} from "react-bootstrap";
import './EntityTypesChart.css';
import {renderActiveShape} from "../lib/GraphUtils";

export class EntityTypesChart extends React.Component{

    entitesData = [
        { name: 'PER', value: 400 },
        { name: 'GPE', value: 300 },
        { name: 'LOC', value: 300 },
        { name: 'ORG', value: 200 },
        { name: 'DATE', value: 100 },
        { name: 'MONEY', value: 150 },
    ]

    render() {
        const chartCells = this.entitesData.map(entry => <Cell style={{border: '10px solid black'}} key={entry.name} fill={entities[entry.name]['color']} />)
        const activeIndex = this.entitesData.findIndex(entry => entry.name === this.props.entityType);
        return <Card className="EntityTypesChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                Entity types ocurrences
            </Card.Header>
            <Card.Body className="EntityTypesChartBody">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            dataKey="value"
                            data={this.entitesData}
                            fill="#8884d8">
                            {chartCells}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>


    }
}