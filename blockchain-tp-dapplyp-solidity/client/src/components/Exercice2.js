import React from 'react';

function Exercice2() {
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            color: '#2c3e50',
            borderBottom: '2px solid #3498db',
            paddingBottom: '10px'
        },
        infoCard: {
            background: '#f8f9fa',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        functionGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
        },
        functionCard: {
            background: 'white',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        button: {
            background: '#3498db',
            color: 'white',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'background-color 0.3s',
            ':hover': {
                background: '#2980b9'
            }
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Exercice 2 - Contrats Simples</h1>

            <div style={styles.infoCard}>
                <h2>Informations Contrat</h2>
                <p><strong>Adresse du contrat :</strong> 0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</p>
                <p><strong>Balance :</strong> 0.5 ETH</p>
                <p><strong>Propriétaire :</strong> 0x4eA47...25569Ea</p>
            </div>

            <div style={styles.functionGrid}>
                <div style={styles.functionCard}>
                    <h3>Déployer Contrat Simple</h3>
                    <p>Crée une nouvelle instance de contrat basique</p>
                    <button style={styles.button}>Déployer</button>
                </div>

                <div style={styles.functionCard}>
                    <h3>Récupérer Données</h3>
                    <p>Lit les données stockées dans le contrat</p>
                    <button style={styles.button}>Lire Contrat</button>
                </div>
            </div>
        </div>
    );
}

export default Exercice2;