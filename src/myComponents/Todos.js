import React from 'react'
import { TodoIteam } from './TodoIteam'

export const Todos = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center'>Todos List</h3>
        {props.todos.length===0? "no to do list" : 
         props.todos.map((todo)=>{
            return <TodoIteam todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          }
         )}
        
        
    </div>
  )
}
