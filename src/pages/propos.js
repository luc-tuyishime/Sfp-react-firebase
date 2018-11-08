import React, { Component } from "react"
import Navbar from "../components/navbar"
import Jumbotron from "../componentBlog/jumbotron"
import Jumbotron2 from "../components/jumbotron2"
import Grid from "../componentPropos/Grid"

export default class Propos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Grid />
      </div>
    )
  }
}
