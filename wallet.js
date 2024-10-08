const { ethers } = require("ethers");

function createWallet () {
    const wallet = ethers.Wallet.createRandom();
    console.log("Address: ", wallet.address);
    console.log("Private Key: ", wallet.privateKey);
    console.log("Mnemonic: ", wallet.mnemonic.phrase);
    return wallet;
}

async function getBalance(address) {
    const provider = ethers.getDefaultProvider('sepolia');
    const balance = await provider.getBalance(address);
    console.log("Balance: ", ethers.formatEther(balance), "ETH");
}

async function getGasPrice() {
    const provider = ethers.getDefaultProvider('sepolia');
    const feeData = await provider.getFeeData();
    console.log("Current Gas Price: ", ethers.formatEther(feeData.gasPrice, 'gwei'), "Gwei");
}

const wallet = createWallet(); 

getBalance(wallet.address);

getGasPrice();