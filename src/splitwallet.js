    var secrets = require('secret-sharing.js');
    var key = secrets.random(512); // => key is a hex string
    // split into 10 shares with a threshold of 5

    function ShareSecret(numshares, threshold) {
    var shares = secrets.share(key,numshares, threshold);
    console.log('share: ' + secrets.combine(shares))
    return(shares);
}


function CombSecrets(shares, numshares){
// combine 4 shares
    var comb = secrets.combine(shares.slice(0, numshares));
    console.log(comb === key); // => false
// create another share with id 8
//     var newShare = secrets.newShare(8, shares); // => newShare = '808xxx...xxx'
// reconstruct using 4 original shares and the new share:
//     comb = secrets.combine(shares.slice(1, 5).concat(newShare));
    console.log(comb); // => true
}

CombSecrets(ShareSecret(4, 2), 2);


