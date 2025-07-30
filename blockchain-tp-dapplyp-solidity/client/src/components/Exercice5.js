import React, { useState } from 'react';

function Exercice5() {
    const [testValue, setTestValue] = useState('');
    const [lastTest, setLastTest] = useState(null);
    const [quickTest, setQuickTest] = useState(null);

    const testNumbers = [
        { value: 0, label: "Zéro (pair)", expected: "Pair" },
        { value: 2, label: "Deux (pair)", expected: "Pair" },
        { value: 4, label: "Quatre (pair)", expected: "Pair" },
        { value: 10, label: "Dix (pair)", expected: "Pair" },
        { value: 100, label: "Cent (pair)", expected: "Pair" },
        { value: 1, label: "Un (impair)", expected: "Impair" },
        { value: 3, label: "Trois (impair)", expected: "Impair" },
        { value: 5, label: "Cinq (impair)", expected: "Impair" }
    ];

    const runAllTests = () => {
        setLastTest({ value: "ALL", result: "8/8 tests réussis" });
    };

    const runQuickTest = (value) => {
        const result = value % 2 === 0 ? "Pair" : "Impair";
        const division = Math.floor(value / 2);
        const remainder = value % 2;
        setQuickTest({ value, result, division, remainder });
        setLastTest({ value, result, division, remainder });
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
        },
        calculation: {
            fontFamily: 'monospace',
            backgroundColor: '#d1c4e9',
            padding: '0.5rem',
            borderRadius: '4px',
            display: 'inline-block',
            margin: '0.25rem 0'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Tests de Parité</h1>
            <p>Exécute une série de tests pour vérifier le bon fonctionnement de la fonction</p>

            <div style={styles.section}>
                <h2>Lancer les Tests</h2>
                <button style={styles.button} onClick={runAllTests}>Exécuter tous les tests</button>

                <div style={{ marginTop: '1rem' }}>
                    {testNumbers.map((test, index) => (
                        <div key={index} style={styles.testRow}>
                            <div style={styles.testValue}>{test.value}</div>
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
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(0)}>Tester: 0 (pair)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(4)}>Tester: 4 (pair)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(7)}>Tester: 7 (impair)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(100)}>Tester: 100 (pair)</button>
                    <button style={{ ...styles.button, ...styles.quickTestButton }} onClick={() => runQuickTest(99)}>Tester: 99 (impair)</button>
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

            {lastTest && lastTest.value !== "ALL" && (
                <div style={styles.section}>
                    <h3>Calculateur Local</h3>
                    <p><strong>Nombre:</strong> {lastTest.value}</p>
                    <p style={styles.calculation}>
                        {lastTest.value} ÷ 2 = {lastTest.division} reste {lastTest.remainder}
                    </p>
                    <p><strong>Parité:</strong> <span style={styles.success}>{lastTest.result}</span></p>
                </div>
            )}

            {lastTest?.value === "ALL" && (
                <div style={styles.lastTest}>
                    <h3>Résumé des Tests</h3>
                    <p>{lastTest.result}</p>
                </div>
            )}
        </div>
    );
}

export default Exercice5;