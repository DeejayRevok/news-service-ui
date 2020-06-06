import * as React from "react";
import {Card, Nav} from "react-bootstrap";
import "./SentimentAggregateChart.css";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import moment from "moment";

export class SentimentAggregateChart extends React.Component{

    render() {
        const data = this.props.data;
        return <Card className="SentimentAggregateChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                News sentiments aggregate chart
                <Nav variant="tabs" defaultActiveKey='#days'>
                    <Nav.Item>
                        <Nav href="#content" onClick={() => this.setActiveTab("#content")}>Hours</Nav>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav href="#entities" onClick={() => this.setActiveTab("#entities")}>Days</Nav>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body style={{paddingRight: '40px', paddingLeft: '0px'}}>
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis
                            dataKey='time'
                            domain={['auto', 'auto']}
                            name='Time'
                            tickFormatter={(unixTime) => moment(unixTime).format('HH')}
                            type='number'
                        />
                        <YAxis dataKey='value' name='Sentiment'/>
                        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

                    </LineChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    }
}