import React from 'react'
import Product from './Products/Product'
import Admin from './Products/Admin'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import About from './Products/About'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/product" component={Product} />
          <Route path="/admin" component={Admin} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App