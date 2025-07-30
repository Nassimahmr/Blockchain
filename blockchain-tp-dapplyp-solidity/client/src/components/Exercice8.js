import React, { useState } from 'react';

function Exercice8() {
    const [projectName, setProjectName] = useState('MonProjetBlockchain');

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center'
        },
        header: {
            color: '#8e44ad',
            borderBottom: '2px solid #8e44ad',
            paddingBottom: '10px',
            marginBottom: '30px'
        },
        projectCard: {
            backgroundColor: '#f8f0ff',
            border: '2px dashed #8e44ad',
            borderRadius: '8px',
            padding: '30px',
            margin: '20px auto',
            maxWidth: '600px'
        },
        input: {
            width: '100%',
            padding: '12px',
            margin: '20px 0',
            border: '1px solid #8e44ad',
            borderRadius: '4px',
            fontSize: '16px'
        },
        deployButton: {
            backgroundColor: '#8e44ad',
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '10px',
            ':hover': {
                backgroundColor: '#9b59b6'
            }
        },
        featureList: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '30px 0'
        },
        featureItem: {
            backgroundColor: 'white',
            border: '1px solid #8e44ad',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            width: '200px'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Exercice 8 - Projet Final</h1>

            <div style={styles.projectCard}>
                <h2>Déployer votre projet</h2>
                <input
                    type="text"
                    placeholder="Nom de votre projet"
                    style={styles.input}
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />

                <button style={styles.deployButton}>Déployer le contrat</button>
                <button style={{ ...styles.deployButton, backgroundColor: '#27ae60' }}>Tester l'application</button>
            </div>

            <div style={styles.featureList}>
                <div style={styles.featureItem}>
                    <h3>Fonctionnalité 1</h3>
                    <p>Gestion des utilisateurs</p>
                </div>
                <div style={styles.featureItem}>
                    <h3>Fonctionnalité 2</h3>
                    <p>Transactions sécurisées</p>
                </div>
                <div style={styles.featureItem}>
                    <h3>Fonctionnalité 3</h3>
                    <p>Historique des opérations</p>
                </div>
            </div>
        </div>
    );
}

export default Exercice8;