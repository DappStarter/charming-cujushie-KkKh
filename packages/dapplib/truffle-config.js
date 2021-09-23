require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain huge heavy process sure square'; 
let testAccounts = [
"0x8e403ee8fd8fa3bb9ed38704acce4f0eeb211f58ce02c8bab1eea45358c8dac8",
"0xcb9328e6d5c83f4de3e458bdbbfc08666952254f3e59086b08d87f66c0446b52",
"0xd9c422c89e0153edcd63202dda0817cc5044a01c56a8b5546582a2be6cad4770",
"0x6ef44588d6c213868a1e2de7dfc59cbfb9d5ad248db8a4ebc47f7daa7d98bcf9",
"0xa7e87d65b141c9348d0b3376486feb00778817043b374c9606e6b43e14d951fd",
"0x526da4370262b56670aab5d16702493bacac3048f71dd7b2f48c3f50add65ab5",
"0xec9859eae26a3c57a2d6b920ea86be63f81707c6430fd8e879966c5811028f02",
"0x3e1fb4cea144420e9bf0142fa099cec6d40200db07e46f7158dbb908bdcf0d22",
"0xf3dd6903c8e7c5367bff25392f33febe2114ee3cc482c95a49b7002f40332765",
"0xedbe7450fd9c7b8733e0275e3337da09ef11c8a42ff6d132a2cd728b364be64c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

