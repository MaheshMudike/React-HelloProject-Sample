import React,  {Component}  from 'react'

export class Friend extends Component{
render(){
    return(
        <p>is not default export Only 'Friends' is Default But 'Friend' is Named Export i,e Sub Export in a component,
            And Only One Default Export Will be in Component remaining can Sub Export in same Component Here Friends is
            Default Export and 'Freind' is Sub export in 'Freinds' Component </p>
    )
}
}
class Friends extends Component {
    constructor(){
        super();

        this.state ={
            friends : [ 'ram','ravi','hari', 'shiva ']
        }
    }
    render(){
        return (
            <div>
                <h1>Freinds :</h1>
                <ul>
                    {
                        this.state.friends.map((friend,index)=>{
                            return <li key={index}>{friend}</li>
                        })
                        //key used it creating id for every li tag So key prop  is mandatory when evenr use JSX 
                       // it purpose to identify elemet when using array to render 
                    }
                </ul>
            </div>
        )
    }
}
export default Friends