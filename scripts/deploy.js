const hh = require("hardhat");

async function main() {

  const FinkiCoin = await hh.ethers.getContractFactory("FinkiCoin");
  const finkiCoin = await FinkiCoin.deploy();

  await finkiCoin.deployed();

  console.log("Finki Coin deployed to:", finkiCoin.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });