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
                     src="https://bitcoin.org/img/icons/logotop.svg"
                     width="140px"></img>
            </div>
        );
    }
}

export default Logo;
