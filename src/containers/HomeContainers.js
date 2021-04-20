import React, { Component } from "react";
import FormIsianModal from "../components/modals/FormIsianModal";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../lib/owl-carousel/owl-carousel.css";

class HomeContainers extends Component {
  state = {
    modalIsianShow: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  modalIsClick = (bool) => {
    this.setState({
      modalIsianShow: bool,
    });
  };

  render() {
    return (
      <div>
        {/* <button onClick={() => this.modalIsClick(true)}>Modal dong pak</button> */}
        <FormIsianModal
          show={this.state.modalIsianShow}
          onHide={() => this.modalIsClick(false)}
        />
        <section id="intro">
          <div className="container">
            <div className="ror">
              <div className="col-md-8 col-md-offset-2">
                <h1>Perpustakaan SMAN 70 Jakarta</h1>
                <p>
                  Terwujudnya Perpustakaan yang Respresentatif sebagai penyedia
                  informasi ilmu pengetahuan, teknologi, seni dan agama
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
                    Kumpulan kegiatan yang Inovasi dan kreatif yang yang
                    dikelola oleh Perpustakaan SMAN 70 Jakarta
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
                    Search Engine untuk pencarian buku di perpustakaan SMAN 70
                    Jakarta
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
                    Layanan Sirkulasi merupakan layanan peminjaman dan
                    pengembalian buku, dengan batas peminjaman selama 7 hari
                    sejak awal peminjaman
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
                <a data-rel="prettyPhoto">
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
                <a data-rel="prettyPhoto">
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
                <a>
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
                <a>
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
                <a data-rel="prettyPhoto">
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
                <a data-rel="prettyPhoto">
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
                <a data-rel="prettyPhoto">
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
