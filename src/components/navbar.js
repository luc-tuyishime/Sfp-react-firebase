import React, { Component } from "react"
import { Link } from "react-router-dom"
import fire from "../config/fire"
import Logo from "../img/logo.png"
import "../App.css"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    fire.auth().signOut()
  }
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center bg-navbar fixed-top">
        <Link to="/">
          <h5 className="my-0 mr-md-auto font-weight-normal">
            {" "}
            <img className="img-fluid logo-img" src={Logo} alt="logo" />
          </h5>
        </Link>
        <nav className="mx-auto">
          <Link to="/">
            <a className="p-2 text-link" href="#">
              Acceuil
            </a>
          </Link>
          <Link to="/activites">
            <a className="p-2 text-link" href="#">
              Mes activites
            </a>
          </Link>
          <Link to="/blog">
            <a className="p-3 text-link" href="#">
              Blog
            </a>
          </Link>
          <Link to="/a-propos">
            <a className="p-2 text-link" href="#">
              A propos
            </a>
          </Link>
        </nav>
        <a className="btn btn-outline-primary" onClick={this.logout}>
          Deconnexion
        </a>
      </div>
    )
  }
}

export default Navbar
