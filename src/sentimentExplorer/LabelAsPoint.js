import * as React from "react";
import "./LabelAsPoint.css";
import PropTypes from 'prop-types';
import {ReactNode} from "react";

/**
 * Custom line chart dot component
 */
export class LabelAsPoint extends React.Component {

    static propTypes = {
        handleClick: PropTypes.func,
        index: PropTypes.number
    }

    /**
     * Update the parent component with the index of the selected data point
     */
    onClick = () => {
        const index = this.props.index;
        this.props.handleClick(index);
    }

    /**
     * Render the custom line chart dot component
     *
     * @returns {*}
     */
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