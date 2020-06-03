import React, { Component }from 'react';
// import BookList from './BookList';
// import WhichList from './WhichList';

class Item extends Component{
    constructor(props){
        super(props);

        this.state = {
            item : props.items,
            iscart:props.iscart
        }
    }
    add=()=>{
        this.props.addToCart(this.state.item);
    }
    remove =()=>{
        this.props.removeFromCart(this.state.item)
    }
    render(){
        return(
            <React.Fragment>
            <h1>{this.state.item.name}</h1>
            <p>price : {this.state.item.price}</p>
            
            {
                (this.state.iscart === true) ? (<><p>Qty : {this.state.item.qty}</p>
                <button onClick = {this.remove}>Remove</button></>) :
                (<button onClick = {this.add}>Add to Cart</button>)

            }
            
            </React.Fragment>
           
        )
    }
   
}
export default Item;