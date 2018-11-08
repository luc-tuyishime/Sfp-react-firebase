import React, { Component } from "react"
import Navbar from "../components/navbar"
import DivOne from "../components/Div1"
import DivTwo from "../components/Div2"
import Jumbotron from "../components/jumbotron"
import Jumbotron2 from "../components/jumbotron2"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <DivOne />
        <Jumbotron2 />
        <DivTwo />
      </div>
    )
  }
}
