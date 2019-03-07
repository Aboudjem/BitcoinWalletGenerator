import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import App from "./App";
import Logo from "./Logo"
import SimpleBar from "./SimpleBar";

const theme = createMuiTheme({
    palette: {
        primary: {
            selected: '#000000',
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            main: '#0093FF',
        },
        inherit: {
            main: '#3f50b5'
        },
    },
});
//     palette: {
//         primary: {
//             selected: '#000000',
//             light: '#757ce8',
//             main: '#3f50b5',
//             dark: '#002884',
//             contrastText: '#fff',
//         },
//         secondary: {
//             main: '#0093FF',
//         },
//         inherit: {
//             main: '#3f50b5'
//         },
//     },
// });

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <SimpleBar/>,
    <Logo/>,
    <App/>,
</MuiThemeProvider>, document.getElementById('root'));
serviceWorker.register();
