const FakeUSDC = artifacts.require("FakeUSDC");

module.exports = async (deployer) => {
  await deployer.deploy(FakeUSDC);
};
