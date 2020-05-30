import * as React from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip} from "recharts";
import entities from '../lib/Entities';
import {Card} from "react-bootstrap";
import './EntityTypesChart.css';

export class EntityTypesChart extends React.Component{

    entitesData = [
        { name: 'PER', value: 400 },
        { name: 'GPE', value: 300 },
        { name: 'LOC', value: 300 },
        { name: 'ORG', value: 200 },
        { name: 'DATE', value: 100 },
        { name: 'MONEY', value: 150 },
    ]

    renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
            cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

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
                            activeShape={this.renderActiveShape}
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