import React from "react";
import {DragLayer} from "react-dnd";
import * as DnDItems from "./dndItems";


const customDragLayerCollect = (monitor) => {
    return {
        isDragging: monitor.isDragging(),
        itemType: monitor.getItemType(),
        currentOffset: monitor.getSourceClientOffset(),
    }
};

export class CustomDragLayerComponent extends React.Component {
    render() {
        const {isDragging, itemType, currentOffset} = this.props;

        if(!isDragging || itemType !== DnDItems.KNIGHT || !currentOffset) {
            return null;
        }

        const style = {
            transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`
        };

        return(
            <span className="custom-layer" style={style}>♘</span>
        )
    }
}

export const CustomDragLayer = DragLayer(customDragLayerCollect)(CustomDragLayerComponent);