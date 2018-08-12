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
      <button onClick={this.onEvent1} style={{borderRadius:"50%", borderColor:"orange",float:"left", height:"40px",
       width:"40px", backgroundColor:"orange"
       ,position:"absolute",left:"5px",marginTop:"420px",color:"white",borderStyle:"solid"}}></button>     
      </div>
    );
  }
  
  else if(this.state.mode==="chemistry"){
    return(
      <div>
    <button onClick={this.onClear} style={{borderRadius:"50%", borderColor:"orange",float:"left", height:"40px",
    width:"40px", backgroundColor:"orange"
    ,position:"absolute",left:"5px",marginTop:"420px",color:"white",borderStyle:"solid"}}></button>
    <Chat />
    </div>
    );
  } 

  




  }
}

export default App;
