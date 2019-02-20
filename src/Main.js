import {Component} from "react";
import React from "react";
import './index.css';
import './App.css';


class Title extends Component {
    render() {
        return (
            <div>
                <img id="logo"
                     alt="logo"
                     src="https://journalducoin.com/wp-content/uploads/2018/08/BCIO_logo_square_256px.png"
                     width="200px"></img>
                <h3 id="title">BTC Wallet Generator</h3>
            </div>
        );
    }
}

export default Title;
