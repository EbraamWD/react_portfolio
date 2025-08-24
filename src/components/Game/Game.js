import React, { useState, useEffect, useMemo } from 'react';
import './Game.css';

const Game = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Smartphone', basePrice: 799, inventory: 42, demand: 0.7, finalPrice: 799 },
    { id: 2, name: 'Wireless Headphones', basePrice: 159, inventory: 128, demand: 0.4, finalPrice: 159 },
    { id: 3, name: 'Smartwatch', basePrice: 249, inventory: 17, demand: 0.9, finalPrice: 249 },
    { id: 4, name: 'Tablet', basePrice: 429, inventory: 23, demand: 0.6, finalPrice: 429 }
  ]);
  
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [trafficLevel, setTrafficLevel] = useState('medium');
  const [competitorPrice, setCompetitorPrice] = useState(0);
  const [strategy, setStrategy] = useState('balanced');
  const [simulationSpeed, setSimulationSpeed] = useState(2000);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [conversionRate, setConversionRate] = useState(3.2);

  // Simulate changes in time, demand and inventory
  useEffect(() => {
    let interval;
    if (isSimulationRunning) {
      interval = setInterval(() => {
        // Simulate random fluctuations
        setProducts(prev => prev.map(product => {
          const demandChange = (Math.random() - 0.5) * 0.1;
          const inventoryChange = Math.floor(Math.random() * 5) * (Math.random() > 0.7 ? -1 : 1);
          
          let newDemand = Math.max(0.1, Math.min(0.99, product.demand + demandChange));
          let newInventory = Math.max(0, product.inventory + inventoryChange);
          
          // Calculate new price based on strategy
          let newPrice = calculateDynamicPrice(product, newDemand, newInventory);
          
          // Simulate sales based on price and demand
          const salesProbability = 0.02 * (1 - (newPrice / product.basePrice) * 0.5) * newDemand;
          if (Math.random() < salesProbability && newInventory > 0) {
            newInventory -= 1;
            setTotalRevenue(prev => prev + newPrice);
          }
          
          return {
            ...product,
            demand: newDemand,
            inventory: newInventory,
            finalPrice: newPrice
          };
        }));
        
        // Simulate time of day change
        const hours = ['morning', 'afternoon', 'evening', 'night'];
        setTimeOfDay(prev => {
          const currentIndex = hours.indexOf(prev);
          return hours[(currentIndex + 1) % hours.length];
        });
        
        // Simulate traffic change
        const trafficLevels = ['low', 'medium', 'high'];
        setTrafficLevel(prev => {
          if (Math.random() > 0.7) {
            return trafficLevels[Math.floor(Math.random() * trafficLevels.length)];
          }
          return prev;
        });
        
        // Update conversion rate based on pricing strategy
        setConversionRate(prev => {
          const avgPriceRatio = products.reduce((sum, p) => sum + (p.finalPrice / p.basePrice), 0) / products.length;
          return Math.max(1, Math.min(5, prev + (Math.random() - 0.5) * 0.5 + (1 - avgPriceRatio) * 0.3));
        });
        
      }, simulationSpeed);
    }
    
    return () => clearInterval(interval);
  }, [isSimulationRunning, simulationSpeed, strategy, products]);

  // Calculate dynamic price based on various factors
  const calculateDynamicPrice = (product, demand, inventory) => {
    let priceModifier = 1;
    
    // Modify based on selected strategy
    switch(strategy) {
      case 'revenue':
        priceModifier = 1 + (demand - 0.5) * 0.4;
        break;
      case 'market-share':
        priceModifier = 1 - (0.5 - demand) * 0.3;
        break;
      case 'clearance':
        priceModifier = inventory > 10 ? 1 : (0.7 + (10 - inventory) * 0.03);
        break;
      default: // 'balanced'
        priceModifier = 1 + (demand - 0.5) * 0.2;
    }
    
    // Modify based on time of day
    switch(timeOfDay) {
      case 'evening':
        priceModifier *= 1.05;
        break;
      case 'night':
        priceModifier *= 0.95;
        break;
      default:
        // No modification for morning and afternoon
    }
    
    // Modify based on traffic
    switch(trafficLevel) {
      case 'high':
        priceModifier *= 1.08;
        break;
      case 'low':
        priceModifier *= 0.95;
        break;
      default:
        // No modification for medium traffic
    }
    
    // Modify based on competitor price (if set)
    if (competitorPrice > 0) {
      const competitorRatio = competitorPrice / product.basePrice;
      if (competitorRatio < 0.9) priceModifier *= 0.97;
      if (competitorRatio > 1.1) priceModifier *= 1.03;
    }
    
    // Modify based on inventory
    if (inventory < 5) {
      priceModifier *= 1.15; // Low inventory, increase price
    } else if (inventory > 100) {
      priceModifier *= 0.92; // High inventory, decrease price
    }
    
    // Apply modifier and round
    const newPrice = Math.round(product.basePrice * priceModifier);
    
    // Keep price in a reasonable range
    return Math.max(product.basePrice * 0.5, Math.min(product.basePrice * 1.8, newPrice));
  };

  const toggleSimulation = () => {
    setIsSimulationRunning(!isSimulationRunning);
  };

  const resetSimulation = () => {
    setIsSimulationRunning(false);
    setProducts([
      { id: 1, name: 'Premium Smartphone', basePrice: 799, inventory: 42, demand: 0.7, finalPrice: 799 },
      { id: 2, name: 'Wireless Headphones', basePrice: 159, inventory: 128, demand: 0.4, finalPrice: 159 },
      { id: 3, name: 'Smartwatch', basePrice: 249, inventory: 17, demand: 0.9, finalPrice: 249 },
      { id: 4, name: 'Tablet', basePrice: 429, inventory: 23, demand: 0.6, finalPrice: 429 }
    ]);
    setTimeOfDay('morning');
    setTrafficLevel('medium');
    setTotalRevenue(0);
    setConversionRate(3.2);
  };

  return (
    <div className="dynamic-pricing-demo">
      <header>
        <h1>Dynamic Pricing Intelligence</h1>
        <p>Dynamic pricing system to maximize e-commerce profits</p>
      </header>
      <div className="explanation">
        <h2>How Dynamic Pricing Works</h2>
        <p>
          This system simulates a dynamic pricing algorithm that modifies prices in real time based on:
        </p>
        <ul>
          <li><strong>Product demand</strong> - Prices increase when demand is high</li>
          <li><strong>Inventory level</strong> - Prices increase when stock is low</li>
          <li><strong>Time of day</strong> - Prices vary based on purchasing patterns</li>
          <li><strong>Website traffic</strong> - Higher prices when there's more traffic</li>
          <li><strong>Competitor prices</strong> - Adjustment to remain competitive</li>
          <li><strong>Business strategy</strong> - Different objectives (revenue, market share, etc.)</li>
        </ul>
        <p>
          This approach can increase revenue by 5-15% compared to static pricing.
        </p>
      </div>
      <br />
      <div className="controls-panel">
        <div className="control-group">
          <label>Pricing Strategy:</label>
          <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
            <option value="balanced">Balanced</option>
            <option value="revenue">Revenue Maximization</option>
            <option value="market-share">Market Share</option>
            <option value="clearance">Clearance</option>
          </select>
        </div>
        
        <div className="control-group">
          <label>Competitor Reference Price:</label>
          <input 
            type="number" 
            value={competitorPrice} 
            onChange={(e) => setCompetitorPrice(Number(e.target.value))}
            placeholder="0 to disable"
          />
        </div>
        
        <div className="control-group">
          <label>Simulation Speed:</label>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="500"
            value={simulationSpeed} 
            onChange={(e) => setSimulationSpeed(Number(e.target.value))}
          />
          <span>{simulationSpeed}ms</span>
        </div>
        
        <div className="buttons">
          <button onClick={toggleSimulation} className={isSimulationRunning ? 'stop' : 'start'}>
            {isSimulationRunning ? 'Stop Simulation' : 'Start Simulation'}
          </button>
          <button onClick={resetSimulation} className="reset">Reset</button>
        </div>
      </div>
      
      <div className="metrics">
        <div className="metric-card">
          <h3>Revenue</h3>
          <p className="value">€{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="metric-card">
          <h3>Time of Day</h3>
          <p className="value">{timeOfDay}</p>
        </div>
        <div className="metric-card">
          <h3>Traffic</h3>
          <p className="value">{trafficLevel}</p>
        </div>
        <div className="metric-card">
          <h3>Conversion Rate</h3>
          <p className="value">{conversionRate.toFixed(1)}%</p>
        </div>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <div className="price-info">
              <div className="base-price">Base Price: €{product.basePrice}</div>
              <div className="final-price">Dynamic Price: €{product.finalPrice}</div>
              <div className={`price-difference ${product.finalPrice >= product.basePrice ? 'positive' : 'negative'}`}>
                {product.finalPrice >= product.basePrice ? '+' : ''}
                {Math.round((product.finalPrice / product.basePrice - 1) * 100)}%
              </div>
            </div>
            <div className="inventory-bar">
              <div 
                className="inventory-fill" 
                style={{ width: `${(product.inventory / 150) * 100}%` }}
              ></div>
              <span>Inventory: {product.inventory} units</span>
            </div>
            <div className="demand-indicator">
              <div className="demand-label">Demand:</div>
              <div className="demand-bar">
                <div 
                  className="demand-fill" 
                  style={{ width: `${product.demand * 100}%` }}
                ></div>
              </div>
              <div className="demand-value">{(product.demand * 100).toFixed(0)}%</div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Game;