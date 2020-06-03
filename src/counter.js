import React, { Component }  from 'react'

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            count : 0,
            disabled : true
        }
    }
    render(){
        return(
            <div>
            <h1>Counter :</h1>
            <h3>{this.state.count}</h3>
            <button onClick = {this.increment}>Increment </button>&nbsp;&nbsp;
            <button onClick = {this.decrement} disabled = {this.state.disabled}>Decrement </button>
            </div>
        )
    }
    increment =() =>{
        this.setState({
           
            count : this.state.count + 1,
            disabled : false,
            //animals =['dog', 'cow','tiger','lion']
        })
    }
    decrement =()=> {
        this.setState({
            count : this.state.count - 1,
           // disabled : (this.state.count === 1) ? true : false
        },()=>{
            if(this.state.count === 0){
                this.setState({
                  disabled : true
                })
            }
        })
    }
}
export default Counter;