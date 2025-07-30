// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Addition {
    uint public nombre1 = 5;
    uint public nombre2 = 10;

    function addition1() public view returns(uint) {
        return nombre1 + nombre2;
    }

    function addition2(uint a, uint b) public pure returns(uint) {
        return a + b;
    }
}