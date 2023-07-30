import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import {Footer} from './myComponents/Footer';
import {Todos} from './myComponents/Todos';
import React, { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo';

function App() {
  const onDelete = (todo)=>{
    console.log("I'm Delete",todo);
    //let index=todos.indexOf(todo);
    //todos.splice(index,1);
    setodos(todos.filter((e)=>{
      return e!==todo;
    }

    ))
    
  }
  const addTodo =(title,desc)=>{
    const sno=todos[todos.length-1].sno+1;
    const mytodo={
      sno:sno,
      title:title,
      description:desc
    }
    setodos([...todos,mytodo])
    console.log("i m adding title and desc",mytodo)
  }

  const [todos, setodos] = useState([
    {
      sno:1,
      title:"go to market",
      description:"got to market and get your things"
    },
    {
      sno:2,
      title:"do home work",
      description:"got to market and get your things"
    },
    {
      sno:3,
      title:"go to coading",
      description:"got to big bazar"
    }
  ]);
  return (
    <>

      <Header  title="new list do list" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/> 
      <Footer/>
    </>
  );
}

export default App;
