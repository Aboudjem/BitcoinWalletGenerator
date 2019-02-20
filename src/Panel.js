import {Component} from "react";
import React from "react";
import './index.css';
import './App.css';

function GetAddress(privateKeyHex) {
    if (privateKeyHex.length !== 64)
        return ('Incorrect Private Key');
    var CoinKey = require('coinkey');
    var key = new CoinKey(new Buffer(privateKeyHex, 'hex'));
    return (key.publicAddress);
}

function RandomPK(){
 console.log('test');
}

class Panel extends Component {
    state = {
        PrivateKey: "",
        PublicAddress: "",
    };

    showAddress() {
        this.setState(
            {
                PublicAddress: (GetAddress(this.state.PrivateKey))
            });

        console.log(this.state.PublicAddress);
        document.getElementById("publicAddress").innerText = this.state.PublicAddress
    }
    generateRandom() {
        this.setState(
            {
                // PrivateKey: (RandomPK()),
                // PublicAddress: (GetAddress(this.state.PrivateKey)),
            });
        RandomPK();
        console.log(this.state.PublicAddress);
        document.getElementById("publicAddress").innerText = this.state.PublicAddress
    }


    render() {
        return (
            <div className="content">
                <div role="tabpanel" className="tab-pane active" id="blockchain">
                    <h3>Enter a private key</h3>
                    <div className="form-group form-inline">
                        <div className="form-row">
                            <input
                                id="privateKeyInput"
                                type="text"
                                className="form-control"
                                placeholder="Private key"
                                value={this.state.PrivateKey}
                                style={{width: '500px'}}
                                onChange={e => this.setState({PrivateKey: e.target.value})}/>
                            <button className="set btn btn-success" style={{'marginLeft': '10px'}} onClick={() => {
                                this.showAddress()
                            }}>
                                Create
                            </button>
                            <button className="btn btn-danger" style={{'marginLeft': '10px'}} onClick={() => {
                                this.generateRandom()
                            }}>
                                Random
                            </button>
                            <h3 id="publicAddress">{}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;