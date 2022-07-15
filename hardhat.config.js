require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require('hardhat-gas-reporter')

/** @type import('hardhat/config').HardhatUserConfig */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

//Пример добавления своей задачи
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  defaultNetwork: "localhost",
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 4 // можно посмотреть на chainlist.org
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt',
    noColors: true, // чтобы избежать проблем при записи в файлб
    currency: 'USD',
    coinmarketcap: COINMARKETCAP_API_KEY, //api key coinmarketcap.com
    token: 'MATIC'
  }
};
