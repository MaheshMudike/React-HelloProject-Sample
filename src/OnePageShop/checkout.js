import React, { Component }from 'react';
// import BookList from './BookList';
// import WhichList from './WhichList';

class Checkout extends Component{
    constructor(props){
        super(props);
        this.state ={
            orderTotal:props.orderTotal
        }
    }
    componentWillReceiveProps(newProp){
        this.setState({
            orderTotal : newProp.orderTotal
        })
    }
    render(){
        return(
            <React.Fragment>
           <h1>Checkout</h1>
           <p>Total : {this.state.orderTotal}</p>
            </React.Fragment>
            
        )
    }
}
export default Checkout;