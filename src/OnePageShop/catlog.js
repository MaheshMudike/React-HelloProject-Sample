import React, { Component }from 'react';
 import Item from './item';
// import WhichList from './WhichList';

class Catlog extends Component{
    constructor(props){
        super(props);

        this.state = {
            items : props.items
        }
    }
    addToCart=(item)=>{
        console.log(JSON.stringify(item))
        this.props.addToCart(item);

    }
    render(){
        return(
            <React.Fragment>
           <h1>CartLog</h1>
           {
               this.state.items.map((item)=>{
                   return <Item  key={item.id} items={item} addToCart = {this.addToCart} iscart={false}/>
               })
           }
            </React.Fragment>
        
        )
    }
  
}
export default Catlog;