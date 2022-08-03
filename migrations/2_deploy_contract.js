const Contract = artifacts.require("TinyDaemons");

module.exports = async function(deployer) {
  await deployer.deploy(Contract);
}
