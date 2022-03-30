require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vWWU1QeONOhGKznNwQzjCwN1P9h4XDC5",
      accounts: [
        "1cdecc74a18ab88eef3d78a36d45a4764cdf07a3f00913268f3b79f83decadcb",
      ],
    },
  },
};
