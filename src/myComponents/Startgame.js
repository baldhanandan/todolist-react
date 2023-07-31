import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export const Startgame = ({addScore}) => {
    const [Score1, setScore1] = useState(0);
    const [Score2, setScore2] = useState(0);
    const [winner,SetWinner] = useState("");
    const [winBy,setWinBy] =useState(0);
    const location = useLocation();
    const data= location.state || {};
    const player11=data.player1;
    const player22=data.player2;


    const handleAdd1 = () => {
       
        setScore1(Score1 + 1);
        if(Score1>Score2){
             SetWinner(player11); 
        }
        else if(Score1<Score2){
            SetWinner(player22); 
        }
        else{
            SetWinner("Na"); 
        }
        console.log(Score1,Score2);
        setWinBy(Math.abs(Score1-Score2));
    };
    

    const handleAdd2 = () => {
        
        setScore2(Score2 + 1);
        if(Score1>Score2){
             SetWinner(player11); 
        }
        else if(Score1<Score2){
            SetWinner(player22); 
        }
        else{
            SetWinner("Na"); 
        }
        setWinBy(Math.abs(Score1-Score2));
        console.log(player11,player22);
    };
    const submit= (e)=>{
        e.preventDefault();
        if(Score1===0 && Score2===0){
            alert("you Didn't played a game");
        }
        const data={
            player1:player11,
            player2:player22,
            winner:winner,
            winBy:winBy,
        }
        addScore(data);

    };
  return (
    <div className='container'>
        <p>{}</p>
        <form onSubmit={submit}>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value={player11} aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
            <button onClick={handleAdd1} type="button" class="btn btn-primary">Add</button>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value={"Score of "+player11} aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
                <input type="number" value={Score1} className="form-control" placeholder="Player 1 Score" aria-label="Player 1 Score" disabled readonly/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value={player22} aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
            <button onClick={handleAdd2} type="button" class="btn btn-primary">Add</button>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value={"Score of "+player22} aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
                <input type="number" value={Score2} className="form-control" placeholder="0" aria-label="Player 1 Score" disabled readonly/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value="Current Winner" aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
                <input type="text" value={winner} className="form-control" placeholder="Game Started" aria-label="Winner" disabled readonly/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <input className="form-control" type="text" value="with Difference" aria-label="Disabled input example" disabled readonly />
            </div>
            <div className="col">
                <input type="number" value={winBy} className="form-control" placeholder="Game started" aria-label="winby" disabled readonly/>
            </div>
        </div>
        <br/>
        <br/>
        <button type="submit" className="btn btn-sm btn-success">Submit</button>
        <br/>
        <br/>
        </form>
    </div>
  )
}
