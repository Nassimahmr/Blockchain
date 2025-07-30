import React, { useState } from 'react';

function Exercice7() {
    const [optimized, setOptimized] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const optimizeContract = () => {
        setOptimized(true);
        setTimeout(() => {
            setShowDetails(true);
        }, 1000);
    };

    const resetDemo = () => {
        setOptimized(false);
        setShowDetails(false);
    };

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            color: '#8e44ad',
            borderBottom: '2px solid #8e44ad',
            paddingBottom: '10px',
            marginBottom: '20px'
        },
        card: {
            backgroundColor: '#f5eff9',
            border: '1px solid #8e44ad',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        },
        statRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0',
            borderBottom: '1px solid #eee'
        },
        statLabel: {
            fontWeight: 'bold',
            color: '#7f8c8d'
        },
        statValue: {
            fontWeight: 'bold',
            color: '#2c3e50'
        },
        improvedStat: {
            color: '#27ae60'
        },
        button: {
            backgroundColor: '#8e44ad',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
            marginTop: '20px',
            fontSize: '16px',
            transition: 'all 0.3s'
        },
        codeComparison: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
            gap: '20px'
        },
        codeBlock: {
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '8px',
            fontFamily: '"Courier New", monospace',
            fontSize: '14px',
            position: 'relative'
        },
        codeHeader: {
            marginTop: '0',
            color: '#8e44ad'
        },
        successMessage: {
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '20px',
            display: optimized ? 'block' : 'none'
        },
        optimizationDetails: {
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            display: showDetails ? 'block' : 'none'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Exercice 7 - Optimisation de Gas</h1>

            <div style={styles.card}>
                <h2>Analyse de consommation de gas</h2>

                <div style={styles.statRow}>
                    <span style={styles.statLabel}>Fonction de base :</span>
                    <span style={styles.statValue}>124,500 gas</span>
                </div>

                <div style={styles.statRow}>
                    <span style={styles.statLabel}>Version optimisée :</span>
                    <span style={{ ...styles.statValue, ...(optimized ? styles.improvedStat : {}) }}>
                        {optimized ? '89,200 gas' : 'Non calculé'}
                    </span>
                </div>

                <div style={styles.statRow}>
                    <span style={styles.statLabel}>Économie potentielle :</span>
                    <span style={styles.statValue}>
                        {optimized ? '28.4%' : '0%'}
                    </span>
                </div>

                {!optimized ? (
                    <button
                        style={styles.button}
                        onClick={optimizeContract}
                    >
                        Optimiser le contrat
                    </button>
                ) : (
                    <button
                        style={{ ...styles.button, backgroundColor: '#9b59b6' }}
                        onClick={resetDemo}
                    >
                        Réinitialiser
                    </button>
                )}

                <div style={styles.successMessage}>
                    ✓ Optimisation réussie ! Vous économisez 35,300 gas par transaction.
                </div>

                <div style={styles.codeComparison}>
                    <div style={styles.codeBlock}>
                        <h3 style={styles.codeHeader}>Avant optimisation</h3>
                        <pre>
                            {`function transfer(address to, uint amount) public {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount;
    balances[to] += amount;
    emit Transfer(msg.sender, to, amount);
}`}
                        </pre>
                    </div>

                    <div style={styles.codeBlock}>
                        <h3 style={styles.codeHeader}>Après optimisation</h3>
                        <pre>
                            {`function transfer(address to, uint amount) external {
    uint senderBalance = balances[msg.sender];
    require(senderBalance >= amount, "Insufficient balance");
    unchecked {
        balances[msg.sender] = senderBalance - amount;
        balances[to] += amount;
    }
    emit Transfer(msg.sender, to, amount);
}`}
                        </pre>
                    </div>
                </div>

                <div style={styles.optimizationDetails}>
                    <h3>Détails des optimisations :</h3>
                    <ul>
                        <li>Utilisation de <code>external</code> au lieu de <code>public</code></li>
                        <li>Cache des variables de stockage en mémoire</li>
                        <li>Bloc <code>unchecked</code> pour les opérations arithmétiques sûres</li>
                        <li>Message d'erreur personnalisé</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Exercice7;
