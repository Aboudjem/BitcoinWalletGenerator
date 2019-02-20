import {Component} from "react";
import React from "react";
import './index.css';
import './App.css';

function GetAddress(privateKeyHex) {
    if (privateKeyHex.length !== 64)
        return (<h4 style={{color : '#c70032'}}>Incorrect Private Key</h4>);
    if ((isHex(privateKeyHex))) {

    var CoinKey = require('coinkey');
    var key = new CoinKey(new Buffer(privateKeyHex, 'hex'));
        return (<h4 style={{color : '#28c749'}}>{key.publicAddress}</h4>);
    }
    return (<h4 style={{color : '#c70032'}}>Hex format required</h4>);
}

function isHex(h){
        var regexp = /^[0-9a-fA-F]+$/;
        if (regexp.test(h)) {
            return true;
        }
        else {
            return false;
        }
}

function RandomPK(){
    const secureRandom = require('secure-random');
    let privateKey = secureRandom.randomBuffer(32);
    return(privateKey.toString('hex'));
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
    }

    generateRandom() {
        this.setState(
            {
                PrivateKey: (RandomPK()),
            });
        console.log(this.state.PublicAddress);
    }

    render() {
        return (
            <div className="content">
                <div role="tabpanel" className="tab-pane active" id="blockchain">
                    <h3>Enter a private key or generate a random key:</h3><p> Your private key must have hexadecimal format and 64 chars</p>
                    <div className="form-group form-inline">
                        <div className="d-flex bd-highlight">
                            <button className="set btn btn-secondary" onClick={() => {
                                this.generateRandom()
                            }}>
                                Random
                            </button>
                            <input
                                id="privateKeyInput"
                                type="text"
                                className="form-control"
                                placeholder="Private key"
                                value={this.state.PrivateKey}
                                style={{width: '650px', 'marginLeft': '10px'}}
                                onChange={e => this.setState({PrivateKey: e.target.value})}/>
                            <button className="set btn btn-success" style={{'marginLeft': '10px'}} onClick={() => {
                                this.showAddress()
                            }}>
                                Validate
                            </button>


                        </div>
                        <h5>{this.state.PublicAddress === "" ?  '' : 'Bitcoin Public Address: '}</h5>
                        {this.state.PublicAddress === "" ?  '' : <h4>{this.state.PublicAddress}</h4>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;