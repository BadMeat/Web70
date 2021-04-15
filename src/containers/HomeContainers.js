import React, { Component } from "react";
import "../lib/bootstrap/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../lib/font-awesome/css/font-awesome.min.css";
// import "../lib/prettyphoto/css/prettyphoto.css";
// import "../lib/hover/hoverex-all.css";
// import "../lib/jetmenu/jetmenu.css";
import "../lib/owl-carousel/owl-carousel.css";
// import "../css/style.css";
// import "../css/colors/blue.css";

class HomeContainers extends Component {
  render() {
    return (
      <div>
        <section id="intro">
          <div className="container">
            <div className="ror">
              <div className="col-md-8 col-md-offset-2">
                <h1>Perpustakaan SMAN 70 Jakarta</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="servicebox text-center">
                <div className="service-icon">
                  <div className="dm-icon-effect-1" data-effect="slide-left">
                    <a href="/" className="">
                      {" "}
                      <i className="active dm-icon fa fa-bars fa-3x"></i>{" "}
                    </a>
                  </div>
                  <div className="servicetitle">
                    <h4>Program Unggulan</h4>
                    <hr />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry"s
                    standard dummy text ever since..
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="servicebox text-center">
                <div className="service-icon">
                  <div className="dm-icon-effect-1" data-effect="slide-bottom">
                    <a href="/" className="">
                      {" "}
                      <i className="active dm-icon fa fa-laptop fa-3x"></i>{" "}
                    </a>
                  </div>
                  <div className="servicetitle">
                    <h4>Sistem Perpustakaan</h4>
                    <hr />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry"s
                    standard dummy text ever since..
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="servicebox text-center">
                <div className="service-icon">
                  <div className="dm-icon-effect-1" data-effect="slide-right">
                    <a href="/" className="">
                      {" "}
                      <i className="active dm-icon fa fa-book fa-3x"></i>{" "}
                    </a>
                  </div>
                  <div className="servicetitle">
                    <h4>Layanan Peminjaman Buku</h4>
                    <hr />
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry"s
                    standard dummy text ever since..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section3 text-center">
          <div className="general-title">
            <h3>Koleksi Buku Terbaru</h3>
            <hr />
          </div>
          <div className="portfolio-wrapper">
            <div id="owl-demo" className="owl-carousel">
              <div className="item">
                <a
                  data-rel="prettyPhoto"
                  href={require("../img/portfolio_01.jpg")}
                >
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_01.jpg")}
                    data-src={require("../img/portfolio_01.jpg")}
                    alt=""
                  />
                  <div>
                    <span>Hobi dan Minat</span>
                    <i className="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div className="item">
                <a
                  data-rel="prettyPhoto"
                  href={require("../img/portfolio_02.jpg")}
                >
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_02.jpg")}
                    data-src="../img/portfolio_02.jpg"
                    alt=""
                  />
                  <div>
                    <span>Buku TIK</span>
                    <i className="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="single-portfolio-1.html">
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_07.jpg")}
                    data-src="img/portfolio_07.jpg"
                    alt=""
                  />
                  <div>
                    <span>Buku IPA</span>
                    <i className="fa fa-link"></i>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="single-portfolio-1.html">
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_05.jpg")}
                    data-src="../img/portfolio_05.jpg"
                    alt=""
                  />
                  <div>
                    <span>Buku IPS</span>
                    <i className="fa fa-link"></i>
                  </div>
                </a>
              </div>
              <div className="item">
                <a data-rel="prettyPhoto" href="../img/portfolio_09.jpg">
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_09.jpg")}
                    data-src="../img/portfolio_09.jpg"
                    alt=""
                  />
                  <div>
                    <span>Project Name Here</span>
                    <i className="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div className="item">
                <a data-rel="prettyPhoto" href="../img/portfolio_10.jpg">
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_10.jpg")}
                    data-src="../img/portfolio_10.jpg"
                    alt=""
                  />
                  <div>
                    <span>Project Name Here</span>
                    <i className="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div className="item">
                <a data-rel="prettyPhoto" href="../img/portfolio_06.jpg">
                  <img
                    className="lazyOwl"
                    src={require("../img/portfolio_06.jpg")}
                    data-src="../img/portfolio_06.jpg"
                    alt=""
                  />
                  <div>
                    <span>Project Name Here</span>
                    <i className="fa fa-search"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default HomeContainers;
