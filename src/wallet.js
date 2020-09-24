const ethers = require("ethers");

// Replace the following with your own mnemonic
const mnemonic =
  "viable glow tone pole input series weather slam blouse embark achieve position";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
