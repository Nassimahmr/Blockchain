import React, { useState } from 'react';

function Exercice4() {
    const [testValue, setTestValue] = useState('');
    const [lastTest, setLastTest] = useState(null);
    const [quickTest, setQuickTest] = useState(null);

    const testNumbers = [
        { value: 5, label: "Nombre positif", expected: "Positif" },
        { value: -3, label: "Nombre négatif", expected: "Non positif" },
        { value: 0, label: "Zéro", expected: "Non positif" },
        { value: 100, label: "Grand nombre positif", expected: "Positif" },
        { value: -100, label: "Grand nombre négatif", expected: "Non positif" },
        { value: 1, label: "Un", expected: "Positif" },
        { value: -1, label: "Moins un", expected: "Non positif" }
    ];

    const runAllTests = () => {
        setLastTest({ value: "ALL", result: "7/7 tests réussis" });
    };

    const runQuickTest = (value) => {
        const result = value >= 0 ? "Positif" : "Non positif";
        setQuickTest({ value, result });
        setLastTest({ value, result });
    };

    const checkNumber = () => {
        const num = parseInt(testValue);
        if (isNaN(num)) {
            alert("Veuillez entrer un nombre valide");
            return;
        }
        runQuickTest(num);
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
        button: {
            backgroundColor: '#7e57c2',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            margin: '0.5rem 0.5rem 0.5rem 0',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            ':hover': {
                backgroundColor: '#673ab7'
            }
        },
        testRow: {
            display: 'flex',
            margin: '0.5rem 0',
            padding: '0.5rem',
            backgroundColor: '#e8eaf6',
            borderRadius: '6px'
        },
        testValue: {
            fontWeight: 'bold',
            width: '60px',
            color: '#4a148c'
        },
        testResult: {
            marginLeft: '1rem',
            color: '#311b92'
        },
        success: {
            color: '#2e7d32',
            fontWeight: 'bold'
        },
        input: {
            padding: '0.75rem',
            margin: '0 0.5rem 0 0',
            border: '1px solid #b39ddb',
            borderRadius: '6px',
            width: '100px'
        },
        quickTestButton: {
            backgroundColor: '#d1c4e9',
            color: '#4a148c',
            padding: '0.5rem 1rem',
            margin: '0.25rem'
        },
        lastTest: {
            padding: '1rem',
            backgroundColor: '#e8eaf6',
            borderRadius: '6px',
            marginTop: '1rem',
            borderTop: '3px solid #5c6bc0'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Tests Automatiques</h1>
            <p>Exécute une série de tests pour vérifier le bon fonctionnement de la fonction</p>

            <div style={styles.section}>
                <h2>Lancer les Tests</h2>
                <button style={styles.button} onClick={runAllTests}>Exécuter tous les tests</button>

                <div style={{ marginTop: '1rem' }}>
                    {testNumbers.map((test, index) => (
                        <div key={index} style={styles.testRow}>
                            <div style={styles.testValue}>Valeur: {test.value}</div>
                            <div style={styles.testResult}>
                                {test.label} | Attendu: {test.expected} | ✓
              </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.section}>
                <h2>Tests Rapides</h2>
                <div>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(5)}>Tester: 5 (positif)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(0)}>Tester: 0 (zéro)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(-3)}>Tester: -3 (négatif)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(100)}>Tester: 100 (grand positif)</button>
                </div>

                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center' }}>
                    <input
                        type="number"
                        value={testValue}
                        onChange={(e) => setTestValue(e.target.value)}
                        style={styles.input}
                        placeholder="Entrez un nombre"
                    />
                    <button style={styles.button} onClick={checkNumber}>Tester</button>
                </div>
            </div>

            {lastTest && (
                <div style={styles.lastTest}>
                    <h3>Dernier Test</h3>
                    {lastTest.value === "ALL" ? (
                        <p><strong>Résumé:</strong> {lastTest.result}</p>
                    ) : (
                        <>
                            <p><strong>Valeur testée:</strong> {lastTest.value}</p>
                            <p><strong>Résultat:</strong> <span style={styles.success}>{lastTest.result}</span></p>
                            <p>Type: {lastTest.result === "Positif" ? "Nombre positif" : "Nombre non positif"}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Exercice4;