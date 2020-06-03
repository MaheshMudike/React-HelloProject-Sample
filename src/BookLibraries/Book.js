import React, { Component }from 'react';

const Book22 = (props) => {
    var todo = props.todo
    return (
        <tr key = {props.key}>
            <td>{todo.title}</td>
            <td>{todo.author}</td>
            <td><button onClick={props.add}>Add WishList</button></td>
        </tr>
    );
}
class Book extends Component{
    constructor(props){
        super(props);
        this.state={
            books : [
                ...props.books, 
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.onTitleChange} />&nbsp;
                <input type="text" name="author" value={this.state.author} placeholder="Author" onChange={this.onAuthorChange} />&nbsp;&nbsp;
                <button onClick={this.addData}>Add</button>&nbsp;&nbsp;
                <div>&nbsp;&nbsp;
       <table align="center" >
                        <tbody>
                            <tr>
                                <th>Tittle</th>
                                <th>AUthor</th>
                                <th>Add WhichList</th>
                            </tr>
                            {this.state.books.map((todo,index) => {
                                return  <Book22 key={index} todo={todo} add={this.add}/>
                            })}
                        </tbody>
                    </table>
          </div>
            </React.Fragment>
            
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
            books: [
                ...this.state.books,
                some,

            ],
            author: '',
            title: ''
        })

    }
    add=(()=>{
        this.props.addToWhichList(this.state.books);
    })
}
export default Book;