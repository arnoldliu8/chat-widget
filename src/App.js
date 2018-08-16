import React, { Component } from 'react';
import Chat from './Chat';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    mode:'view'
  } 
  }

  onEvent1=()=>{
    this.setState({mode:'chemistry'})
  }
 

  onClear=()=>
  {
    this.setState({mode:'view'})
  }
  

  render() {
    if(this.state.mode==="view"){
    return (
      <div>
      <div onClick={this.onEvent1} 
      style=
      {{
      borderRadius:"50%", 
      height:"50px",
      width:"50px", 
      backgroundColor:"#F7931E",
      position:"fixed",
      left:"31px",
      top:"565px"
      }}></div>  
      </div>
    );
  }
  
  else if(this.state.mode==="chemistry"){
    return(
      <div>
    <div onClick={this.onClear} 
    style=
    {{
      borderRadius:"50%", 
      height:"50px",
      width:"50px", 
      backgroundColor:"#F7931E",
      position:"fixed",
      left:"31px",
      top:"565px"
    }}></div>
    <Chat />
    </div>
    );
  } 

  




  }
}

export default App;
