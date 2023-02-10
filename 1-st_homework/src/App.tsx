import React from 'react';
import './App.sass';
import Clicker from './components/clicker/Clicker';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Clicker />
    </div>
  );
}

export default App;
