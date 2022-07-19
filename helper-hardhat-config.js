const networkConfig = {
    4: { // rinkeby chainId
        name: 'rinkeby',
        // адрес можно узнать тут: https://docs.chain.link/docs/ethereum-addresses/
        ethUsdPriceFeed: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e'
    },
    137: { // polygon chainId
        name: 'polygon',
        ethUsdPriceFeed: '0xF9680D99D6C9589e2a93a78A04A279e509205945'
    },
}

module.exports = {
    networkConfig,

}