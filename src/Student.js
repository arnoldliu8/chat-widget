import React from "react";




class Student extends React.Component{
users=[{name:"Arnold Liu",initials:"AL"},{name:"Harry Ally",initials:"HA"},{name:"Leo Messi",initials:"LM"}];
  
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
  {text: 'hmm okay.',
  time:'1:16'},
  {text: 'conceive and believe',
  time:'2:56'}
]


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

   constructor(props){
   super(props);
   this.state = {
   mode:'students',
   messages:[],
   SendMessages:[],
   name:''
  } 
  }



  onStudent1=()=>{
  	this.setState({mode:'Msg'})
    this.setState({messages:this.ALmessages})
    this.setState({SendMessages:this.ALSmessages}) 
    	this.setState({name:'Arnold'})
  }
  onStudent2=()=>{
  	this.setState({mode:'Msg'})
    this.setState({SendMessages:this.HAmessages})
    this.setState({SendMessages:this.HASmessages})
    	this.setState({name:'Harry'})
  }
  onStudent3=()=>{
    this.setState({mode:'Msg'})
    this.setState({messages:this.LMmessages})
    this.setState({SendMessages:this.LMSmessages})
    	this.setState({name:'Leo'})
  }

  onBack=()=>{
  	this.setState({mode:"students"})
  }



    render(){
    	if(this.state.mode==="students")
        return (
        	<div>
            <br/>
            <br/>
            <br/>
            <div style={{height:"380px", width:"240px", border:"solid", borderColor:"#45CFE2", marginLeft:"50px"}}>
            <div style={{width:"240px", backgroundColor:"#45CFE2",
            margin: "auto",
            textAlign:"center", color:"white"}}> 




            <p style={{margin:"auto",height:"46px"}}><br/>STUDENTS</p>
            <div style={{margin:"0px", backgroundColor:"#45CFE2",
            width:"240px",
             float:"left"}}>
            <button
            style=
            {{backgroundColor:"#D2B4DE", 
            margin:"0px",
            height:"28px", 
            width:"34px",
            borderRadius:"50%",
            border:"solid",
            borderColor:"#D2B4DE",
            color:"white",
            marginBottom:"5px"}}>AL</button><button
            onClick={this.onStudent1}
            style={{
            margin:"0px",
            width:"200px", 
            color:"white",
            backgroundColor:"#45CFE2",
            border:"solid",
            borderColor:"#45CFE2",
            textAlign:"left"}}>Arnold Liu</button>
            

            <button
            style=
            {{backgroundColor:"#F5B7B1", 
            margin:"0px",
            height:"28px", 
            width:"34px",
            borderRadius:"50%",
            border:"solid",
            borderColor:"#F5B7B1",
            color:"white",
            marginBottom:"5px"
            }}>HA</button><button 
            onClick={this.onStudent2}
            style={{
            margin:"0px",
            width:"200px", 
            color:"white",
            backgroundColor:"#45CFE2",
            border:"solid",
            borderColor:"#45CFE2",
            textAlign:"left"}}>Harry Ally</button>




            <button
            style=
            {{backgroundColor:"#EDBB99", 
            margin:"0px",
            height:"28px", 
            width:"34px",
            borderRadius:"50%",
            border:"solid",
            borderColor:"#EDBB99",
            color:"white",
            marginBottom:"5px"
            }}>LM</button><button 
            onClick={this.onStudent3}
            style={{
            
            margin:"0px",
            width:"200px", 
            color:"white",
            backgroundColor:"#45CFE2",
            border:"solid",
            borderColor:"#45CFE2",
            textAlign:"left"}}>Leo Messi</button>



            </div>
            
            </div> 
            </div> 
            </div>
            




        	 );
    


    else if(this.state.mode==="Msg"){
    	return(
    		   <div>
          <div>
            <br/>
            <br/>
            <br/>
            <div style=
            {{
              height:"380px", 
              width:"240px", 
              border:"solid", 
              borderColor:"#45CFE2", 
              marginLeft:"50px"}}>
            <div style=
            {{
              height:"46px",
              width:"240px", 
              backgroundColor:"#45CFE2",
              margin: "auto",
              textAlign:"center", color:"white"}}>  
            
            <div style=
            {{
              
            position:"absolute",
            float:"center",  
            color:"white",fontSize:"15px"
            }}>

            <pre>
            <button onClick={this.onBack} style={{backgroundColor:"#45CFE2",
            float:"left",color:"white", borderColor:"white", borderRadius:"50%",
            borderStyle:"solid"}}>&#8592;</button> {this.state.name}
            </pre>
            </div>

            

            
           
            </div>
            





            <div style={{height:"334px",width:"240px",margin:"0px"}}>
            

            <div style={{height:"305px",width:"240px",margin:"0px",overflow:"auto"}}>

           { this.state.messages.map((person,i) => <p key={i} style={{
           backgroundColor:" #FFEBCD",
           marginLeft:"20px",
           marginRight:"50px",
           marginBottom:"1px",
           borderRadius:"5px 5px 5px 0px",
           padding:"10px"}}>{person.text}  <span style={{fontSize:"10px"
          }}>{person.time}</span></p>)}
            < div style={{
          width:"25px",
          height:"25px",marginTop:"0px",borderRadius:"50%",backgroundColor:"blue"}}></div>
           { this.state.SendMessages.map((person,i) => <p key={i} style={{
           	backgroundColor:"blue",
           	marginLeft:"50px",
           	marginRight:"20px",
            marginBottom:"1px",
            borderRadius:"5px 5px 0px 5px", 
            color:"white",
            padding:"10px"
          }}>{person.text} <span style={{fontSize:"10px"
          }}>{person.time}</span></p>)}
          


           </div>

 
           
       
            <input style={{marginLeft:"10px"}}type="text" placeholder="Type your message"/>
            <button style={{fontSize:"12px",
            backgroundColor:"#F5F5F5",
            borderStyle:"solid", 
            borderColor:"#F5F5F5"}}><i className="fa fa-paperclip"></i></button>
            <button style={{fontSize:"12px",backgroundColor:"#45CFE2", borderRadius:"50px",
            borderStyle:"solid", borderColor:"#F5F5F5"}}>
            <i className="fa fa-paper-plane-o"></i></button>

            </div>

            </div>
            </div>
          </div>
    )
    }



   
    }

}

export default Student;
