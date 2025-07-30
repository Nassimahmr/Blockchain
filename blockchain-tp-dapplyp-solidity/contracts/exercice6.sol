// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GestionTableau {
    uint[] public nombres;
    
    constructor() {
        nombres = [10, 20, 30];
    }
    
    function ajouterNombre(uint _nombre) public {
        nombres.push(_nombre);
    }
    
    function getElement(uint _index) public view returns(uint) {
        require(_index < nombres.length, "Index invalide");
        return nombres[_index];
    }
    
    function afficheTableau() public view returns(uint[] memory) {
        return nombres;
    }
    
    function calculerSomme() public view returns(uint) {
        uint somme = 0;
        for(uint i = 0; i < nombres.length; i++) {
            somme += nombres[i];
        }
        return somme;
    }
}