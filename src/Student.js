import React from "react";




class Student extends React.Component{
users=[{name:"Arnold Liu",initials:"AL",color:'#E74C3C'},
{name:"Harry Ally",initials:"HA",color:'#298089'},
{name:"Leo Messi",initials:"LM",color:'#009D4B'}] 



ALmessages= [
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



  onStudent=(value)=>{
  	if(value === 'AL'){
  	this.setState({mode:'Msg'})
    this.setState({messages:this.ALmessages})
    this.setState({SendMessages:this.ALSmessages}) 
    	this.setState({initials:'AL'})
    }
    else if(value === 'HA'){
  	this.setState({mode:'Msg'})
    this.setState({messages:this.HAmessages})
    this.setState({SendMessages:this.HASmessages}) 
    	this.setState({initials:'HA'})
    }
    else if(value === 'LM'){
  	this.setState({mode:'Msg'})
    this.setState({messages:this.LMmessages})
    this.setState({SendMessages:this.LMSmessages}) 
    	this.setState({initials:'LM'})
    }
  }

  onClear=()=>{
  	this.setState({mode:"students"})
  }



    render(){
    	if(this.state.mode==="students")
        return (
        	<div>

            <div style={{
            	height:"424px",
            	width:"304px", 
            	border:"solid", 
            	borderColor:"#45CFE2",              
              backgroundColor:"#F1F1F1",
              position:"fixed",
              left:"87px",
              top:"168px"
            }}>

            <div style={{
                height:"42px",
            	  width:"304px",
                backgroundColor:"#45CFE2",
                position:"fixed",
                left:"90px",
                top:"170px"
            }}>
            <div style={{
                height:"87px",
            	  width:"19px",
                position:"fixed",
                left:"200px",
                top:"178px",
                color:"#FFFFFF",
                textAlign:"left",
                fontSize:"16px",
                lineHeight:"19px",
                fontStyle:"Montserrat, SemiBold",
            }}>STUDENTS</div>
            </div>

            <div style={{
            	position:"fixed",
                left:"90px",
                top:"212px",
                backgroundColor:"#45CFE2",    
            }}>

            {this.state.users.map((person,i) => <div key={i} style={{
            	height:"42px",
            	width:"304px",
                backgroundColor:"#45CFE2",             
                marginBottom:"20px"
            }}><div style={{
                height:"40px",
            	width:"40px",
                backgroundColor:person.color,
                fontStyle:"Montserrat, SemiBold",
                borderRadius:"50px",
                marginLeft:"30px",
            }}>
            <div style={{
                color:"white",
                textAlign:"center",
                fontSize:"16px",
                fontStyle:"Proxima Nova, Semibold",
                margin: "auto",
                width: "50%",
                padding: "10px",
            }}>{person.initials}</div>
            </div>
            <div onClick={()=>this.onStudent(person.initials)} 
                style={{
                color:"white",
                fontSize:"16px",
                fontStyle:"Proxima Nova, Semibold",
                marginLeft: "90px",
                height: "20px",
                lineHeight:"20px",
                marginTop:"-30px"
            }}>
            {person.name}
            </div>
            <div style={{
                
            	backgroundColor:"white",
                float: "right",
                height: "32px",
                width:"32px",
                borderRadius:"50%",
                marginTop:"-26px",
                marginRight:"30px"

            }}>
           
            <i style={{
            	fontSize:"16px",              
            	color:"#45CFE2",
              textAlign:"center",
              padding:"9px"
            }} className="fa">&#xf095;</i>
           
            </div>
            </div>)}
            </div>
            </div>
            </div>
        	 );
    

    else if(this.state.mode==="Msg"){
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
            }}><div 
            style={{
            height:"24px",
            width:"25px", 
            backgroundColor:"#F7931E",
            position:"fixed",
            left:"42px",
            top:"578px",
            lineHeight:"24px",
            fontSize:"20px",
            textAlign:"left",
            color:"white"

            }}>{this.state.initials}</div>
            </div>
            <div style=
            {{
                height:"424px", 
                width:"304px", 
                backgroundColor:"#45CFE2",
                position:"fixed",
                left:"87px",
                top:"168px",
                borderStyle:"solid",
                borderColor:"#45CFE2",
                borderSize:"2px",
            }}>

            <div style=
            {{
                height:"42px",
                width:"300px",
                backgroundColor:"#45CFE2",
                position:"fixed",
                left:"89px",
                top:"170px"
            }}> 
            
            <div style=
            {{
            borderRadius:"50%",  
            height:"23px",
            width:"23px",  
            backgroundColor:"#298089", 
            position:"fixed",
            left:"139px",
            top:"177px"
            }}><div style=
            {{ 
            height:"12px",
            width:"14px",  
            position:"fixed",
            left:"142.17px",
            top:"183.47px",
            color:"#FFFFFF",
            fontSize:"10.16px",
            fontStyle:"Proxima Nova, Semibold",
            textAlign:"left",
            lineHeight:"12px"
            }}></div></div>

            <div style=
            {{
            borderRadius:"50%",  
            height:"23px",
            width:"23px",  
            backgroundColor:"#A967AA", 
            position:"fixed",
            left:"128px",
            top:"177px"
            }}><div style=
            {{ 
            height:"12px",
            width:"14px",  
            position:"fixed",
            left:"132.17px",
            top:"183.47px",
            color:"#FFFFFF",
            fontSize:"10.16px",
            fontStyle:"Proxima Nova, Semibold",
            textAlign:"left",
            lineHeight:"12px"
            }}></div></div>

            <div style=
            {{
            borderRadius:"50%",  
            height:"23px",
            width:"23px",  
            backgroundColor:"#A967AA", 
            position:"fixed",
            left:"117px",
            top:"177px"
            }}><div style=
            {{ 
            height:"12px",
            width:"14px",  
            position:"fixed",
            left:"122.17px",
            top:"183.47px",
            color:"#FFFFFF",
            fontSize:"10.16px",
            fontStyle:"Proxima Nova, Semibold",
            textAlign:"left",
            lineHeight:"12px"
            }}></div></div>

            <div style=
            {{
            borderRadius:"50%",  
            height:"23px",
            width:"23px",  
            backgroundColor:"#F7931E", 
            position:"fixed",
            left:"106px",
            top:"177px"
            }}><div style=
            {{ 
            height:"12px",
            width:"14px",  
            position:"fixed",
            left:"111.17px",
            top:"183.47px",
            color:"#FFFFFF",
            fontSize:"10.16px",
            fontStyle:"Proxima Nova, Semibold",
            textAlign:"left",
            lineHeight:"12px"
            }}></div></div>
            
           <div style=
            {{
            borderRadius:"50%",  
            height:"23px",
            width:"23px",  
            backgroundColor:"#CE242B", 
            position:"fixed",
            left:"96px",
            top:"177px"
            }}><div style=
            {{ 
            height:"12px",
            width:"14px",  
            position:"fixed",
            left:"100.17px",
            top:"183.47px",
            color:"#FFFFFF",
            fontSize:"10.16px",
            fontStyle:"Proxima Nova, Semibold",
            textAlign:"left",
            lineHeight:"12px"
            }}></div></div>

          <div style=
            {{
                width:"12px",
                height:"20px",
                textAlign:"left",
                fontSize:"16px",
                lineHeight:"20px",
                color:"#FFFFFF",
                position:"fixed",
                left:"165.67px",
                top:"184.33px"
            }}>...</div>

            <div            
            style=
            {{
                width:"84px",
                height:"19px",
                textAlign:"left",
                fontSize:"16px",
                lineHeight:"18px",
                color:"#FFFFFF",
                position:"fixed",
                left:"210px",
                top:"181px"
            }}>Chemistry</div>

            <div style=
            {{
                width:"6px",
                height:"6px",
                borderRadius:"50%",
                backgroundColor:"#7AC943",
                position:"fixed",
                backgroundSize:"0.5px",
                left:"109.5px",
                top:"196.5px"
            }}></div>
            <div style=
            {{
                width:"6px",
                height:"6px",
                borderRadius:"50%",
                backgroundColor:"#7AC943",
                position:"fixed",
                backgroundSize:"0.5px",
                left:"121.5px",
                top:"196.5px"
            }}></div>
            <div style=
            {{
                width:"6px",
                height:"6px",
                borderRadius:"50%",
                backgroundColor:"#7AC943",
                position:"fixed",
                backgroundSize:"0.5px",
                left:"133.5px",
                top:"196.5px"
            }}></div>
            <div style=
            {{
                width:"6px",
                height:"6px",
                borderRadius:"50%",
                backgroundColor:"#7AC943",
                position:"fixed",
                backgroundSize:"0.5px",
                left:"144.5px",
                top:"196.5px"
            }}></div>
            <div style=
            {{
                width:"6px",
                height:"6px",
                borderRadius:"50%",
                backgroundColor:"#7AC943",
                position:"fixed",
                backgroundSize:"0.5px",
                left:"155.5px",
                top:"196.5px"
            }}></div>
            
            </div>   
            
            <div style={{
                height:"382px",
                width:"302px",
                position:"fixed",
              
                left:"90.5px",
                top:"212px",
                backgroundColor:"#F1F1F1"}}>
            
           <div style={{
           	height:"325px",
           	width:"302px",
           	overflow:"auto"}}>

           { this.state.messages.map((person,i) => <p key={i} style={{
           	backgroundColor:"#FFFFFF",
           	marginLeft:"34px",
           	marginRight:"50px",
            borderRadius:"13px 13px 13px 2px",
            padding:"10px",
            lineHeight:"15px",
            fontSize:"12px",
            fontStyle:"Montserrat, Regular",
            textAlign:"left",
            color:"#4D4D4D"
          }}>{person.text}  <br/><span style={{
          	fontSize:"6px",
          	textAlign:"left",
          	fontStyle:"Montserrat, Medium",
          	height:"20px",
           	width:"6px",
           	textAlign:"left",
           	color:"rgba(153,153,153,0.6)",
           	float:"right",
           	marginRight:"10px",
           	lineHeight:"8px"
          }}>{person.time}</span></p>)}
                < div style={{
            	width:"30px",
            	height:"30px",
            	marginLeft:"2px",
            	marginTop:"-42px",
            	borderRadius:"50%",
            	backgroundColor:"#4A90E2"}}></div>
          
            
           { this.state.SendMessages.map((person,i) => <p key={i} style={{
           	backgroundColor:"#2196F3",
           	marginLeft:"50px",
           	marginRight:"20px",
            marginBottom:"1px",
            borderRadius:"13px 13px 2px 13px", 
            color:"white",
            padding:"10px",
            lineHeight:"15px",
            fontSize:"12px",
            fontStyle:"Montserrat, Regular",
            textAlign:"left",
          }}>{person.text} <br/><span style={{
          	fontSize:"6px",
          	textAlign:"left",
          	fontStyle:"Montserrat, Medium",
          	height:"20px",
           	width:"6px",
           	textAlign:"left",
           	color:"rgba(245,244,253,0.6)",
           	float:"right",
           	marginRight:"10px",
           	lineHeight:"8px"
          }}>{person.time}</span></p>)}
           </div>
            <div style={{
                width:"241px",
                height:"36px",
                position:"fixed",
                left:"96px",
                top:"545px",
                backgroundColor:"#FFFFFF",
                borderRadius:"19.5px 19.5px 19.5px 19.5px",
                boxShadow: "0px 2px 2.5px #CBCBCB"
                }}>
            <input style=
            {{
                width:"175px",
                height:"15px",
                position:"fixed",
                left:"114px",
                top:"554px",
                color:"#CCCCCC",
                fontSize:"12px",
                lineHeight:"15px",
                textAlign:"left",
                fontStyle:"Montserrat, Light",
                borderColor:"white",
                borderStyle:"solid"
            
            }}            
            type="text" 
            placeholder="Type your message"/>
            <div style=
            {{
                width:"11px",
                height:"22px",
                position:"fixed",
                left:"302.65px",
                top:"552.66px",
                color:"#999999",
                fontSize:"20px"
            }}><i className="fa fa-paperclip"></i></div>

            </div>
                        
            <div style=
            {{
                width:"36px",
                height:"36px",
                position:"fixed",
                left:"347px",
                top:"546px",
                backgroundColor:"#45CFE2",
                borderRadius:"50%"
                
            }}><div style=
            {{
                width:"15.57px",
                height:"14.14px",
                position:"fixed",
                left:"354px",
                top:"555.43px",
                color:"white",
                fontSize:"20px"

            }}>
            <i className="fa fa-paper-plane-o"></i>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
    }
    }
}

export default Student;
