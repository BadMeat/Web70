import React, { Component } from "react";
import MapLocation from "../components/ui/MapLocation";

class ProfileContainers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section className="post-wrapper-top">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul className="breadcrumb">
                <li>
                  <a href="home.html">Home</a>
                </li>
                <li>Profil</li>
              </ul>
              <h2>PROFIL</h2>
            </div>
          </div>
        </section>
        <div id="visimisi"></div>
        <section className="section1">
          <div className="container clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 clearfix">
              <div className="general-title text-center">
                <h3>VISI MISI</h3>
                <hr />
              </div>
              <div className="divider"></div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="he-wrap tpl2">
                  <img
                    src={require("../img/intro-bg2.jpg")}
                    alt=""
                    className="img-responsive"
                  />
                  <div className="he-view">
                    <div className="bg a0" data-animate="fadeIn">
                      <div className="center-bar">
                        <a
                          href="/"
                          className="twitter a0"
                          data-animate="elasticInDown"
                        >
                          {" "}
                        </a>
                        <a
                          href="/"
                          className="facebook a1"
                          data-animate="elasticInDown"
                        >
                          {" "}
                        </a>
                        <a
                          href="/"
                          className="in a2"
                          data-animate="elasticInDown"
                        >
                          {" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="visimisi">
                  <div className="testimonial-meta">
                    <h4>VISI</h4>
                  </div>
                  <p>
                    “Terwujudnya perpustakaan yang representatif sebagai
                    penyedia informasi ilmu pengetahuan, teknologi, seni dan
                    agama.”
                  </p>
                </div>
                <div className="visimisi">
                  <div className="testimonial-meta">
                    <h4>MISI</h4>
                  </div>
                  <p>
                    <span
                      style={{ backgroundColor: "#3498db", color: "white" }}
                    >
                      {" "}
                      &nbsp; <span className="fa fa-chevron-right"></span>{" "}
                      Memberikan layanan yang ramah, tegas, tertib dan tangkas{" "}
                    </span>{" "}
                    <br />{" "}
                    <span
                      style={{ backgroundColor: "#EC407A", color: "white" }}
                    >
                      {" "}
                      &nbsp; <span className="fa fa-chevron-right"></span>
                      Penerapan teknologi informasi yang pada intinya bertumpu
                      pada konsep otomatisasi{" "}
                    </span>{" "}
                    &nbsp;{" "}
                    <span
                      style={{ backgroundColor: "#F1C40F", color: "white" }}
                    >
                      {" "}
                      &nbsp; <span className="fa fa-chevron-right"></span>{" "}
                      Meningkatkan kerjasama (resources sharing) dengan
                      perpustakaan dan pusat informasi lain.{" "}
                    </span>{" "}
                    &nbsp;{" "}
                    <span
                      style={{ backgroundColor: "#26A69A", color: "white" }}
                    >
                      {" "}
                      &nbsp; <span className="fa fa-chevron-right"></span>{" "}
                      Menjadikan perpustakaan sebagai pusat pendidikan di
                      lingkungan sekolah{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="struktur"></div>

        <div className="container">
          <div className="general-title text-center">
            <h3>STRUKTUR</h3>
            <hr />
          </div>

          <div className="stat f-container">
            <div className="f-element col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                <img src={require("../img/organisasi.png")} alt="organisasi" />
              </p>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
        <div id="denah"></div>
        <div className="divider"></div>

        <section className="section1">
          <div className="container">
            <div className="general-title text-center">
              <h3>DENAH LOKASI</h3>
              <hr />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="skills ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="profil_details">
                    <p>
                      <ul className="contact_details">
                        <li>
                          <i className="fa fa-home"></i> Jl. Bulungan Blk. C
                          No.1, RT.11/RW.7, Kramat Pela, Kec. Kby. Baru, Kota
                          Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>{" "}
                          info@perpustakaansman70.com
                        </li>
                        <li>
                          <i className="fa fa-phone-square"></i> +21 1234 5678
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
              <div className="skills">
                <div id="maplocation">
                  <MapLocation
                    mapboxApiAccessToken={
                      process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="clearfix"></div>
        <div className="divider"></div>
      </div>
    );
  }
}
export default ProfileContainers;
