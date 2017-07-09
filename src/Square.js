import React from "react";
import { DropTarget } from 'react-dnd';
import * as DnDItems from "./dndItems";

const squareTarget = {
    drop(props, monitor, component) {
        props.onDropKnight(props.x, props.y);
    },
    canDrop(props, monitor) {
        const {x, y} = monitor.getItem();
        const dx = props.x - x;
        const dy = props.y - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    },
};

const squareCollect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

export class SquareComponent extends React.Component {
    render() {
        const {isWhite, isOver, canDrop, connectDropTarget, x, y} = this.props;
        const colorModifier = isWhite ? "square_white" : "square_black";
        const overColorModifier = isOver ? "square_over" : "";
        const canDropColorModifier = canDrop ? "square_can-drop" : "";
        return (connectDropTarget(
            <div className={`square ${colorModifier} ${overColorModifier} ${canDropColorModifier}`}>
                {this.props.children && React.cloneElement(this.props.children, { isInWhiteSquare: isWhite, x: x, y: y })}
            </div>
        ));
    }
}

export const Square = DropTarget(DnDItems.KNIGHT, squareTarget, squareCollect)(SquareComponent);