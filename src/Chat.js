import React from "react";
import Student from './Student';
class Chat extends React.Component{
    
constructor(props){
   super(props);
   this.state = {
   mode:'chem'
  } 
  }

 onevent=()=>{
    this.setState({mode:'students'})
  }






    render(){
        if(this.state.mode==="chem")
        return (
            <div>
            <br/>
            <br/>
            <br/>
            <div style={{height:"380px", width:"240px", border:"solid", borderColor:"#45CFE2", marginLeft:"50px"}}>
            <div style={{height:"46px",width:"240px", backgroundColor:"#45CFE2",
            margin: "auto",
            textAlign:"center", color:"white"}}>  
            <button style=
            {{
            borderRadius:"50%",
            borderColor:"#D2B4DE", 
            float:"left", 
            height:"24px",
            width:"28px", 
            fontSize:"10px", 
            backgroundColor:"#D2B4DE", 
            position:"absolute",
            left:"80px",
            marginTop:"8px",
            color:"white",
            borderStyle:"solid"}}>HA</button>
            
            





            <button style={{borderRadius:"50%",
            borderColor:"#F5B7B1",
            float:"left", 
            height:"24px", 
            width:"28px", 
            fontSize:"10px", 
            backgroundColor:"#F5B7B1", 
            position:"absolute",
            left:"68px",
            marginTop:"8px",
            color:"white",
            borderStyle:"solid"}}>AL</button>
            <button style={{borderRadius:"50%",
            borderColor:"#EDBB99",
            float:"left",
            height:"24px",
            width:"28px",
            fontSize:"10px",
            backgroundColor:"#EDBB99" 
            ,position:"absolute",
            left:"55px",
            marginTop:"8px",
            align:"left", 
            color:"white", 
            marginLeft:"0",
            borderStyle:"solid"}}>LM</button>
            <h3 style={{margin:"auto", position:"absolute",left:"105px"}}>
            <pre>.. <button onClick={this.onevent} style={{backgroundColor:"#45CFE2",borderColor:"#45CFE2",
            color:"white",borderStyle:"solid",fontSize:"15px"}}>Chemistry</button></pre></h3>

            

            <div style={{width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#7CFC00",
            position:"absolute",left:"75px",marginTop:"26px"}}></div>
            <div style={{width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#7CFC00",
            position:"absolute",left:"88px",marginTop:"26px"}}></div>
            <div style={{width:"5px", height:"5px", borderRadius:"50%", backgroundColor:"#7CFC00",
            position:"absolute",left:"102px",marginTop:"26px"}}></div>
            </div>   
            





            <div style={{height:"334px",width:"240px",backgroundColor:"#F5F5F5"}}>
            



            <div style={{height:"305px",width:"240px"}}></div>
             
       
            <input style={{marginLeft:"10px"}}type="text" placeholder="Type your message"/>
            <button style={{fontSize:"12px",
            backgroundColor:"#F5F5F5",
            borderStyle:"solid", 
            borderColor:"#F5F5F5"}}><i className="fa fa-paperclip"></i></button>
            <button style={{fontSize:"12px",backgroundColor:"#F5F5F5",borderStyle:"solid",
            borderRadius:"50px"}}><i className="fa fa-paper-plane-o"></i></button>
            </div>

            </div>
            
            

            


            





            </div>
        );

        else if (this.state.mode==="students") {
            return(
            <Student/>
            );
        }
    }
}

export default Chat;
