import React from 'react'
import { Image } from 'semantic-ui-react';

class ImageExample extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
   
  render() {
      return(
               <img src={this.props.image}/>
      )
       }
  }
export default ImageExample;