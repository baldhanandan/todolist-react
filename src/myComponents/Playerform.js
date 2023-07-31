import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Playerform = () => {
    const [player1,setPlayer1]=useState("");
    const [player2,setPlayer2]=useState(""); 
  

  

  return (
    <>
    <div className='container'>
        <h3>Start Game</h3>
        <form >
        <div className="mb-3">
            <label htmlFor="player1" className="form-label">Player1</label>
            <input type="text" value={player1} onChange={(e)=>{setPlayer1(e.target.value)}} className="form-control" id="player1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="player2" className="form-label">Player 2</label>
            <input type="text" value={player2} onChange={(e)=>{setPlayer2(e.target.value)}} className="form-control" id="player2"/>
        </div>
        <Link to="sgame" state={{player1:player1,player2:player2}} className="btn btn-sm btn-success"
        >
        Submit</Link>
        </form>
    </div>
    </>
  )
}
