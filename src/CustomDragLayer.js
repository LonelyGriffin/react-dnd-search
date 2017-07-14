import React from "react";
import {DragLayer} from "react-dnd";
import * as DnDItems from "./dndItems";


const customDragLayerCollect = (monitor) => {
    return {
        isDragging: monitor.isDragging(),
        itemType: monitor.getItemType(),
    }
};

export class CustomDragLayerComponent extends React.Component {
    render() {
        const {isDragging, itemType} = this.props;

            if(!isDragging || itemType !== DnDItems.KNIGHT) {
            return null;
        }

        return(
            <div>asda</div>
        )
    }
}

export const CustomDragLayer = DragLayer(customDragLayerCollect)(CustomDragLayerComponent);