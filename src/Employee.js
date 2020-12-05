
import React,{Component} from 'react';


class Employee extends Component{
  	constructor(){
  		super();
  		this.state={name:"Koushik",};
  	}

  render(){

     setTimeout(()=> this.setState({name:"N.Koushik"}),3000)

  	return (<div>
  		<h2>Employee Name is : {this.state.name}</h2>
  		</div>
  		)
  }

} 


export default Employee;