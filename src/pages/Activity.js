import React, { Component } from "react"
import Navbar from "../components/navbar"
import Jumbotron from "../componentsActivities/Jumbotron1"
import Jumbotron2 from "../components/jumbotron2"

export default class Activity extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    )
  }
}
