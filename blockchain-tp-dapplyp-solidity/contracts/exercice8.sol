// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payment {
    address public recipient;
    
    constructor(address _recipient) {
        recipient = _recipient;
    }
    
    receive() external payable {}
    
    function receivePayment() external payable {
        require(msg.value > 0, "Montant doit etre > 0");
    }
    
    function withdraw() external {
        require(msg.sender == recipient, "Seul le destinataire peut retirer");
        payable(recipient).transfer(address(this).balance);
    }
}