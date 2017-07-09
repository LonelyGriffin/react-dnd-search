import React, {Component} from 'react';
import {Knight} from "./Knight";
import "./App.css";
import {Square} from "./Square";

class App extends Component {
    render() {
        return (
            <div >

                <p>Knight in black square:</p>
                <Square>
                    <Knight/>
                </Square>

                <p>Knight in white square:</p>
                <Square isWhite={true}>
                    <Knight/>
                </Square>

            </div>
        );
    }
}

export default App;
