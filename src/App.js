import React, {Component} from 'react';
import "./App.css";
import {Board} from "./Board";
import {CustomDragLayer} from "./CustomDragLayer";

class App extends Component {
    render() {
        return (
            <div>
                <CustomDragLayer />
                <Board knightPositionX={4} knightPositionY={4}/>
            </div>
        );
    }
}

export default App;
