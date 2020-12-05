
import React,{Component} from 'react';


class Employees extends Component{
  	constructor(){
  		super();
  		this.state={
        users:[
        {name:"Koushik",designation:"Junior software Developer"},
        {name:"Nagalakshmi",designation:"Junior software Developer"},
        {name:"Yasmeen",designation:"Junior software Developer"}]
      }
  	}

    changeData=()=>{
      this.setState({
        users:[
        {name:"Koushik",designation:"Senior software Developer"},
        {name:"Nagalakshmi",designation:"Senior software Developer"},
        {name:"Yasmeen",designation:"Senior software Developer"}]
      })

    }

  render(){

     

  	return (
      <div>
  		<h2>Employee Name is : {this.state.users[0].name}    with designation of {this.state.users[0].designation}</h2>
             <h2>Employee Name is : {this.state.users[1].name}
             with designation of {this.state.users[1].designation}</h2>
             <h2>Employee Name is : {this.state.users[2].name}
             with designation of {this.state.users[2].designation}</h2>

             <button onClick={this.changeData}> Update </button>
  		</div>


  		)
  }

} 


export default Employees;