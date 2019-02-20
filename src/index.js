import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import App from "./App";
import SplitWallet from "./splitwallet";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#383838',
        },
        secondary: {
            main: '#883838',
        },
    },
});


ReactDOM.render(<MuiThemeProvider theme={theme}>
    <SplitWallet/>
</MuiThemeProvider>, document.getElementById('root'));

// ReactDOM.render(<MuiThemeProvider theme={theme}>
//     <App/>
// </MuiThemeProvider>, document.getElementById('root'));
serviceWorker.register();
