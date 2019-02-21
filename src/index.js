import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import App from "./App";
import Title from "./Logo"
import SimpleBar from "./SimpleBar";

import TextFields from "./TextField"

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

//
// ReactDOM.render(<MuiThemeProvider theme={theme}>
//     {/*<SplitKey/>,*/}
//     <TextFields/>
// </MuiThemeProvider>, document.getElementById('root'));

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <SimpleBar/>,
    <Title/>,
    <App/>,
</MuiThemeProvider>, document.getElementById('root'));
serviceWorker.register();
