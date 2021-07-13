import React from "react";
import "./style.css";
import axios from "axios";

export default class Middle extends React.Component{
  constructor(props)
  {
    super(props)
    //UserName: {this.props.user[this.props.user.index].username}
    
  }
  render()
  {
    return(
      
        <>
        <div>  Item no:-- {this.props.index+1}  </div>
        </>
      
    )
  }
}

export default class Info extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={expanded:false}
    //UserName: {this.props.user[this.props.user.index].username}
    
  }
  
  render(){
    console.log(this.props.user)
    return(
      <>
      <div className="n1">
      <div>
      {this.props.user.map((user,i)=>(
            <div className="n3" onMouseOver={()=>{
              this.setState({expanded:!this.state.expanded})
              
            }}>
             {this.props.index==i && <div>
              UserName: {this.props.user[i].name}
              <br></br>
              <div className="n2">
              {this.state.expanded && <div>Email:
                {this.props.user[i].email}
                <br></br>
              Website:
                {this.props.user[i].website}
                <br></br>
              Phone:
                {this.props.user[i].phone}</div>}
              </div>
                
               </div>}
                
            </div>
          ))}
      </div>
        </div>
      </>
    )
  }
}

export default class Display extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={users:[], index:1}
    
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{this.setState({
      users:res.data
    })})
    .catch(err=>console.log(err))
  }
  render(){
    //console.log(this.state.users)
    return(
      <>
        <div className="c"> 
          <button className="c1" onClick={()=>{
            {this.state.index>0 && this.setState({index:this.state.index-1})}
          }}>  Left  </button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Middle className="c2" index={this.state.index}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="c3" onClick={()=>{
           {this.state.index<this.state.users.length-1 && this.setState({index:this.state.index+1})}
          }}>  Right  </button>
          


          </div>
          <div className="r2">
          <Info user={this.state.users} index={this.state.index}/>
          </div>
          </>
        
    )
  }
}

export default function App() {
  return (
  
    <div>
      <Display />
    </div>
   
  );
}
