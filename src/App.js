import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
import Activity from "./pages/Activity"
import Blog from "./pages/Blog"
import Propos from "./pages/propos"
import fire from "./config/fire"
import Login from "./auth/login"
import Home from "./pages/Home"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      //  console.log(user)
      if (user) {
        this.setState({ user })
        //  localstorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null })
        //  localstorage.removeItem('user')
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {this.state.user ? (
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/activites" component={Activity} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/a-propos" component={Propos} />
              </div>
            ) : (
              <Login />
            )}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
