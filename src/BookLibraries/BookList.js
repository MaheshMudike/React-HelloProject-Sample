import React, { Component }from 'react';
import Book from './Book'; 
class BookList extends Component{
    constructor(props){
        super(props);
        this.state={
          books : props.books
        }
    }
    render(){
        return(
            <React.Fragment>
          <h1>BookList</h1>
          {
              <Book books = {this.state.books } addToWhichList={this.addToWhichList}/>
            //   this.state.books.map((book)=>{
            //       return <Book key ={book.id} book={book} addToWhichList={this.addToWhichList}/>
            //   })
          }
            </React.Fragment>
            
        )
    }
    //call aback function in parent and sending as a prop to child above 
    addToWhichList = ((book)=>{
     console.log(JSON.stringify(book));
     this.props.addToWhichList(book)
    })
}
export default BookList;