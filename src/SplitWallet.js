import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const sss = require('shamirs-secret-sharing');

function toHexString(byteArray) {
    return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('')
}

function SplitWallet(numshare, threshold, pk) {

    const secret = Buffer.from(pk);
    if (numshare >= threshold) {

        const shares = sss.split(secret, {shares: numshare, threshold: threshold});
        const row = [];
        shares.forEach((x) => {
            row.push(createData(toHexString(x)));
        });
        return (row);
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',

    },
    table: {
        minWidth: 700,
    },
});

let id = 0;

function createData(share) {
    id += 1;
    return {id, share};
}

function isHex(h) {
    var regexp = /^[0-9a-fA-F]+$/;
    if (regexp.test(h)) {
        return true;
    } else {
        return false;
    }
}

function verify(privateKeyHex, Numshare, Threshold) {
    if (privateKeyHex.length !== 64)
        return (<h4 style={{color: '#c70032'}}>Incorrect Private Key</h4>);
    if ((isHex(privateKeyHex)) && Threshold < Numshare) {

        var CoinKey = require('coinkey');
        var key = new CoinKey(new Buffer(privateKeyHex, 'hex'));
        return (<h6 style={{color: '#28c749'}}>{key.publicAddress}</h6>);
    }
    if (!(isHex(privateKeyHex))) {
        return (<h4 style={{color: '#c70032'}}>Hex format required</h4>);
    }
    if (Threshold > Numshare) {
        return (<h4 style={{color: '#c70032'}}>{"Threshold must be 0 < threshold <= 2"}</h4>);
    }
    if (Threshold < 2 || Numshare < 2) {
        return (<h4 style={{color: '#c70032'}}>{"Threshold and Numshare must be > 1"}</h4>);
    }
}


class SplitKey extends Component {
    state = {
        PrivateKey: "",
        Numshare: 3,
        Threshold: 2,
        rows: [],
        run: 0,
    };

    setRow() {
        const secret = Buffer.from('secret key')
        if (this.state.Threshold > this.state.Numshare) {
            return (<h4 style={{color: '#c70032'}}>{"Threshold must be 0 < threshold <= 2"}</h4>);
        }
        if (this.state.Threshold < 2 || this.state.Numshare < 2) {
            return (<h4 style={{color: '#c70032'}}>{"Threshold and Numshare must be > 1"}</h4>);
        }
        const shares = sss.split(secret, {shares: this.state.Numshare, threshold: this.state.Threshold});
        const row = [];
        shares.forEach((x) => {
            row.push(createData(toHexString(x)));
        });
        this.setState({rows: row});
    }

    displayRow() {
        return (<Paper style={{overflowX: 'auto'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Shares</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(SplitWallet(this.state.Numshare, this.state.Threshold, this.state.PrivateKey)).map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.share}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>);
    }

    render() {
        return (
            <div>
                <div style={{'display': 'flex', 'justify-content': 'space-around', 'margin-bottom': '15px'}}>
                    <input
                        id="privateKeyInput"
                        type="text"
                        className="form-control"
                        value={this.state.PrivateKey}
                        placeholder="Private key"
                        style={{width: '650px', 'marginLeft': '5px'}}
                        onChange={e => this.setState({PrivateKey: e.target.value})}
                    />
                    <input
                        id="numshare"
                        type="number"
                        className="form-control"
                        placeholder="Number of share"
                        style={{width: '240px', 'marginLeft': '5px'}}
                        onChange={e => this.setState({Numshare: parseInt(e.target.value)})}
                    />
                    <input
                        id="threshold"
                        type="number"
                        className="form-control"
                        style={{width: '240px', 'marginLeft': '5px'}}
                        placeholder="Threshold"
                        onChange={e => this.setState({Threshold: parseInt(e.target.value)})}
                    />
                    <button class="btn btn-success" style={{'margin-left': '10px'}} onClick={() => {
                        this.setRow();
                        console.log(this.state);
                        this.setState({run: 1});
                    }}>Validate
                    </button>
                </div>
                {this.state.run === 1 ? verify(this.state.PrivateKey, this.state.Numshare, this.state.Threshold) : ''}
                {this.state.rows.length > 0 ? this.displayRow() : ''}
            </div>
        );
    }
}


SplitKey.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplitKey);

