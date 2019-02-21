# Bitcoin Wallet Generator

Bitcoin Wallet Generator allows you to create your Bitcoin wallet by choosing your own Private Key, 
you can also generate a shared private key using Shamir's Secret Sharing polynomial also known as 'sss' 
(It is a form of secret sharing, where a secret is divided into parts). 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Bitcoin Wallet Generator.

```bash
npm install
```

## Modules

```javascript
    - material-ui
    - bitcoinjs-lib
    - coinkey
    - mocha
    - qrcode-react
    - secret-sharing
    - secure-random
    - shamirs-secret-sharing
```

## Usage
- generate a random Private Key or choose your own private key (64 Hex chars) and click on Validate to display the corresponding BTC Address
- generate a Shared Private Key click on Validate to display shared parts.
- Combine your shared private keys to display the private Key

## Example

![Image of Wallet Generator](https://github.com/Aboudjem/WalletGenerator/blob/master/public/img/BitcoinGenerator1.png)
![Image of Wallet Generator](https://github.com/Aboudjem/WalletGenerator/blob/master/public/img/BitcoinGenerator2.png)
![Image of Wallet Generator](https://github.com/Aboudjem/WalletGenerator/blob/master/public/img/BitcoinGenerator3.png)
![Image of Wallet Generator](https://github.com/Aboudjem/WalletGenerator/blob/master/public/img/BitcoinGenerator4.png)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.