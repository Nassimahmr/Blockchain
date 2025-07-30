import React, { useState } from 'react';

function Exercice1() {
    const [nombre1, setNombre1] = useState(10);
    const [nombre2, setNombre2] = useState(20);
    const [result1, setResult1] = useState(null);
    const [result2, setResult2] = useState(null);

    const calculateSum1 = () => {
        setResult1(Number(nombre1) + Number(nombre2));
    };

    const calculateSum2 = (a, b) => {
        setResult2(Number(a) + Number(b));
    };

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f7fa',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        },
        header: {
            color: '#2c3e50',
            borderBottom: '2px solid #3498db',
            paddingBottom: '10px',
            marginBottom: '20px'
        },
        section: {
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            margin: '20px 0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        },
        inputGroup: {
            display: 'flex',
            gap: '10px',
            margin: '10px 0',
            alignItems: 'center'
        },
        input: {
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            flex: 1
        },
        button: {
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            ':hover': {
                backgroundColor: '#2980b9'
            }
        },
        functionCard: {
            backgroundColor: '#e8f4fc',
            borderLeft: '4px solid #3498db',
            padding: '15px',
            margin: '15px 0',
            borderRadius: '0 8px 8px 0'
        },
        result: {
            fontWeight: 'bold',
            color: '#27ae60',
            marginTop: '10px'
        },
        blockchainInfo: {
            backgroundColor: '#f0f7fd',
            borderLeft: '4px solid #2c3e50',
            padding: '15px',
            margin: '20px 0',
            borderRadius: '0 8px 8px 0'
        },
        address: {
            fontFamily: 'monospace',
            backgroundColor: '#eee',
            padding: '2px 5px',
            borderRadius: '3px'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Exercice 1 - Fonctions d'Addition</h1>

            <div style={styles.section}>
                <h2>Variables d'état</h2>
                <p>Nombre 1: {nombre1}</p>
                <p>Nombre 2: {nombre2}</p>

                <div style={styles.inputGroup}>
                    <input
                        type="number"
                        value={nombre1}
                        onChange={(e) => setNombre1(e.target.value)}
                        style={styles.input}
                    />
                    <button style={styles.button}>Modifier Nombre 1</button>
                </div>

                <div style={styles.inputGroup}>
                    <input
                        type="number"
                        value={nombre2}
                        onChange={(e) => setNombre2(e.target.value)}
                        style={styles.input}
                    />
                    <button style={styles.button}>Modifier Nombre 2</button>
                </div>
            </div>

            <div style={styles.blockchainInfo}>
                <h2>Informations Blockchain</h2>
                <p><strong>Dernier bloc :</strong> Chargement...</p>
                <p><strong>Gas Limit :</strong> Chargement...</p>
                <p><strong>Timestamp :</strong> Chargement...</p>
                <p><strong>Compte connecté :</strong></p>
                <p style={styles.address}>0x4eA47...25569Ea</p>
                <p><strong>Solde :</strong> 99.9665 ETH</p>
            </div>

            <div style={styles.section}>
                <div style={styles.functionCard}>
                    <h3>Addition10 - Fonction View</h3>
                    <p>Calcule la somme des variables d'état nombre1 et nombre2</p>
                    <button
                        style={styles.button}
                        onClick={calculateSum1}
                    >
                        Calculer Addition1
                    </button>
                    {result1 !== null && (
                        <p style={styles.result}>Résultat: {result1}</p>
                    )}
                </div>

                <div style={styles.functionCard}>
                    <h3>Addition20 - Fonction Pure</h3>
                    <p>Calcule la somme de deux paramètres passés en entrée</p>
                    <div style={styles.inputGroup}>
                        <input
                            type="number"
                            placeholder="Entrez un nombre"
                            style={styles.input}
                            id="pureInput1"
                        />
                        <input
                            type="number"
                            placeholder="Entrez un nombre"
                            style={styles.input}
                            id="pureInput2"
                        />
                    </div>
                    <button
                        style={styles.button}
                        onClick={() => {
                            const a = document.getElementById('pureInput1').value;
                            const b = document.getElementById('pureInput2').value;
                            calculateSum2(a, b);
                        }}
                    >
                        Calculer Addition2
                    </button>
                    {result2 !== null && (
                        <p style={styles.result}>Résultat: {result2}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Exercice1;