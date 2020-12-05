 import React from 'react';

 function Admin(){

 	return <div>
 	       <h1>admin</h1>
 	       <Main />
 	       </div>
 }


class Main  extends React.Component  {
	render()
	{
		return <h4>Main component </h4>
	}

}

 export default Admin;