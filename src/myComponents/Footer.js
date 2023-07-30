import React from 'react'

export const Footer = () => {
    let foorterStyle={
        position:"relative",
        top:"100vh",
        width:"100%"

    }
  return (
    <footer className='bg-dark text-light' style={foorterStyle}>
        <p className="text-center">
            Copyright &copy; MyTodolist.com 
        </p>
    </footer>
  )
}
