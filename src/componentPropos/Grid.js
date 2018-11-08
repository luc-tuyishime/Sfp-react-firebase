import React, { Component } from "react"
import Img1 from "../img/img1.png"
import Img2 from "../img/img2.png"
import "../App.css"

class Grid extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid div2-padding">
          <div className="container">
            <p className="text-div2">Activites</p>
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" src={Img1} alt="img" />
              </div>
              <div className="col-md-6">
                <p className="text-div2">Nom de l'activite</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,.
                </p>
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
              </div>
            </div>
            <br /> <br />
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" src={Img2} alt="img" />
              </div>
              <div className="col-md-6">
                <p className="text-div2">Nom de l'activite</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
              </div>
            </div>
            <br /> <br />
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" src={Img1} alt="img" />
              </div>
              <div className="col-md-6">
                <p className="text-div2">Nom de l'activite</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
              </div>
            </div>
            <br /> <br />
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" src={Img2} alt="img" />
              </div>
              <div className="col-md-6">
                <p className="text-div2">Nom de l'activite</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Grid
