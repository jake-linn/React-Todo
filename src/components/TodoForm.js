import React from 'react';


/// CCR
// declare CLASS
// build CONSTRUCTOR
// call RENDER 
class TodoForm extends React.Component {

    constructor(){
        super();
        this.state = {item: '' };


    }

    // setting state to whats in the input

    handleChanges = (e) => {

        this.setState ({
            item: e.target.value
        });

    };

// prevent add from refreashing 
handleSubmit = (e) => {

    e.preventDefault();
    this.setState({
        item: ''
    })
    this.props.addTodo(this.state.item)

}

render(){
    
    return(

        <form onSubmit = {this.handleSubmit}>

        <input 
        type = 'text'
        name = 'item'
        value = {this.state.item}
        onChange = {this.handleChanges}
        />
        <button> Add Todo  </button>
        <button type = 'button' onClick = {this.props.removeTodo} > Clear Completed</button>
        </form>
    )
    }

}
export default TodoForm;