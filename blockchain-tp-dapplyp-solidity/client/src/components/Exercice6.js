import React, { useState } from 'react';

function Exercice6() {
    const [contractAddress, setContractAddress] = useState('');

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            color: '#8e44ad', // violet foncé
            borderBottom: '2px solid #8e44ad',
            paddingBottom: '10px'
        },
        interactionPanel: {
            backgroundColor: '#f8f1fa', // violet très pâle
            padding: '20px',
            borderRadius: '8px',
            margin: '20px 0'
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #8e44ad',
            borderRadius: '4px'
        },
        button: {
            backgroundColor: '#8e44ad',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
        },
        resultArea: {
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '20px',
            border: '1px dashed #8e44ad'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Exercice 6 - Interactions</h1>

            <div style={styles.interactionPanel}>
                <h3>Interaction entre contrats</h3>
                <input
                    type="text"
                    placeholder="Adresse du contrat à interagir"
                    style={styles.input}
                    value={contractAddress}
                    onChange={(e) => setContractAddress(e.target.value)}
                />

                <div>
                    <button style={styles.button}>Lire données</button>
                    <button style={styles.button}>Exécuter fonction</button>
                </div>

                <div style={styles.resultArea}>
                    <h4>Résultat de l'interaction :</h4>
                    <p>En attente d'action...</p>
                </div>
            </div>
        </div>
    );
}

export default Exercice6;
