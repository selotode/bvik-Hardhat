require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 
module.exports = {
  solidity: "0.8.4",
  networks: {
	hardhat: {
    chainId: 31337
  },
   rinkeby: {
     url: "https://rinkeby.infura.io/v3/caf7a70d1ca2492e8bbceed1cc45cde3",
     accounts: ["5f22b5e458acaffaf16d360b71d4aefe4399d11908a50a9ad0d581f310b99265"]
	 },
  },
   etherscan: {
    apiKey: "KQVTU18W9QYEINXTT69GISHVBD1TDCWYNG"
  }
};
