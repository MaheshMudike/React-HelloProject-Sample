import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';

import Navigate from './navigate';
import Shop from './OnePageShop/shop.js';



// Friends is default Export and Friend is Sub Export in Component 
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// 

class App extends Component{
  
  render(){
     return (
       <div className = "App">
       <header className = "App-header">
         {/* <Welcome title ="verma"/>
         <Welcome title ="Ravi"/> */}
         <Welcome title = 'Mahesh' />
       </header>
       <Navigate/>
       <Shop/>
       {/* <Router  history = {browserHistory}> */}
       {/* <Route path ="/" > */}
         {/* <App/>
  </Route>
  <Route path ="/home" >
         <HomePage/>
  </Route> */}
       {/* </Router> */}
       {/* <GreetingsGenerator/>
       <Todos/>
       <Library/>
       <Users/>
       <Counter/>
       <Friends/>
       <Friend/> */}
       </div>
     )
   }

}
export default App;
