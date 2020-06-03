import React , {Component} from 'react'

class GreetingsGenerator extends Component {
    constructor(){
       super();
       this.state ={
           greeting: '',
           name: ''
       }

    }
    render(){
        return(
            // <Fragment or leave it empty tags also works if we import Fragmet
            <React.Fragment>
            <h1>Greetings Generator</h1>
            <input type = "text" name = "name" value ={this.state.name} onChange={this.onNameChange}/>&nbsp;
            <button onClick={this.generate}>Generator</button>
            <h3>{this.state.greeting}</h3>
            </React.Fragment>
        )
    }
    onNameChange=(e)=>{
        console.log(e.target.value)
     this.setState({
         name: e.target.value
     })
    }
    generate=()=>{
        this.setState({
            greeting : `Happy Birthday ${this.state.name}`,
            name :''
        })
    }
}
export default GreetingsGenerator;