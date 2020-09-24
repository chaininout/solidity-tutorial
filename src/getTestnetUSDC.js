const ethers = require("ethers");
const wallet = require("./wallet");
const provider = require("./provider");

async function main() {
  const account = wallet.connect(provider);

  // 拿到部署的合约地址
  const usdc = new ethers.Contract(
    "0x4bB2ef39DD99A01BD5C11dDd25F890FeB45081e9",
    ["function gimmeSome() external"],
    account
  );

  const tx = await usdc.gimmeSome({ gasPrice: 20e9 });
  console.log(`Transaction hash: ${tx.hash}`);

  const receipt = await tx.wait();
  console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
  console.log(`Gas used: ${receipt.gasUsed.toString()}`);
}

main();
