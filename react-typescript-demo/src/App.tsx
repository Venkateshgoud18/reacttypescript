import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <h2>Welcome to React with TypeScript!</h2>
      <Greet name="Venkatesh" />
    </div>
  );
}

export default App;
