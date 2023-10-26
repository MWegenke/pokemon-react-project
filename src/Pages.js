import React from "react";

export default function Pages({goToNext, goToPrev}){
  return (<div className="pages">
    {goToPrev != null? <button onClick={() => goToPrev()}>PREV</button> : <button disabled >Prev</button>}
    {goToNext != null? <button onClick={() => goToNext()}>NEXT</button> : <button disabled >Next</button>}
  </div>)
}