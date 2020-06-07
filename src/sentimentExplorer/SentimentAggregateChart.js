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
import {LabelAsPoint} from "./LabelAsPoint";

export class SentimentAggregateChart extends React.Component {

    sentimentHourAggregateData = [
        {value: 1, time: 1591441200000},
        {value: -1, time: 1591444800000},
        {value: 0.5, time: 1591448400000},
        {value: -0.5, time: 1591452000000},
        {value: -1.2, time: 1591455600000},
    ]

    sentimentDayAggregateData = [
        {value: 1, time: 1591526961000},
        {value: -1, time: 1591613361000},
        {value: 0.5, time: 1591699761000},
        {value: -0.5, time: 1591786161000},
        {value: -1.2, time: 1591872561000},
    ]

    constructor(props) {
        super(props);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.onDataClick = this.onDataClick.bind(this);
    }

    state = {
        activeTab: '#hours'
    };

    setActiveTab(tab) {
        this.setState((state) => {
            state.activeTab = tab;
            return state;
        });
    }

    onDataClick(timestampIndex) {
        const timestamp = (this.state.activeTab === '#hours')
            ? this.sentimentHourAggregateData[timestampIndex].time : this.sentimentDayAggregateData[timestampIndex].time
        const formattedTimestamp = moment(timestamp).format('DD/MM/YYYY hh:mm:ss');
        this.props.handleClick(formattedTimestamp);
    }

    render() {
        const data = (this.state.activeTab === '#hours') ?
            this.sentimentHourAggregateData : this.sentimentDayAggregateData;
        return <Card className="SentimentAggregateChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                News sentiments aggregate chart
                <Nav variant="tabs" defaultActiveKey='#hours' style={{paddingTop: '10px'}}>
                    <Nav.Item>
                        <Nav.Link href="#hours" onClick={() => this.setActiveTab("#hours")}>Hours</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#days" onClick={() => this.setActiveTab("#days")}>Days</Nav.Link>
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
                            tickFormatter={(unixTime) => (this.state.activeTab === '#hours') ?
                                moment(unixTime).format('HH') : moment(unixTime).format('DD/MM')}
                            type='number'
                        />
                        <YAxis dataKey='value' name='Sentiment'/>
                        <Tooltip cursor={{strokeDasharray: '3 3'}}
                                 labelFormatter={(label) => moment(label).format('DD/MM/YYYY hh:mm:ss')}/>
                        <Line label={<LabelAsPoint handleClick={this.onDataClick}/>} type="monotone" dataKey="value"
                              stroke="#8884d8"
                              activeDot={false}/>

                    </LineChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    }
}