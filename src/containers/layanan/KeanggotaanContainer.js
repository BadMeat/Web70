import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
class KeanggotaanContainer extends Component {
  render() {
    return (
      <Auxiliary>
        <section className="post-wrapper-top">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Layanan Anggota</li>
              </ul>
              <h2>LAYANAN ANGGOTA</h2>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  Merupakan layanan mengadministrasikan data anggota untuk
                  memudahkan proses layanan pengguna perpustakaan.
                </p>
                <p>Prosedur layanan ini meliputi:</p>
                <p>
                  <img
                    className="img-responsive "
                    src={require("../../img/img-anggota.JPG")}
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}
export default KeanggotaanContainer;
