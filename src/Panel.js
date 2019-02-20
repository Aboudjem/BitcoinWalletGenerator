import {Component} from "react";
import React from "react";
import './index.css';
import './App.css';

function GetAddress(privateKeyHex) {
    var CoinKey = require('coinkey');
    var key = new CoinKey(new Buffer(privateKeyHex, 'hex'));
    return (key.publicAddress);
}

class Panel extends Component {
    state = {
        PrivateKey : "",
        PublicAddress : "",
    };
    showAddress(){
        this.state.PublicAddress = (GetAddress(this.state.PrivateKey));
        console.log(this.state.PublicAddress);
        document.getElementById("publicAddress").innerText = this.state.PublicAddress
    // var address = GetAddress(this.state.PrivateKey);
    }



    render() {
        return (
            <div className="content">
                <div role="tabpanel" className="tab-pane active" id="blockchain">
                    <h3>Enter a private key</h3>
                    <div className="form-group form-inline">

                        <input
                            id="privateKeyInput"
                            type="text"
                            className="text form-control"
                            placeholder="Private key"

                            value={this.state.PrivateKey}
                            onChange={e => this.setState({PrivateKey: e.target.value})}/>
                        <button className="set btn btn-success" onClick={() => {this.showAddress()}}>
                        Create</button>
                        <h3 id="publicAddress"></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;