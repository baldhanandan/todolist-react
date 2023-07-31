import React from 'react'
import { Scoreiteam} from './Scoreiteam'

export const Score = (props) => {
    const myStyle={
        minHeight:"70vh",
        margin:"10px auto"
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='my-3'>Score Card</h3>
        {props.scoreCard.length===0? "no previous game" : 
         props.scoreCard.map((todo)=>{
            return <Scoreiteam todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          }
         )}
        
        
    </div>
  )
}
