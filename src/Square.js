import React from "react";
import { DropTarget } from 'react-dnd';
import * as DnDItems from "./dndItems";

const squareTarget = {
    drop(props, monitor, component) {
        props.onDropKnight(props.x, props.y);
    },
};

const squareCollect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
    };
};

export class SquareComponent extends React.Component {
    render() {
        const {isWhite, connectDropTarget} = this.props;
        const colorModifier = isWhite ? "square_white" : "square_black";
        return (connectDropTarget(
            <div className={`square ${colorModifier}`}>
                {this.props.children && React.cloneElement(this.props.children, { isInWhiteSquare: isWhite })}
            </div>
        ));
    }
}

export const Square = DropTarget(DnDItems.KNIGHT, squareTarget, squareCollect)(SquareComponent);