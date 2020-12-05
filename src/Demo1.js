import React from 'react';
import './bootstrap/css/bootstrap.min.css';
import logo1 from './admin.png'
import './App.css'
function Demo1(){

return <div className="container "> 
			<div className="card  main3 mt-4">
			    <div className="card-header">
			    Welcome
			    </div>
			     <div className="card-body">
			   <img src={logo1} />
			    </div>
			</div>
       </div>

}


export default Demo1;