import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contractData from "./voting";
import Web3 from "web3";
const web3 = new Web3(window.web3.currentProvider);

class App extends Component {
  state = {
     web3: {}, 
     players: [],
     normie: int,
     robot: int
  };
  async componentDidMount() {
    console.log(contractData);
    const voting = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );
  }
}
  export default App;
