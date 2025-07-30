import React, { useState } from 'react';

// Importez tous vos exercices
import Exercice1 from './components/Exercice1';
import Exercice2 from './components/Exercice2';
import Exercice3 from './components/Exercice3';
import Exercice4 from './components/Exercice4';
import Exercice5 from './components/Exercice5';
import Exercice6 from './components/Exercice6';
import Exercice7 from './components/Exercice7';
import Exercice8 from './components/Exercice8';

function App() {
  const [activeExercise, setActiveExercise] = useState(1);

  const styles = {
    appContainer: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#2c3e50',
      padding: '20px',
      color: 'white'
    },
    sidebarTitle: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '1.2rem'
    },
    navButton: {
      display: 'block',
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      backgroundColor: '#34495e',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      ':hover': {
        backgroundColor: '#3498db'
      }
    },
    activeNavButton: {
      backgroundColor: '#3498db',
      fontWeight: 'bold'
    },
    contentArea: {
      flex: 1,
      padding: '30px',
      backgroundColor: '#f5f7fa'
    },
    header: {
      color: '#2c3e50',
      marginBottom: '30px',
      paddingBottom: '15px',
      borderBottom: '2px solid #3498db'
    }
  };

  const renderExercise = () => {
    switch (activeExercise) {
      case 1: return <Exercice1 />;
      case 2: return <Exercice2 />;
      case 3: return <Exercice3 />;
      case 4: return <Exercice4 />;
      case 5: return <Exercice5 />;
      case 6: return <Exercice6 />;
      case 7: return <Exercice7 />;
      case 8: return <Exercice8 />;
      default: return <Exercice1 />;
    }
  };

  return (
    <div style={styles.appContainer}>
      {/* Sidebar de navigation */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>TP Blockchain</h2>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((exerciseNum) => (
          <button
            key={exerciseNum}
            style={{
              ...styles.navButton,
              ...(activeExercise === exerciseNum ? styles.activeNavButton : {})
            }}
            onClick={() => setActiveExercise(exerciseNum)}
          >
            Exercice {exerciseNum}
          </button>
        ))}
      </div>

      {/* Zone de contenu principale */}
      <div style={styles.contentArea}>
        <h1 style={styles.header}>
          {activeExercise === 1 && "Introduction"}
          {activeExercise === 2 && "Contrats Simples"}
          {activeExercise === 3 && "Fonctions"}
          {activeExercise === 4 && "Gestion d'État"}
          {activeExercise === 5 && "Héritage"}
          {activeExercise === 6 && "Interactions"}
          {activeExercise === 7 && "Optimisation"}
          {activeExercise === 8 && "Projet Final"}
        </h1>

        {renderExercise()}
      </div>
    </div>
  );
}

export default App;