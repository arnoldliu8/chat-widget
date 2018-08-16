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
            }}>NK</div></div>

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
            }}>NK</div></div>


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
            }}>NK</div></div>
            


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
            }}>NK</div></div>
            
            

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
            }}>NK</div></div>


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
            onClick={this.onevent} 
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
        );

        else if (this.state.mode==="students") {
            return(
            <Student/>
            );
        }
    }
}

export default Chat;
