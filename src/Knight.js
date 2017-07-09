import React from "react";

export class Knight extends React.Component {
    render() {
        const {isInWhiteSquare} = this.props;
        const colorModifier = isInWhiteSquare ? "knight_in-white-square" : "knight_in-black-square";
        return (
          <span className={`knight ${colorModifier}`}>♘</span>
        );
    }
}