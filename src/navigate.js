import React, { Component } from 'react'
import Library from './library';
import Users from './users';
import HomePage from './homePage';
import Counter from './counter';
import Friends , {Friend}  from './friends'
import GreetingsGenerator from './greetingsgenerator';
import Todos from './Todos';
import Librarie from './BookLibraries/Librarie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Navigate extends Component{
    constructor(){
      super();
    }
    render(){
        return(

            <Router>
            <header>
            <div>
            <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/users'} className="nav-link">Users</Link></li>
            <li><Link to={'/library'} className="nav-link">Library</Link></li>
            <li><Link to={'/friends'} className="nav-link"> Friends </Link></li>
            <li><Link to={'/greetingsGnerator'} className="nav-link">GreetingsGnerator</Link></li>
            <li><Link to={'/counter'} className="nav-link">Counter</Link></li>
            <li><Link to={'/todo'} className="nav-link">Todos</Link></li>
            <li><Link to={'/BookLibraries/Librarie'} className="nav-link">My WishList Library</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/users' component={Users} />
              <Route path='/library' component={Library} />
              <Route exact path='/friends' component={Friends} />
              <Route path='/greetingsGnerator' component={GreetingsGenerator} />
              <Route path='/counter' component={Counter} />
              <Route path='/todo' component={Todos} />
              <Route path='/BookLibraries/Librarie' component={Librarie  } />
          </Switch>
            </div>
            </header>
            </Router>
        )
    }
}
export default Navigate;