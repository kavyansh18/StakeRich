// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract TokenSwap {
    IERC20 public tokenA;
    IERC20 public tokenB;

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

     
    function swapAForB(uint256 amount) external {
        require(tokenA.transferFrom(msg.sender, address(this), amount), "Transfer of TokenA failed");
        require(tokenB.transfer(msg.sender, amount), "Transfer of TokenB failed");
    }

    
    function swapBForA(uint256 amount) external {
        require(tokenB.transferFrom(msg.sender, address(this), amount), "Transfer of TokenB failed");
        require(tokenA.transfer(msg.sender, amount), "Transfer of TokenA failed");
    }
}
