import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



const todos = [
  {
    id: 1,
    task: "Buy groceries",
    completed: false
  },
  {
    id: 2,
    task: "Do laundry",
    completed: false
  }
]
// ? Extends uses inheritance to receive properties/functions/methods from React.Component. React class components always extend from React.Component. This allows us to set up state and run life cycle methods.

class App extends React.Component {
  constructor() {
    super();
    //? Below would look like this in a function state
    //? const [todos, setTodos] =useState(todos)
    this.state = {
      todos: todos
      //? Instead of todos: todos, you can just use todos
    }
  }

  //? Class state is always an object with class properties.
  //? Function state: each state property is its own variable

  // * you will need a place to store your state in this component.
  // * design `App` to be the parent component of your application.
  // * this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = todoName => {
    const newTodo = {
      id: new Date(),
      task: todoName,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  //? The addTodo creates a new todo using the newTodo variable and todoName parameter, which will take this.state.item as an argument in TodoForm.js
  //? We set the state for todos and make a copy of todos using a spread operator, then add newToDo.

  removeTodo = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.completed === false
      })
    })
  }
  //? To remove a todo we set the state and filter through the todos so that we can only show the ones that have not been completed, which removes those that have been completed.

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item
      })
    })
  }
  //? This function allows us to toggle between whether a todo item has been completed or not. We set state and map through the todos checking to see if the ids match, and if they do, we change completed to the opposite of what it is.

  render() {
    //? Here is where you would deconstruct state (right under render)
    //? const { todos } = this.state
    //? Then, you can simply pass todos underneath.
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}



export default App;
