import React from "react";
import {Square} from "./Square";

export class Board extends React.Component {
    renderRow(rowNumber) {
        const range8 = Array.from(new Array(8).keys());
        return (
            <div className="board__row" key={rowNumber}>
                { range8.map(colNumber => <Square isWhite={(rowNumber + colNumber) % 2 === 0} key={colNumber}/>) }
            </div>
        )
    }

    render() {
        const range8 = Array.from(new Array(8).keys());
        return (
            <div className="board">
                { range8.map(rowNumber => this.renderRow(rowNumber)) }
            </div>
        )
    }
}