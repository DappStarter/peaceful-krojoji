require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember hour hunt fat surround spring'; 
let testAccounts = [
"0xe09264b03b76470eed7d5c827364ec3610f9580fc018a1e042ae8eb1171e690e",
"0x842e54dcd30eb93ffc6155cf035f571603c574f9e74608ff296dd86b99945662",
"0x695a969d3ac8ae3c02efdbbba18ce962a1c550c392e71cbddd06597eeb8dc87a",
"0x696b4c5b70ed7b071b9ed55a0279392ded243e95ef4e1eeed9b9badd3b356414",
"0x6b49c97851c7d59786ba6031f3f53bf27cedd9a230ea90d7642f4b99295a509b",
"0x5567248ac9b9aed10a1f3b71a039a05b1d984ba8e7678427760c50ad79500da7",
"0x02e6dff7a3826f013f6d2febd56cb187f0a9d93f279d0961115297b688b3ea05",
"0x5040321793a11fa727f7b693d9b822c35da514b9356f033f0ffed71831ab8bd6",
"0xa98a6309cb5282de533c7477e84536a573f82cb7ac13e47e57810d4deb469833",
"0x542ce86158bb063af481398c4aee32d9950769652780013a25f344221418c0e6"
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
            version: '^0.5.11'
        }
    }
};
