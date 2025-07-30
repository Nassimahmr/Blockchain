import React, { useState } from 'react';

function Exercice3() {
  const [message, setMessage] = useState("test Message");
  const [chain1, setChain1] = useState("test");
  const [chain2, setChain2] = useState("Message");
  const [concatenated, setConcatenated] = useState("");
  const [comparison, setComparison] = useState("");

  const handleConcat = () => {
    setConcatenated(`${chain1} ${chain2} ${chain1} ${chain2}`);
  };

  const handleCompare = () => {
    setComparison(chain1 === chain2 ? "Identiques" : "Différentes");
  };

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
      backgroundColor: '#f9f5ff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(94, 53, 177, 0.1)'
    },
    header: {
      color: '#6a1b9a',
      borderBottom: '2px solid #9c27b0',
      paddingBottom: '0.75rem',
      marginBottom: '1.5rem',
      fontSize: '1.8rem'
    },
    section: {
      backgroundColor: '#ede7f6',
      padding: '1.25rem',
      borderRadius: '10px',
      margin: '1.5rem 0',
      borderLeft: '4px solid #7e57c2'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '500',
      color: '#4a148c'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      margin: '0.5rem 0 1rem 0',
      border: '1px solid #b39ddb',
      borderRadius: '6px',
      fontSize: '1rem',
      ':focus': {
        outline: 'none',
        borderColor: '#7e57c2'
      }
    },
    button: {
      backgroundColor: '#7e57c2',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '6px',
      cursor: 'pointer',
      marginRight: '1rem',
      marginTop: '0.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      ':hover': {
        backgroundColor: '#673ab7'
      }
    },
    result: {
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: '#e8eaf6',
      borderRadius: '6px',
      color: '#311b92',
      fontFamily: 'monospace'
    },
    blockchainInfo: {
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#e8eaf6',
      borderRadius: '6px',
      borderTop: '3px solid #5c6bc0'
    },
    address: {
      fontFamily: 'monospace',
      backgroundColor: '#d1c4e9',
      padding: '0.2rem 0.4rem',
      borderRadius: '4px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      margin: '1rem 0'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Exercice 3 - Gestion des Chaînes</h1>

      <div style={styles.section}>
        <h2>Message d'État</h2>
        <p><strong>Message actuel:</strong> {message}</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button}>Modifier le Message</button>
      </div>

      <div style={styles.section}>
        <h2>Concaténation</h2>
        <div style={styles.grid}>
          <div>
            <label style={styles.label}>Chaîne 1</label>
            <input
              type="text"
              value={chain1}
              onChange={(e) => setChain1(e.target.value)}
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>Chaîne 2</label>
            <input
              type="text"
              value={chain2}
              onChange={(e) => setChain2(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>
        
        <div>
          <button style={styles.button} onClick={handleConcat}>Concaténer</button>
          <button style={styles.button} onClick={handleCompare}>Comparer</button>
        </div>

        {concatenated && (
          <div style={styles.result}>
            Concaténation: "{concatenated}"
          </div>
        )}

        {comparison && (
          <div style={styles.result}>
            Comparaison: Les chaînes sont {comparison}
          </div>
        )}
      </div>

      <div style={styles.blockchainInfo}>
        <h3>Informations Blockchain</h3>
        <p><strong>Dernier bloc :</strong> Chargement...</p>
        <p><strong>Gas Limit :</strong> Chargement...</p>
        <p><strong>Timestamp :</strong> Chargement...</p>
        <p><strong>Compte connecté :</strong></p>
        <p style={styles.address}>0x4eA47d9808A6DCfE3F0dd302cb2E5E38e25565Ea</p>
        <p><strong>Solde :</strong> 99.9665 ETH</p>
      </div>

      <button style={{...styles.button, marginTop: '2rem'}}>
        Retour au Sommaire
      </button>
    </div>
  );
}

export default Exercice3;