import React, { Component } from "react";
import "./App.css";
import contractData from "./voting";
import Web3 from "web3";
const web3 = new Web3(window.web3.currentProvider);

class App extends Component {
  state = {
     players: [],
     normie: 0,
     robot: 0
  };
  async componentDidMount() {
    console.log(contractData);
    const accounts = window.ethereum.enable();
    console.log(accounts);
    const voting = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );
  }
  render() {
    return (
      <div className = "container" >
        </div>
    );
  }
}


export default App;
