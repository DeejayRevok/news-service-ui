// @flow
import * as React from "react";
import {New} from "./New";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./NewsContainer.css";
import PropTypes from 'prop-types';
import ReactNode from "react";
import {NewsStreamService} from "../services/NewsStreamService";
import {NewsGraphQLService} from "../services/NewsGraphQLService";
import {withRouter} from "react-router";

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
class NewsContainer extends React.Component<React.Component.propTypes, State> {

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
        this.newsGQLService = new NewsGraphQLService('http://localhost:8080/graphql');
    }

    componentDidMount(): void {
        this.newsGQLService.getNews().then(response => {
            const newsList = response.data.news;
            this.setState((state) => {
                if(newsList.length <= 0){
                    state.news.push(EMPTY_NEW);
                    this.props.onSelectNew(EMPTY_NEW);
                } else{
                    state.news = Object.assign([], newsList);
                    this.props.onSelectNew(newsList[0]);
                }
                NewsStreamService.subscribe("ws://127.0.0.1:15674/ws", "guest", "guest", this.receivedNew);
                return state;
            });
        }).catch(error => {
            if(error.graphQLErrors.length > 0){
                error.graphQLErrors.forEach((errorData) => {
                    console.log('GraphQL error: '+errorData.error);
                    if(errorData.error === 'HTTPUnauthorized'){
                        this.props.history.push('/login');
                    }
                });
            } else if(error.networkError !== undefined && error.networkError.response.status === 401){
                this.props.history.push('/login');
            }
        });
    }



    receivedNew = (newData: Object) => {
        console.log('Received new '+newData.title);
        this.setState((state) => {
            if (state.news.find((nw) => nw.title === EMPTY_NEW.title) !== undefined) {
                state.news.shift();
                this.props.onSelectNew(newData);
            }
           state.news.unshift(newData);
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

export default withRouter(NewsContainer);
