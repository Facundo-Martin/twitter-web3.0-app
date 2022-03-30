const hre = require("hardhat");

async function main() {
  const ProfileImageMinterFactory = await hre.ethers.getContractFactory(
    "ProfileImageNfts"
  );
  const ProfileImageContract = await ProfileImageMinterFactory.deploy();

  await ProfileImageContract.deployed();

  console.log(
    "Profile Image Minter Contract deployed to:",
    ProfileImageContract.address
  );
}

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
