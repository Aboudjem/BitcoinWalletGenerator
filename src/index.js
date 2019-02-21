import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import App from "./App";
import Title from "./Logo"
import SimpleBar from "./SimpleBar";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#383838',
            selected: '#000000',
            light: '#757ce8',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            main: '#0093FF',
        },
        inherit: {
            main: '#4b4b4b'
        },
    },
});

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <SimpleBar/>,
    <Title/>,
    <App/>,
</MuiThemeProvider>, document.getElementById('root'));
serviceWorker.register();
