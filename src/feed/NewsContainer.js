import * as React from "react";
import {New} from "./New";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./NewsContainer.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

export class NewsContainer extends React.Component {

    static propTypes = {
        news: PropTypes.arrayOf(
            PropTypes.object
        )
    }

    Arrow = ({text, className}) => {
        return (
            <div className={className}
            >{text}</div>
        );
    };

    onSelect = key => {
        this.props.onSelectNew(key);
    };


    ArrowLeft = this.Arrow({text: '<', className: 'arrowPrev'});
    ArrowRight = this.Arrow({text: '>', className: 'arrowNext'});

    render(): ReactNode{
        const news = this.props.news;
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
