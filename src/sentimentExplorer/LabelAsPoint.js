import * as React from "react";
import "./LabelAsPoint.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

export class LabelAsPoint extends React.Component {

    static propTypes = {
        handleClick: PropTypes.func,
        index: PropTypes.number
    }

    onClick = () => {
        const index = this.props.index;
        this.props.handleClick(index);
    }
    render(): ReactNode{
        const { x, y } = this.props;
        return (
            <circle
                className="CustomDot"
                onClick={this.onClick}
                cx={x}
                cy={y}
                r={8}
                fill="transparent"/>
        );
    }
}