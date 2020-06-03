import React, { Component } from 'react'

class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todo :''
        }
    }
    render() {
        return (
            <>
                <h1>Todos Task</h1>
                <input type="text" name="todo" value ={this.state.todo} onChange={this.onTodoChange}/>&nbsp;
                <button onClick={this.addTodo}>Add Todos </button>
                <ul>
                    {
                        this.state.todos.map((todo, index) => {
                            return <li key={index}>{todo} <button onClick={()=>{
                                this.removeTodo(todo)}}>Remove</button></li>
                        })
                    }
                </ul>
            </>
        )
    }
    onTodoChange = (e) => {
     this.setState({
         todo: e.target.value
     })
    }
    addTodo=()=>{
        this.setState({
            //create a new state array with existing values and adding new values always when fire so use spresd operators 
            todos : [
                ...this.state.todos,
                this.state.todo
            ],
            todo :''
        })
    }
    removeTodo=(todo)=>{
       this.setState({
           todos : this.state.todos.filter((currentTodo)=>{
               return currentTodo !== todo;
           })
       })
    }
}
export default Todos;