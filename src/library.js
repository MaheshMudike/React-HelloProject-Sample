import React, { Component } from 'react'

const Book = (props) => {
    var todo = props.todo
    return (
        <tr key = {props.key}>
            <td>{todo.title}</td>
            <td>{todo.author}</td>
            <td><button onClick={() => {
                props.removeTodo(todo, props.key)
            }}>Remove</button></td>
        </tr>
    );
}

class Library extends Component {
    constructor() {
        super();
        this.state = {
            totalArray: [],
            title: '',
            // authors :[],
            author: ''
            // book ={
            //     title:'',
            //     author ; ''
            // }
        }
    }
    render() {
        return (
            <div>
                <h1>My Library</h1>
                <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.onTitleChange} />&nbsp;
                <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={this.onAuthorChange} />&nbsp;&nbsp;
                <button onClick={this.addData}>Add</button>&nbsp;&nbsp;
                <div>&nbsp;&nbsp;
          <table align="center" >
                        <tbody>
                            <tr>
                                <th>Tittle</th>
                                <th>AUthor</th>
                                <th>Remove</th>
                            </tr>
                            {this.state.totalArray.map((todo,index) => {
                                return  <Book key={index} todo={todo} remove={this.removeTodo}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    addData = () => {
        let some = {
            title: this.state.title,
            author: this.state.author,
        }
        this.setState({
            totalArray: [
                ...this.state.totalArray,
                some,

            ],
            author: '',
            title: ''
        })

    }
    removeTodo = (currentTodo, index) => {
        console.log(currentTodo)
        console.log(index)
        this.setState({
            totalArray: this.state.totalArray.filter((currentTodo) => {
                return currentTodo !== this.state.totalArray[index];
            })
        })
    }
}
export default Library;