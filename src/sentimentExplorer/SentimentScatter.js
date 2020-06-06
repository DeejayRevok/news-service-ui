import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentScatter.css";
import {CartesianGrid, Cell, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from "recharts";
import moment from 'moment';

export class SentimentScatter extends React.Component {

    render() {
        const data = this.props.data;
        return <Card className="SentimentChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                News sentiments scatter chart
            </Card.Header>
            <Card.Body style={{paddingRight: '40px', paddingLeft: '0px'}}>
                <ResponsiveContainer width='100%' height='100%'>
                    <ScatterChart>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis
                            dataKey='time'
                            domain={['auto', 'auto']}
                            name='Time'
                            tickFormatter={(unixTime) => moment(unixTime).format('HH:mm:ss')}
                            type='number'
                        />
                        <YAxis dataKey='value' name='Sentiment'/>
                        <Tooltip cursor={{strokeDasharray: '3 3'}}/>

                        <Scatter
                            data={data}
                            line={{stroke: '#eee'}}
                            lineJointType='monotoneX'
                            lineType='joint'
                            name='Values'
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`}
                                                                 fill={(entry.value > 0) ? 'green' : 'red'}/>)
                            }
                        </Scatter>

                    </ScatterChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    }
}