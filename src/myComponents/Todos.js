import React from 'react'
import { TodoIteam } from './TodoIteam'

export const Todos = (props) => {
    const myStyle={
        minHeight:"70vh",
        margin:"10px auto"
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='my-3'>Todos List</h3>
        {props.todos.length===0? "no to do list" : 
         props.todos.map((todo)=>{
            return <TodoIteam todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          }
         )}
        
        
    </div>
  )
}
