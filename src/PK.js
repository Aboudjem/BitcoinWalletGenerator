

function GetAddress(privateKeyHex)
{
    var CoinKey = require('coinkey');
    var key = new CoinKey(new Buffer(privateKeyHex, 'hex'));
    return (key.publicAddress);
}
    // console.log(GetAddress('aaaaaaaaaabbbbbbbbbcccccccccdddddddddddeeeeeeeeeeeffffffffff0000'));