import React from "react";
import Pages from "./Pages";
import Pokemon from "./Pokemon";

export default function Home({pokeList, goToNext, goToPrev}){


  return (<>
    <div className="pokeList">
      {pokeList.map(pokemon => <Pokemon key={pokemon.name} pokeData={pokemon}/>)}
      <Pages goToNext={goToNext} goToPrev={goToPrev}/>
    </div>
    </>)
}