import React from 'react'

export const Scoreiteam = ({todo,onDelete}) => {
  return (
    <div>
      <h3> {todo.sno}</h3>
      <h2> {todo.player1}</h2>
      <h2> {todo.player2}</h2>
      <h2> {todo.winner}</h2>
      <h2> {todo.winBy}</h2>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}
