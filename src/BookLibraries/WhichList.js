import React, { Component }from 'react';

class WhichList extends Component{
    constructor(props){
        console.log("construtor"+props.books)
        super(props);
        this.state = {
             books : props.books
        }
    }

    //it will show Only 0 which list Because constructor wont fire when new props commming 
    //So we have new Life cycle meathod. i,e "componentWillReciveProps" it will fire always when new prop comes 
    
    componentWillReceiveProps(newProps){
        console.log(newProps.books)
    this.setState({
        books : newProps.books
    })
    }
    render(){
        
        return(
          <div>
            <h1>WhichList : {this.state.books.length}</h1>
            </div>
        )
    }
}
export default WhichList;