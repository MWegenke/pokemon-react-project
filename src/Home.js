import React from "react";
import Pages from "./Pages";
import Pokemon from "./Pokemon";

export default function Home({pokeList, goToNext, goToPrev}){


  return (<>
    <div className="pokeList">{pokeList.map(x => <Pokemon key={x.name} pokeData={x}/>)}
    <Pages goToNext={goToNext} goToPrev={goToPrev}/></div>
    </>)
}