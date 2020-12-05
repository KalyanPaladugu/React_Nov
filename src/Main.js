import React,{Component} from 'react';
import './bootstrap/css/bootstrap.min.css';
// import logo1 from 'logo192.png'
import data from './data.json';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Resume from './Resume.js';



class Main extends Component{

render(){
	return (
		      <Router>
		         <Route   exact path="/" component={Main1} /> 
		          
		         <Route  exact path="/aboutresume" component={Resume} />
         
		      </Router>
		)
}
}


function Main1() {

	return (<div className="row">
           <div className="card col-md-4 offset-4 mt-4"
            style={{width:"18rem",textAlign:"center"}}>
           <img src={process.env.PUBLIC_URL+'./logo192.png'} className="card-img-top"/>
           <h2>{data.name}</h2>
           <h4>{data.email}</h4>
           <Link to="/aboutresume" className="btn btn-primary">Click</Link>
           </div>

           <div className="card col-md-4 offset-4 mt-4"
            style={{width:"18rem",textAlign:"center"}}>
           <img src={process.env.PUBLIC_URL+'./logo192.png'} className="card-img-top"/>
           <h2>{data.name}</h2>
           <h4>{data.email}</h4>
           <Link to="/main2" className="btn btn-primary">Click</Link>
           </div>

           <div className="card col-md-4 offset-4 mt-4"
            style={{width:"18rem",textAlign:"center"}}>
           <img src={process.env.PUBLIC_URL+'./logo192.png'} className="card-img-top"/>
           <h2>{data.name}</h2>
           <h4>{data.email}</h4>
           <Link to="/main3" className="btn btn-primary">Click</Link>
           </div>

		</div>)

}

function About(){
  return <div>
            <h1>This about my Resume</h1>
         </div>

}

function Contact(){
  return <div>
            <h1>This is Contact page</h1>
         </div>

}




export default Main;

