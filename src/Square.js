import React from "react";

export class Square extends React.Component {
    render() {
        const {isWhite} = this.props;
        const colorModifier = isWhite ? "square_white" : "square_black";
        return (
            <div className={`square ${colorModifier}`}>
                {React.cloneElement(this.props.children, { isInWhiteSquare: isWhite })}
            </div>
        );
    }
}