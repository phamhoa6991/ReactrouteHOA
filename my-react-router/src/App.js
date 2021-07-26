import React, { Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from "./components/Products"
import About from './components/About'
import Error from './components/Error'
import './App.css'



const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/about' component={About} />
        <Route path='/:somestring' component={Error} />
      </Switch>
    </Router>
  )
}






export default App;
