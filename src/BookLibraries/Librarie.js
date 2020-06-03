import React, { Component }from 'react';
import BookList from './BookList';
import WhichList from './WhichList';

class Librarie extends Component{
    constructor(){
        super();
        var books = [{id:1 , title: "js" , author:"jhon"},
        {id:2 , title: "reactJs" , author:"ravi"},{id:3 , title: "node" , author:"ram"},]
        
        this.state={
         books : books,
         whichList :[]
        }
    }
    addToWhichList =(book)=>{
        console.log(this.state.whichList)
        console.log(JSON.stringify(book));
        this.setState({
            whichList : [
                  ...this.state.whichList,
                book
            ]
        })
       }

    render(){
        return(
            <React.Fragment>
         <h1>My WishList Library</h1>
         <BookList books={this.state.books} addToWhichList={this.addToWhichList}/>
         <WhichList books={this.state.whichList} />
         </React.Fragment>
            
        )
    }
}
   
export default Librarie;