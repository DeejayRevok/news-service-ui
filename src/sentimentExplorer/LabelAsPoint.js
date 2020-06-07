import * as React from "react";
import "./LabelAsPoint.css";

export class LabelAsPoint extends React.Component {
    onClick = () => {
        const index = this.props.index;
        this.props.handleClick(index);
    }
    render() {
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