import {Component} from "react";
import React from "react";
import './index.css';
import './App.css';

class Logo extends Component {
    render() {
        return (
            <div>
                <img id="logo"
                     alt="logo"
                     src="https://journalducoin.com/wp-content/uploads/2018/08/BCIO_logo_square_256px.png"
                     width="120px"></img>
            </div>
        );
    }
}

export default Logo;
