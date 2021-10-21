import './App.css'
import QuizzList from './components/QuizzList';
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
    
  return (
    <div className="App">
      <header className="App-header">
        <div>logo</div>
        <h1>Gift-ed</h1>
        <nav>Menu</nav>
      </header>
      <main>
        <QuizzList />
      </main>
    </div>
  );
}

export default App;
