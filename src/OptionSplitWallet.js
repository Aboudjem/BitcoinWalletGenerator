import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./index.css"
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
        share: '2',
        shares: [],
        i: 0,
    };

    handleChange = shares => event => {
        this.setState({ [shares]: event.target.value });
    };

    displayShareInput(){
        var i = this.state.shares.length;
        console.log(i);
            this.state.shares.push(
            <div>
                <TextField
                id={i}
                label={"Enter shares" + i }
                value={this.state.shares[i]}
                onChange={this.handleChange('shares'[i])}
                margin="normal"/>
            </div>);
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Number of shares"
                    className={classes.textField}
                    value={this.state.share}
                    onChange={this.handleChange('share')}
                    margin="normal"
                />
                <Button onClick={() => {
                     {this.displayShareInput()}}}> OK
                </Button>
                <div className="shareinput">{this.displayShareInput(this.state.share)}</div>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);