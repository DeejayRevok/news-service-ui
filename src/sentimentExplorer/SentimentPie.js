import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentPie.css";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {renderActiveShape} from "../lib/GraphUtils";
import {ReactNode} from "react";

export class SentimentPie extends React.Component {

    constructor(props) {
        super(props);
        this.onClickCell = this.onClickCell.bind(this);
    }

    sentimentData = [
        {name: 'Positive', value: 400},
        {name: 'Negative', value: 300}
    ]

    state = {
        activeLabel: 'Positive'
    }

    onClickCell(label: string): void{
        this.setState((state) =>{
           state.activeLabel = label;
           return state;
        });
    }

    render(): ReactNode {
        const chartCells = this.sentimentData.map(entry => <Cell style={{border: '10px solid black'}}
                                                                 key={entry.name}
                                                                 fill={(entry.name === 'Positive') ? 'green' : 'red'}
                                                                 onClick={() => this.onClickCell(entry.name)}/>)
        const activeIndex = this.sentimentData.findIndex(entry => entry.name === this.state.activeLabel);
        return <Card className="SentimentPie">
            <Card.Header style={{backgroundColor: 'silver'}}>
                Sentiments comparision
            </Card.Header>
            <Card.Body>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            dataKey="value"
                            data={this.sentimentData}
                            fill="#8884d8">
                            {chartCells}
                        </Pie>
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    }
}