require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.WAKKET_PRIVATE_KEY]
    }
  }
};
