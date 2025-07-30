// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Forme {
    uint public x;
    uint public y;
    
    constructor(uint _x, uint _y) {
        x = _x;
        y = _y;
    }
    
    function deplacerForme(uint _dx, uint _dy) public {
        x += _dx;
        y += _dy;
    }
    
    function afficheXY() public view returns(uint, uint) {
        return (x, y);
    }
    
    function afficheInfos() public virtual pure returns(string memory) {
        return "Je suis une forme";
    }
    
    function surface() public virtual view returns(uint); // Changé de pure à view
}

contract Rectangle is Forme {
    uint public lo;
    uint public la;
    
    constructor(uint _x, uint _y, uint _lo, uint _la) Forme(_x, _y) {
        lo = _lo;
        la = _la;
    }
    
    function surface() public override view returns(uint) { // Changé de pure à view
        return lo * la;
    }
    
    function afficheInfos() public override pure returns(string memory) {
        return "Je suis Rectangle";
    }
    
    function afficheLoLa() public view returns(uint, uint) {
        return (lo, la);
    }
}