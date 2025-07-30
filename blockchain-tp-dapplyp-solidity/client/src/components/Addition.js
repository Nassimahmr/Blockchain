import React, { useState, useEffect } from 'react';
import web3 from '../utils/web3';
import Addition from '../contracts/Addition.json';

const AdditionComponent = () => {
    const [sum, setSum] = useState(0);
    const [account, setAccount] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Récupère le compte
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);

                // Initialise le contrat
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = Addition.networks[networkId];

                if (!deployedNetwork) {
                    throw new Error("Contrat non déployé sur ce réseau");
                }

                const contract = new web3.eth.Contract(
                    Addition.abi,
                    deployedNetwork.address
                );

                // Appel de la fonction
                const result = await contract.methods.addition1().call();
                setSum(result);
            } catch (error) {
                console.error("Erreur:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <div>Chargement...</div>;

    return (
        <div className="addition-container">
            <h2>Exercice 1: Addition</h2>
            <p>Compte connecté: {account}</p>
            <p>Résultat: {sum}</p>
        </div>
    );
};

export default AdditionComponent;