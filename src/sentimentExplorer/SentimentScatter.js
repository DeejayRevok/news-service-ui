import * as React from "react";
import {Card} from "react-bootstrap";
import "./SentimentScatter.css";
import {CartesianGrid, Cell, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from "recharts";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

/**
 * Sentiment data scatter chart component
 */
export class SentimentScatter extends React.Component {

    static propTypes = {
        handleNewClick: PropTypes.func,
        data: PropTypes.arrayOf(
            PropTypes.object
        )
    }

    /**
     * Component constructor
     *
     * @param props Component properties
     */
    constructor(props) {
        super(props);
        this.onNewClick = this.onNewClick.bind(this);
    }

    /**
     * Handle the start date change updating the state
     *
     * @param date New start date
     */
    handleStartChange = date => {
        this.setState((state) => {
            state.startDate = date;
            return state;
        });
    };

    /**
     * Handle the end date change updating the state
     *
     * @param date New end date
     */
    handleEndChange = date => {
        this.setState((state) => {
            state.endDate = date;
            return state;
        });
    };

    state = {
        startDate: new Date().setDate(new Date().getDate() - 1),
        endDate: new Date()
    };

    /**
     * Update the parent component with title of the clicked data point
     *
     * @param newTitle Title of the new which corresponds to the clicked data point
     */
    onNewClick(newTitle: string): void{
        this.props.handleNewClick(newTitle);
    }

    /**
     * Render the sentiment scatter chart component
     *
     * @returns {*}
     */
    render(): ReactNode{
        const data = this.props.data;
        return <Card className="SentimentChart">
            <Card.Header style={{backgroundColor: 'silver'}}>
                News sentiments scatter chart
            </Card.Header>
            <Card.Body style={{paddingRight: '40px', paddingLeft: '0px'}}>
                <div style={{display: "flex", flexDirection: "column", height: '100%'}}>
                    <div style={{display: 'flex', paddingBottom: '15px', paddingLeft: '15px'}}>
                        <div>
                            <span style={{paddingRight: '5px'}}>
                                From:
                            </span>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleStartChange}
                            />
                        </div>
                        <div style={{paddingLeft: '15px'}}>
                            <span style={{paddingRight: '5px'}}>
                                To:
                            </span>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleEndChange}
                            />
                        </div>
                    </div>
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
                            <Tooltip cursor={{strokeDasharray: '3 3'}}
                                     formatter={(value, name, props) => (name === 'Time') ?
                                         moment(value).format('DD/MM/YYYY hh:mm:ss') : value}/>

                            <Scatter
                                data={data}
                                line={{stroke: '#eee'}}
                                lineJointType='monotoneX'
                                lineType='joint'
                                name='Values'
                            >
                                {
                                    data.map((entry, index) => <Cell key={`cell-${index}`}
                                                                     fill={(entry.value > 0) ? 'green' : 'red'}
                                                                     className="CustomCell"
                                                                     onClick={() => this.onNewClick(entry.newTitle)}/>)
                                }
                            </Scatter>

                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
            </Card.Body>
        </Card>
    }
}