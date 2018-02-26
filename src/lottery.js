import web3 from './web3';

const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "manager",
    "outputs": [{ "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "pickWinner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPlayers",
    "outputs": [{ "name": "", "type": "address[]" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "enter",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{ "name":"", "type":"uint256" }],
    "name": "players",
    "outputs": [{ "name":"", "type":"address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

const address = '0x19A504985d740330D9E6D72947428c6C7809594c';

// Local copy of the Lottery Contract existing on the Ethereum Blockchain
export default new web3.eth.Contract(abi, address);
