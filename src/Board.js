import React from "react";
import {Square} from "./Square";
import {Knight} from "./Knight";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            knightPositionX: props.knightPositionX,
            knightPositionY: props.knightPositionY,
        }
    }

    moveKnight = (x, y) => {
        if(x >= 0 && x < 8 && y >= 0 && y < 8) {
            this.setState({
                knightPositionX: x,
                knightPositionY: y,
            });
        }
    };

    onDropKnight = (x, y) => {
        this.moveKnight(x, y);
    };

    renderRow(rowNumber, knightPositionX, knightPositionY) {
        const range8 = Array.from(new Array(8).keys());
        return (
            <div className="board__row" key={rowNumber}>
                {
                    range8.map(colNumber =>
                        <Square
                            isWhite={(rowNumber + colNumber) % 2 === 0} key={colNumber}
                            x={rowNumber}
                            y={colNumber}
                            onDropKnight={this.onDropKnight}
                        >
                            {knightPositionX === rowNumber && knightPositionY === colNumber && <Knight/>}
                        </Square>
                    )
                }
            </div>
        )
    }

    render() {
        const {knightPositionX, knightPositionY} = this.state;
        const range8 = Array.from(new Array(8).keys());
        return (
            <div className="board">
                { range8.map(rowNumber => this.renderRow(rowNumber, knightPositionX, knightPositionY)) }
            </div>
        )
    }
}
