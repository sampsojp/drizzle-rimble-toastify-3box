pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract JCoin is ERC20, ERC20Detailed {
    uint256 private initialSupply = 10000;

    constructor() ERC20Detailed("JCoin", "JPS", 2) public {
        _mint(msg.sender, initialSupply);
    }
}
