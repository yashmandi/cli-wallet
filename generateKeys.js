const { ethers } = require("ethers");

function generateKeys() {
    const wallet = ethers.Wallet.createRandom()

    console.log('private key: ', wallet.privateKay);
    console.log("Public Address: ", wallet.address);
    console.log("Mnemonic Phrase: ", wallet.mnemonic.phrase);
}

generateKeys();