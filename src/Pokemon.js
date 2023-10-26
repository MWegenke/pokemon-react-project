import React,{ useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import detailsContext from "./deatilsContext";


export default function Pokemon({pokeData, handleLoad}){
  const [details, setdetails] = useState({})
  const [pokeSprite, setpokeSprite] = useState('')
  const {setDetails} = useContext(detailsContext)



  useEffect(() => {
    fetch(pokeData.url)
    .then(res => res.json())
    .then(data => {
      setdetails(data)
      setpokeSprite(data.sprites.other.dream_world.front_default)
      
    })
  }, [])
 
    return (<>    
      <div className="pokeman"><h2>{pokeData.name}</h2>
      <Link to='/details'details={details}><img className="onlymon" key={pokeData.name} alt={pokeData.name} src={pokeSprite} onClick={() => setDetails(details)}/></Link></div>
    </>
  )
}