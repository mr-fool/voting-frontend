import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from "web3";

const contractAddress = 0xdfbf946546cac92e0cca7ad3d85697781873a014;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
