// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract stake {
    
    mapping(address => uint256) public stakedBalances;
    
    
    uint256 public rewardAmount = 0.01 ether;

    
    function stake() public payable {
        require(msg.value > 0, "Must send some ETH to stake");
        
        
        stakedBalances[msg.sender] += msg.value;
    }

   
    function withdraw() public {
        uint256 stakedAmount = stakedBalances[msg.sender];
        require(stakedAmount > 0, "No staked balance to withdraw");

        
        stakedBalances[msg.sender] = 0;

        
        payable(msg.sender).transfer(stakedAmount + rewardAmount);
    }

    
    function getStakedBalance(address user) public view returns (uint256) {
        return stakedBalances[user];
    }
}
