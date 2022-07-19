const {networkConfig} = require('../helper-hardhat-config')
const {network} = require('hardhat')

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId;

    const ethUsdPriceFeedAddress = networkConfig[chainId]['ethUsdPriceFeed']

    // when going to use hardhat or localhost we want to use a mock
    const fundMe = deploy('FundMe', {
        from: deployer,
        args: [ethUsdPriceFeedAddress], // параметры в конструктор контракта, в нашем случае price feed address
        log: true
    });
}