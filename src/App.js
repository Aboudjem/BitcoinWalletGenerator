import React from 'react';
import './App.css';
import WalletGenerator from "./WalletGenerator"
import SplitKey from "./SplitWallet";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextFields from "./TextField"

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        width: '95%',
    },
});

class App extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root} >
                <AppBar position="static">
                    <Tabs        style={{ 'display': 'flex', 'justify-content': 'space-around'}} value={value} onChange={this.handleChange}>
                        <Tab label="Generate Wallet" />
                        <Tab label="Split Wallet" />
                        <Tab label="Combined Private Key" />
                    </Tabs>
                </AppBar>

                {value === 0 && <TabContainer>{<WalletGenerator/>}</TabContainer>}
                {value === 1 && <TabContainer>{<SplitKey  />}</TabContainer>}
                {value === 2 && <TabContainer>{<TextFields />}</TabContainer>}
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);



// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <Title/>
//                 <SplitKey/>
//                 <WalletGenerator/>
//             </div>
//         );
//     }
// }
//
// export default App;
