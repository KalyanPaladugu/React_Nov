

function AndhraBank(props){
 console.log(props);
   return (
   	<div>
   	  <h1>This is  {props.bankname}  which is located @ {props.location}</h1>
   	</div>)
}


export default AndhraBank;