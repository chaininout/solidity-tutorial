const ethers = require("ethers");
const wallet = require("./wallet");
const provider = require("./provider");

async function main() {
  const account = wallet.connect(provider);

  // Define contract interface
  const usdc = new ethers.Contract(
    "0x4bB2ef39DD99A01BD5C11dDd25F890FeB45081e9",
    [
      "function balanceOf(address _owner) public view returns (uint256 balance)",
    ],
    account
  );

  // get eth
  const ethBalance = await account.getBalance();
  console.log(`ETH Balance: ${ethers.utils.formatEther(ethBalance)}`);

  // Call FackUSDC balanceOf function
  const usdcBalance = await usdc.balanceOf(account.address);
  console.log(`USDC Balance: ${ethers.utils.formatUnits(usdcBalance, 6)}`);
}

main();
