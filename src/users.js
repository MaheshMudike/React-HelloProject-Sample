import React, { Component } from 'react';

class Users extends Component{
    constructor(){
        super();
        this.state = {
          users : [],
          loading:true,
          error : false,
        }
    }
    componentDidMount(){
     
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({
                users:users,
                loading:false,
                error : false,
            })
        })
        .catch((error)=>{
            this.setState({
                loading:false,
                error : true,
            })
        })
    }
    render(){
        if(this.state.loading === true){
            return(
         <React.Fragment>
             <h1>Users</h1>
             <p>Loading...please wait</p>
         </React.Fragment>
            )
        }
        if(this.state.error === true){
            return(
            <React.Fragment>
                <h1>Users</h1>
                <p>Sorry...Our Server is Down Please try again</p>
            </React.Fragment>
            )
           }
        return(
            <React.Fragment>
                <h1>Users</h1>
                <ul>
                {
                    this.state.users.map(user=>{
                 return  <li key={user.id}>{user.name}</li>
                    })
                }
                </ul>
            </React.Fragment>
        )
    }
}

export default Users;
