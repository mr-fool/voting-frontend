import React, { Component } from "react";
import "./App.css";
import contractData from "./voting";
import getWeb3 from "./web3";
import Web3 from "web3";

class App extends Component {
  state = {
     players: [],
     normie: 0,
     robot: 0
  };
  async componentDidMount() {
    //console.log(contractData);

    //Metamask address
    const  web3  = await getWeb3;
    //console.log(web3);
    
    const voting = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );
    //console.log(voting);
  }
  render() {
    return (
      <div className = "container" >
        </div>
    );
  }
}


export default App;
