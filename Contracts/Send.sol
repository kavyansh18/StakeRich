// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleEtherSender {
    
    struct Transaction {
        address sender;   // Sender's address
        uint256 amount;   // Amount sent in wei
    }

    
    Transaction[] public transactions;

    
    function sendEther() external payable {
        require(msg.value > 0, "Must send more than 0 ETH");

        
        transactions.push(Transaction({
            sender: msg.sender,
            amount: msg.value
        }));
    }

    
    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions; // Return the array of transactions
    }
}
