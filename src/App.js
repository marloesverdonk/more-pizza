import React from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Pizza Explorer</h1>
      </header>
      <main>
        <PizzaListContainer/>
      </main>
    </div>
  );
}

export default App;
