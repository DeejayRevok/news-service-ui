// @flow
import * as React from "react";
import {New} from "./New";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./NewsContainer.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";
import {NewsStreamService} from "../services/NewsStreamService";

export const EMPTY_NEW = {
    title: "There are no news available yet",
    summary: "News will appear here as they are discovered.",
    content: "Be careful, this is a fake new, ignore this nonsense!",
    entities: [],
    sentiment: 0
}

type State = {
    news: Array<Object>
}

/**
 * New data container component
 */
export class NewsContainer extends React.Component<React.Component.propTypes, State> {

    static propTypes = {
        news: PropTypes.arrayOf(
            PropTypes.object
        )
    }

    state: State = {
        news: []
    }

    constructor(props) {
        super(props);
        this.receivedNew = this.receivedNew.bind(this);
    }

    componentDidMount(): void {
        NewsStreamService.subscribe("ws://127.0.0.1:15674/ws", "guest", "guest", this.receivedNew);
        this.setState((state) => {
           state.news.push(EMPTY_NEW);
           return state;
        });
    }

    receivedNew = (newData: Object) => {
        console.log('Received new '+newData.title);
        this.setState((state) => {
            if (state.news.find((nw) => nw.title === EMPTY_NEW.title) !== undefined) {
                state.news.shift();
                this.props.onSelectNew(newData);
            }
           state.news.push(newData);
           return state;
        });
    }

    /**
     * Container arrow component
     *
     * @param text Arrow component displayed text
     * @param className CSS class name for the arrow
     * @returns {*}
     * @constructor
     */
    Arrow = ({text, className}) => {
        return (
            <div className={className}
            >{text}</div>
        );
    };

    /**
     * Update the parent component with the selected new
     *
     * @param key Key of the selected new
     */
    onSelect = (key: string) => {
        const selectedNew = this.state.news.find((nw) => nw.title === key);
        this.props.onSelectNew(selectedNew);
    };


    ArrowLeft = this.Arrow({text: '<', className: 'arrowPrev'});
    ArrowRight = this.Arrow({text: '>', className: 'arrowNext'});

    /**
     * Render the news container component
     *
     * @returns {*}
     */
    render(): ReactNode{
        const news = this.state.news;
        const listNews = news.map(item =>
            <div key={item.title} className="NewContainer">
                <New newTitle={item.title}
                     newSummary={item.summary}
                     newSentiment={item.sentiment}/>
            </div>);
        return <div>
            <ScrollMenu
            data={listNews}
            arrowLeft={this.ArrowLeft}
            arrowRight={this.ArrowRight}
            onSelect={this.onSelect}
            />
        </div>
    }

}
