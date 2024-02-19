import { ethers } from "hardhat";

async function main() {
  const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
  const crowdfunding = await Crowdfunding.deploy();

  await crowdfunding.waitForDeployment();
  const receipt = await crowdfunding.deploymentTransaction()?.wait();

  console.log(
    `Crowdfunding contract deployed to ` + (await crowdfunding.getAddress())
  );

  console.log(`Gas used for deployment: ${receipt?.gasPrice.toString()}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
