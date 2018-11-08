import React, { Component } from "react"
import { Link } from "react-router-dom"
import fire from "../config/fire"
import "../App.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.signup = this.signup.bind(this)
    this.state = {
      email: "",
      password: ""
    }
  }

  login(e) {
    e.preventDefault()
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error)
      })
  }

  signup(e) {
    e.preventDefault()
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error)
      })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-4 offset-md-4">
          <div className="jumbo-container22">
            <div className="user">
              <div className="alert alert-warning" role="alert">
                Remplissez les formulaires et cliquez sur Inscription si vous
                n'avez pas de compte, sinon connectez-vous
              </div>
              <form id="form">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Addresse email</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    className="form-control form_"
                    name="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Nous ne partagerons jamais votre email avec qui que ce soit.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Mot de Passe</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control form_"
                    id="exampleInputPassword1"
                    placeholder="mot de passe"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={this.login}
                  className="btn btn-primary btn-style"
                >
                  Se connecter
                </button>
                <button
                  type="submit"
                  onClick={this.signup}
                  style={{ marginLeft: "25px" }}
                  className="btn btn-primary btn-style2"
                >
                  Inscription
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
