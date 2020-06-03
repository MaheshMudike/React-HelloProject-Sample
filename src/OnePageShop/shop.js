import React, { Component } from 'react';
import Catlog from './catlog';
import Cart from './cart';
// import WhichList from './WhichList'; 
import './AllPageShop.css';
import Checkout from './checkout';

class Shop extends Component {
    constructor() {
        super();
        let items = [
            {
                id: 1,
                name: 'Pant',
                price: 300
            },
            {
                id: 2,
                name: 'Shirt',
                price: 200
            },
            {
                id: 3,
                name: 'Short',
                price: 100
            }
        ]
        this.state = {
            items: items,
            cartItems: [],
            orderTotal: 0
        }
    }
    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <h1>Shop</h1>
                    <div className="column">
                        <Catlog items={this.state.items} addToCart={this.addToCart} />
                    </div>
                    <div className="column">
                        <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart} />
                        <Checkout orderTotal={this.state.orderTotal} />
                    </div>
                </div>
            </React.Fragment>

        )
    }
    removeFromCart = (item) => {
        console.log(JSON.stringify(item));
        this.setState({
            cartItems: this.state.cartItems.filter((currentItem) => {
                return currentItem.id !== item.id
            })    
        }, () => {
            this.setState({
                orderTotal: this.state.cartItems.reduce((total, cartItem) => {
                    return total + cartItem.price * cartItem.qty
                },0)
            })
        })
    }
    addToCart = (item) => {
        console.log(JSON.stringify(item));

        let itemExist = this.state.cartItems.some((cartitem) => {
            return cartitem.id === item.id
        })
        if (itemExist === false) {
            //New Item
            item.qty = 1
            this.setState({
                cartItems: [
                    ...this.state.cartItems,
                    item
                ],
                orderTotal: this.state.cartItems.reduce((total, cartItem) => {
                    return total + cartItem.price * cartItem.qty
                }, 0) + item.price * item.qty
            })
        } else {
            //existing item 

            var ExistingItem = this.state.cartItems.find((cartitem) => {
                return cartitem.id === item.id
            })
            console.log(ExistingItem)
            ExistingItem.qty = ExistingItem.qty + 1;
            this.setState({
                cartItems: [
                    ...this.state.cartItems.filter((cartItem) => {
                        console.log(cartItem)
                        return cartItem.id !== item.id
                    }),
                    ExistingItem
                ],

            }, () => {
                this.setState({
                    orderTotal: this.state.cartItems.reduce((total, cartitem) => {
                        return total + cartitem.price * cartitem.qty
                    }, 0)
                })
            })
        }

        //   let itemExist = this.state.cartItems.some((cartItem)=>{
        //       return cartItem.id === item.id
        //   })
        //   if(itemExist === false){
        //       //New item
        //       item.qty = 1
        //       this.setState({
        //           cartItems : [
        //               ...this.state.cartItems,
        //               item
        //           ],
        //           orderTotal : this.state.cartItems.reduce((total,cartItem) =>{
        //             return total + item.price *  item.qty
        //           })+ item.price * item.qty
        //       }) 
        //   }else{
        //       //Existing Item

        //       var ExistingItem =  this.state.cartItems.find((catitem)=>{
        //           return cartItem.id === item.id
        //       })

        //     ExistingItem.qty = ExistingItem.qty +1;
        //     this.setState({
        //         cartItems : [
        //             ...this.state.cartItems.filter((items)=>{
        //                 return cartItem.id !== item.id
        //             }),
        //             ExistingItem
        //         ],
        //         orderTotal : this.state.cartItems.reduce((total,cartItem) =>{
        //           return total + item.price *  item.qty
        //         })+ item.price * item.qty
        //     }) 
        // }

    }
}
export default Shop;