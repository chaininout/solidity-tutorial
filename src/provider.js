const ethers = require("ethers");

const provider = ethers.getDefaultProvider("kovan", {
  // Replace the following with your own INFURA API key
  infura: "c844845b06f84d379ba3fb3bba5a1f99",
});

module.exports = provider;
