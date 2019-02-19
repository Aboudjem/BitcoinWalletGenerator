import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SimpleBar from "./SimpleBar";
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core'


const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#383838',
        },
        secondary: {
            main: '#883838',
        },
    },
});



var CoinKey = require('coinkey')

var privateKeyHex = "aaaaaaaaaabbbbbbbbbcccccccccdddddddddddeeeeeeeeeeeffffffffff0000"

// Bitcoin Address
var key = new CoinKey(new Buffer(privatKeyHex, 'hex'));
console.log(key.publicAddress) // => 16UjcYNBG9GTK4uq2f7yYEbuifqCzoLMGS


ReactDOM.render(<MuiThemeProvider theme={theme}>
    <SimpleBar />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
