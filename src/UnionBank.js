import AndhraBank from './AndhraBank.js';
import CorporationBank from "./CorporationBank.js";

function UnionBank(){

           return <div>
           <h1> Uion Bank is parent component</h1>
           <AndhraBank bankname="AndhrBank"  location="Vijayawada" />
           <CorporationBank bankname="CorporationBank" location="Vizag" />
                 </div>
}

export default UnionBank;