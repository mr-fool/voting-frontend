import React, { Component } from "react";
import "./App.css";
import contractData from "./voting";
import getWeb3 from "./web3";
import ImageExampleImage from './ImageExampleImage';
import "./ImageExampleImage.css";

class App extends Component {
  state = {
     players: [],
     normie: 0,
     robot: 0
  };
  async componentDidMount() {
    //console.log(contractData);

    //Metamask address
    const  {web3}  = await getWeb3;
    //console.log(web3);
    
    const voting = new web3.eth.Contract(
      contractData.abi,
      contractData.address
    );
    //console.log(voting);
  }
  render() {
    return (
      <div className="myComponent">
        <link rel="stylesheet" href="../src/ImageExampleImage.css" />
        <ImageExampleImage imagePath={require('./Image/robot.jpg')}/>
        <ImageExampleImage imagePath={require('./Image/soyboy.jpg')} />

        </div>
    );
  }
}


export default App;
