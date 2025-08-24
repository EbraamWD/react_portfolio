import React, { useState, useEffect } from 'react';

const ExplainingGame = () => {
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [strategy, setStrategy] = useState('balanced');
  const [simulationSpeed, setSimulationSpeed] = useState(2000);
  const [competitorPrice, setCompetitorPrice] = useState(0);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Elementi Interattivi nel Sistema di Pricing Dinamico</h1>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2>1. Controllo della Strategia di Pricing</h2>
        <p>Gli utenti possono <strong>selezionare diverse strategie</strong> che influenzano direttamente come vengono calcolati i prezzi:</p>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '15px 0' }}>
          <button 
            style={{ 
              padding: '10px 15px', 
              backgroundColor: strategy === 'balanced' ? '#4CAF50' : '#e0e0e0',
              color: strategy === 'balanced' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => setStrategy('balanced')}
          >
            Strategia Bilanciata
          </button>
          
          <button 
            style={{ 
              padding: '10px 15px', 
              backgroundColor: strategy === 'revenue' ? '#4CAF50' : '#e0e0e0',
              color: strategy === 'revenue' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => setStrategy('revenue')}
          >
            Massimizzazione Ricavi
          </button>
          
          <button 
            style={{ 
              padding: '10px 15px', 
              backgroundColor: strategy === 'market-share' ? '#4CAF50' : '#e0e0e0',
              color: strategy === 'market-share' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => setStrategy('market-share')}
          >
            Quota di Mercato
          </button>
          
          <button 
            style={{ 
              padding: '10px 15px', 
              backgroundColor: strategy === 'clearance' ? '#4CAF50' : '#e0e0e0',
              color: strategy === 'clearance' ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => setStrategy('clearance')}
          >
            Svuota Scorte
          </button>
        </div>
        
        <p>Ogni strategia modifica l'algoritmo di pricing in modo diverso, influenzando direttamente i prezzi visualizzati.</p>
      </div>
      
      <div style={{ backgroundColor: '#f0f7ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2>2. Impostazione Prezzo Competitor</h2>
        <p>Gli utenti possono <strong>inserire manualmente un prezzo competitor</strong> per vedere come il sistema reagisce:</p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0' }}>
          <label>Prezzo Competitor:</label>
          <input 
            type="number" 
            value={competitorPrice} 
            onChange={(e) => setCompetitorPrice(Number(e.target.value))}
            style={{ padding: '8px', width: '100px', border: '1px solid #ddd', borderRadius: '4px' }}
            placeholder="0 per disattivare"
          />
          <span>€</span>
        </div>
        
        <p>Il sistema regolerà automaticamente i prezzi in base al valore inserito, simulando una risposta di mercato reale.</p>
      </div>
      
      <div style={{ backgroundColor: '#fff4e6', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2>3. Controllo della Velocità di Simulazione</h2>
        <p>Gli utenti possono <strong>regolare la velocità</strong> con cui la simulazione aggiorna i prezzi:</p>
        
        <div style={{ margin: '15px 0' }}>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="500"
            value={simulationSpeed} 
            onChange={(e) => setSimulationSpeed(Number(e.target.value))}
            style={{ width: '100%', maxWidth: '300px' }}
          />
          <div>Velocità attuale: {simulationSpeed}ms</div>
        </div>
        
        <p>Questo permette di osservare come i cambiamenti avvengono in tempo reale o di rallentare il processo per analizzarlo meglio.</p>
      </div>
      
      <div style={{ backgroundColor: '#edf7ed', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2>4. Avvio/Arresto della Simulazione</h2>
        <p>Gli utenti possono <strong>controllare quando la simulazione è attiva</strong>:</p>
        
        <button 
          style={{ 
            padding: '12px 24px', 
            backgroundColor: isSimulationRunning ? '#f44336' : '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            margin: '15px 0'
          }}
          onClick={() => setIsSimulationRunning(!isSimulationRunning)}
        >
          {isSimulationRunning ? 'Stop Simulazione' : 'Avvia Simulazione'}
        </button>
        
        <p>Questo permette di mettere in pausa il sistema per analizzare i dati correnti o vedere gli effetti immediati dei cambiamenti apportati.</p>
      </div>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
        <h2>5. Reset Completo del Sistema</h2>
        <p>Gli utenti possono <strong>resettare l'intera simulazione</strong> per ricominciare da capo:</p>
        
        <button 
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#ff9800', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            margin: '15px 0'
          }}
          onClick={() => {
            setIsSimulationRunning(false);
            setStrategy('balanced');
            setSimulationSpeed(2000);
            setCompetitorPrice(0);
          }}
        >
          Reset Simulazione
        </button>
        
        <p>Questo ripristina tutti i parametri ai valori iniziali, permettendo di testare scenari diversi partendo dalla stessa condizione iniziale.</p>
      </div>
      
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
        <h2>6. Visualizzazione Dati in Tempo Reale</h2>
        <p>Anche se non è un controllo diretto, l'interfaccia mostra <strong>dati che si aggiornano in tempo reale</strong> in risposta alle azioni dell'utente:</p>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', margin: '15px 0' }}>
          <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', minWidth: '150px' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>Strategia Attiva</h3>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{strategy}</p>
          </div>
          
          <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', minWidth: '150px' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>Stato Simulazione</h3>
            <p style={{ margin: 0, fontWeight: 'bold', color: isSimulationRunning ? '#4CAF50' : '#f44336' }}>
              {isSimulationRunning ? 'ATTIVA' : 'INATTIVA'}
            </p>
          </div>
          
          <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', minWidth: '150px' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>Prezzo Competitor</h3>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              {competitorPrice > 0 ? `${competitorPrice} €` : 'Non impostato'}
            </p>
          </div>
        </div>
        
        <p>Questi indicatori forniscono un feedback immediato sulle azioni intraprese dall'utente.</p>
      </div>
    </div>
  );
};

export default ExplainingGame;