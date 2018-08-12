import React from "react";






class Messages extends React.Component{



ALmessages = [
  {text: 'Whatever the mind of man can conceive and believe, it can achieve.',
  time:'11:56'},
  {text: 'conceive and believe',
  time:'12:56'},
  {text: 'Whatever the mind of man can conceive and believe, it can achieve.',
  time:'11:56'},
  {text: 'conceive and believe',
  time:'12:56'}
    

];   





ALSmessages=[
  {text: 'Whatever the mind of man can conceive and believe, it can achieve.',
  time:'1:16'},
  {text: 'conceive and believe',
  time:'2:56'},
]


render(){
        
        return (
                    
           <div style={{height:"305px",width:"240px",margin:"0px",overflow:"auto"}}>

           { this.ALmessages.map((person,i) => <p style={{backgroundColor:" #FFEBCD",marginLeft:"20px",marginRight:"50px",
           marginBottom:"1px",
            borderRadius:"5px 5px 5px 0px"}}>{person.text}  <p style={{fontSize:"10px"
          }}>{person.time}</p></p>)}
            < div style={{width:"25px",height:"25px",marginTop:"0px",borderRadius:"50%",backgroundColor:"blue"}}></div>
           { this.ALSmessages.map((person,i) => <p style={{backgroundColor:"blue",marginLeft:"50px",marginRight:"20px",
           marginBottom:"1px",
            borderRadius:"5px 5px 0px 5px", color:"white"}}>{person.text} <p style={{fontSize:"10px"
          }}>{person.time}</p></p>)}



           </div>


           );
    }
    
class Messages extends React.Component{



render(){
        
HAmessages=[
{text: 'Strive not to be a success, but rather to be of value.',
  sender: 'Harry Ally',
  time:'12:56'},
   {text: 'but rather to be of value.',
  sender: 'Harry Ally',time:'1:56'}
]



HASmessages=[{text: 'Whatever the mind of man can conceive and believe, it can achieve.',
  time:'1:56'},
  {text: 'conceive and believe',
  time:'2:56'},
]
        
        return (
                    
           <div style={{height:"305px",width:"240px",margin:"0px",overflow:"auto"}}>

           { this.HAmessages.map((person,i) => <p style={{backgroundColor:" #FFEBCD",marginLeft:"20px",marginRight:"50px",
           marginBottom:"1px",
            borderRadius:"5px 5px 5px 0px"}}>{person.text}  <p style={{fontSize:"10px"
          }}>{person.time}</p></p>)}
            < div style={{width:"25px",height:"25px",marginTop:"0px",borderRadius:"50%",backgroundColor:"blue"}}></div>
           { this.HASmessages.map((person,i) => <p style={{backgroundColor:"blue",marginLeft:"50px",marginRight:"20px",
           marginBottom:"1px",
            borderRadius:"5px 5px 0px 5px", color:"white"}}>{person.text} <p style={{fontSize:"10px"
          }}>{person.time}</p></p>)}



           </div>


           );
    }
    

class Messages extends React.Component{

LMmessages= [
{text: 'You miss 100% of the shots you don’t take.',
  time:'11:56'},
  {text: '100% of the shots you don’t take.',
  time:'2:56'}
];

LMSmessages=[
{text: 'Whatever the mind of man can conceive and believe, it can achieve.',
  time:'1:56'},
  {text: 'conceive and believe',
  time:'2:56'},
]


render(){
        
        return (
                    
           <div style={{height:"305px",width:"240px",margin:"0px",overflow:"auto"}}>

           { this.LMmessages.map((person,i) => <p style={{backgroundColor:" #FFEBCD",marginLeft:"20px",marginRight:"50px",
           marginBottom:"1px",
            borderRadius:"5px 5px 5px 0px"}}>{person.text}  <p style={{fontSize:"10px"
          }}>{person.time}</p></p>)}
            < div style={{width:"25px",height:"25px",marginTop:"0px",borderRadius:"50%",backgroundColor:"blue"}}></div>
           { this.LMSmessages.map((person,i) => <p style={{backgroundColor:"blue",marginLeft:"50px",marginRight:"20px",
           marginBottom:"1px",
            borderRadius:"5px 5px 0px 5px", color:"white"}}>{person.text} <p style={{fontSize:"10px"
          }}>{person.time}</p></p>)}



           </div>


           );
    }
}

export default Messages;



