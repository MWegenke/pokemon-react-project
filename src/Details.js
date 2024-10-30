import React, {useContext} from "react";
import detailsContext from './deatilsContext'
import { Link } from "react-router-dom";

export default function Details(){
  const {details} = useContext(detailsContext)
  const moves = details.moves;


  return (<>
  <div className="container" style={{display:"flex"}}>
  <Link to='/'><button>Go Back</button></Link>
  <div className="name-img" style={{width:"50%"}}>
  <h1 id={details.forms[0].name.toUpperCase()}>{details.forms[0].name.toUpperCase()}</h1>
  <img style={{height:"75%"}} alt={details.forms[0].name.toUpperCase()} src={details.sprites.other.home.front_default}/>
  </div>
  <div className="moves">
    <ul>
      {moves.filter((x,i) => i < 18).map((x,i)=> <li key={i}>{x.move.name}</li>)}
    </ul>
  </div>
  </div>
  </>)
}
