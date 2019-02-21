import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./index.css";

const sss = require('shamirs-secret-sharing');


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});


class TextFields extends React.Component {
    state = {
        shares: [],
        rec: "",
        check: 0,
    };

    handleChange(e, i) {
        this.state.shares[i] = e.target.value;
        this.setState({shares: this.state.shares});
        this.setState({check: 1});
    };

    handleSubmit(e) {
        if (this.state.check === 0) {
            return false;
        }

        if (this.state.shares.length > 1) {
            const recovered = sss.combine(this.state.shares.slice(0, this.state.shares.length));
            this.setState({rec: recovered.toString()});
        }
    }

    addShare() {
        this.setState({shares: [...this.state.shares, ""]})
    }

    render() {
        return (
            <div>
                <div className="buttons">
                    <button class="btn btn-primary" style={{'margin-right': '10px'}}
                            onClick={(e) => this.addShare(e)}>Add Share
                    </button>
                    <button class="btn btn-success" style={{'margin-left': '10px'}}
                            onClick={(e) => this.handleSubmit(e)}> Submit
                    </button>
                </div>
                {this.state.rec.length > 0 ?
                    (<h5 className="walletdisplay" style={{color: '#28c749', 'align': 'center'}}>Private
                        Key: {this.state.rec}</h5>) : ''}
                <div className="shareinput">
                    {
                        this.state.shares.map((share, i) => {
                            return (
                                <div className="textfield" key={i}>
                                    <TextField fullWidth onChange={(e) => this.handleChange(e, i)}
                                               value={share}
                                               placeholder={'Enter share ' + (i)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>);
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);