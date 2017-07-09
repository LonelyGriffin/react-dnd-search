import React from "react";
import {Square} from "./Square";
import {Knight} from "./Knight";

export class Board extends React.Component {
    renderRow(rowNumber, knightPositionX, knightPositionY) {
        const range8 = Array.from(new Array(8).keys());
        return (
            <div className="board__row" key={rowNumber}>
                {
                    range8.map(colNumber =>
                        <Square isWhite={(rowNumber + colNumber) % 2 === 0} key={colNumber}>
                            {knightPositionX === rowNumber && knightPositionY === colNumber && <Knight/>}
                        </Square>
                    )
                }
            </div>
        )
    }

    render() {
        const {knightPositionX, knightPositionY} = this.props;
        const range8 = Array.from(new Array(8).keys());
        return (
            <div className="board">
                { range8.map(rowNumber => this.renderRow(rowNumber, knightPositionX, knightPositionY)) }
            </div>
        )
    }
}