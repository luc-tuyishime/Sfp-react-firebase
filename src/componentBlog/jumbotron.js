import React, { Component } from "react"
import "../App.css"

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbo6 jumbotron-fluid horizontal">
          <div className="container jumbo-container">
            <div className="row h-100">
              <div className="col-sm-12 my-auto">
                <div className="subtitle-content">
                  <div className="col-md-6">
                    <h1 className="home-title home-padding">Blog</h1>
                    <p className="home-subtitle">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
