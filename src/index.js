import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import App from "./App";


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
    <App/>
</MuiThemeProvider>, document.getElementById('root'));
serviceWorker.register();
