import React from 'react'

const Todo = (props) => {
    console.log(props)

    return(

<div 
onClick={() => props.toggleTodo(props.todo.id)}

style={props.todo.completed ? {textDecoration: 'line-through'} : {} }>

    <p> {props.todo.task} </p>
        </div> 
    )
}

export default Todo