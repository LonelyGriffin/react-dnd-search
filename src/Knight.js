import React from "react";
import { DragSource,  } from 'react-dnd';
import {getEmptyImage} from "react-dnd-html5-backend";
import * as DnDItems from "./dndItems";

const knightSource = {
    beginDrag(props) {
        return {
            x: props.x,
            y: props.y,
        };
    }
};

const knightCollect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
};

export class KnightComponent extends React.Component {

    componentDidMount() {
        this.props.connectDragPreview(getEmptyImage(), {
            captureDraggingState: true,
        })
    }

    render() {
        const {isInWhiteSquare, connectDragSource, isDragging} = this.props;
        const colorModifier = isInWhiteSquare ? "knight_in-white-square" : "knight_in-black-square";
        const draggingModifier = isDragging ? "knight_dragging" : "";
        return (connectDragSource(
          <span className={`knight ${colorModifier} ${draggingModifier}`}>♘</span>
        ));
    }
}

export const Knight = DragSource(DnDItems.KNIGHT, knightSource, knightCollect)(KnightComponent);