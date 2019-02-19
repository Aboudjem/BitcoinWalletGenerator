

function GetAddress(privateKeyHex)
{
    var CoinKey = require('coinkey');
    var key = new CoinKey(new Buffer(privateKeyHex, 'hex'));
    console.log(key.publicAddress);
    return (key.publicAddress);
}
    console.log(GetAddress('aaaaaaaaaabbbbbbbbbcccccccccdddddddddddeeeeeeeeeeeffffffffff0000'));