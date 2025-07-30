import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // Cas MetaMask
    web3 = new Web3(window.ethereum);
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        console.error("Accès refusé à MetaMask", error);
    }
} else {
    // Cas Ganache
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

export default web3;