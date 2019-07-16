import JCoin from "./contracts/JCoin.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [JCoin],
  events: {
    JCoin: ["Transfer"],
  },
  polls: {
    accounts: 30000,
  },
};

export default options;
