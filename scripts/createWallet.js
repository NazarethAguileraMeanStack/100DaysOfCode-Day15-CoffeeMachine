const prompt = require("prompt-sync")({ sigint: true });
const Wallet = require("../classes/Wallet");

function createWallet() {
    console.log("Enter your change: ");
    let quarters = prompt("How many quarters? ");
    let dimes = prompt("How many dimes? ");
    let nickels = prompt("How many nickels? ");
    let pennies = prompt("How many pennies? ");
    const wallet = new Wallet(Number(quarters), Number(dimes), Number(nickels), Number(pennies));
    return wallet;
}

module.exports = createWallet;