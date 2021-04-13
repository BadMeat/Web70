import React, { Component } from "react";
import "./lib/bootstrap/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./lib/font-awesome/css/font-awesome.min.css";
import "./lib/prettyphoto/css/prettyphoto.css";
import "./lib/hover/hoverex-all.css";
import "./lib/jetmenu/jetmenu.css";
import "./lib/owl-carousel/owl-carousel.css";
import "./css/style.css";
import "./css/colors/blue.css";

class App extends Component {
  render() {
    return (
      <div>
        <body>
          <div class="topbar clearfix">
            <div class="container">
              <div class="col-lg-12 text-right">
                <div class="social_buttons">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Youtube"
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                  |
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Notifikasi"
                  >
                    <i class="fa fa-bell"></i>
                  </a>
                  <a
                    href="index.html"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Signout"
                  >
                    <i class="fa fa-sign-out"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </body>

        <header className="header">
          <div className="container">
            <div className="site-header clearfix">
              <div className="col-lg-3 col-md-3 col-sm-12 title-area">
                <div className="site-title" id="title">
                  <a href="index.html" title="">
                    <h4>
                      PERPUSTAKAAN <span>SMAN 70</span>
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12">
                <div id="nav" className="right">
                  <div className="container clearfix">
                    <ul id="jetmenu" className="jetmenu blue">
                      <li className="active">
                        <a href="home.html">
                          <i className="fa fa-home"></i> Home
                        </a>
                      </li>
                      <li>
                        <a href="#">Layanan</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Layanan Sirkulasi</a>
                          </li>
                          <li>
                            <a href="#">Layanan Referensi</a>
                          </li>
                          <li>
                            <a href="#">Layanan Bimbingan</a>
                          </li>
                          <li>
                            <a href="#">Layanan Keanggotaan</a>
                          </li>
                          <li>
                            <a href="#">Layanan Peminjaman Buku</a>
                          </li>
                          <li>
                            <a href="#">Layanan Kerjasama</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="profil.html">Profil</a>
                        <ul class="dropdown">
                          <li>
                            <a href="profil.html">Visi Misi</a>
                          </li>
                          <li>
                            <a href="#">Tujuan</a>
                          </li>
                          <li>
                            <a href="#">Struktur Organisasi Perpustakaan</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">O P A C</a>
                        <ul class="dropdown">
                          <li>
                            <a href="#">Visitor Counter</a>
                          </li>
                          <li>
                            <a href="#">Sistem Perpustakaan</a>
                          </li>
                          <li>
                            <a href="#">e-DTS</a>
                          </li>
                          <li>
                            <a href="#">e-DDC</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Laporan</a>
                        <ul class="dropdown">
                          <li>
                            <a href="#">Bulanan</a>
                          </li>
                          <li>
                            <a href="#">Triwulan</a>
                          </li>
                          <li>
                            <a href="#">Tahunan</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Aktivitas</a>
                        <ul class="dropdown">
                          <li>
                            <a href="#">Program Unggulan</a>
                          </li>
                          <li>
                            <a href="#">Prestasi</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="intro">
          <div class="container">
            <div class="ror">
              <div class="col-md-8 col-md-offset-2">
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

        <section class="section1">
          <div class="container">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="servicebox text-center">
                <div class="service-icon">
                  <div class="dm-icon-effect-1" data-effect="slide-left">
                    <a href="#" class="">
                      {" "}
                      <i class="active dm-icon fa fa-bars fa-3x"></i>{" "}
                    </a>
                  </div>
                  <div class="servicetitle">
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

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="servicebox text-center">
                <div class="service-icon">
                  <div class="dm-icon-effect-1" data-effect="slide-bottom">
                    <a href="#" class="">
                      {" "}
                      <i class="active dm-icon fa fa-laptop fa-3x"></i>{" "}
                    </a>
                  </div>
                  <div class="servicetitle">
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

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="servicebox text-center">
                <div class="service-icon">
                  <div class="dm-icon-effect-1" data-effect="slide-right">
                    <a href="#" class="">
                      {" "}
                      <i class="active dm-icon fa fa-book fa-3x"></i>{" "}
                    </a>
                  </div>
                  <div class="servicetitle">
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

        <section class="section3 text-center">
          <div class="general-title">
            <h3>Koleksi Buku Terbaru</h3>
            <hr />
          </div>
          <div class="portfolio-wrapper">
            <div id="owl-demo" class="owl-carousel">
              <div class="item">
                <a data-rel="prettyPhoto" href="./img/portfolio_01.jpg">
                  <img
                    class="lazyOwl"
                    src={require("./img/portfolio_01.jpg")}
                    data-src={require("./img/portfolio_01.jpg")}
                    alt=""
                  />
                  <div>
                    <span>Hobi dan Minat</span>
                    <i class="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div class="item">
                <a data-rel="prettyPhoto" href="./img/portfolio_02.jpg">
                  <img
                    class="lazyOwl"
                    src={require("./img/portfolio_02.jpg")}
                    data-src="img/portfolio_02.jpg"
                    alt=""
                  />
                  <div>
                    <span>Buku TIK</span>
                    <i class="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div class="item">
                <a href="single-portfolio-1.html">
                  <img
                    class="lazyOwl"
                    src="img/portfolio_07.jpg"
                    data-src="img/portfolio_07.jpg"
                    alt=""
                  />
                  <div>
                    <span>Buku IPA</span>
                    <i class="fa fa-link"></i>
                  </div>
                </a>
              </div>
              <div class="item">
                <a href="single-portfolio-1.html">
                  <img
                    class="lazyOwl"
                    src="img/portfolio_05.jpg"
                    data-src="img/portfolio_05.jpg"
                    alt=""
                  />
                  <div>
                    <span>Buku IPS</span>
                    <i class="fa fa-link"></i>
                  </div>
                </a>
              </div>
              <div class="item">
                <a data-rel="prettyPhoto" href="img/portfolio_09.jpg">
                  <img
                    class="lazyOwl"
                    src="img/portfolio_09.jpg"
                    data-src="img/portfolio_09.jpg"
                    alt=""
                  />
                  <div>
                    <span>Project Name Here</span>
                    <i class="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div class="item">
                <a data-rel="prettyPhoto" href="img/portfolio_10.jpg">
                  <img
                    class="lazyOwl"
                    src="img/portfolio_10.jpg"
                    data-src="img/portfolio_10.jpg"
                    alt=""
                  />
                  <div>
                    <span>Project Name Here</span>
                    <i class="fa fa-search"></i>
                  </div>
                </a>
              </div>
              <div class="item">
                <a data-rel="prettyPhoto" href="img/portfolio_06.jpg">
                  <img
                    class="lazyOwl"
                    src="img/portfolio_06.jpg"
                    data-src="img/portfolio_06.jpg"
                    alt=""
                  />
                  <div>
                    <span>Project Name Here</span>
                    <i class="fa fa-search"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="section4">
          <div class="container">
            <div class="col-lg-6 col-md-6 col-sm-12 columns">
              <div class="widget" data-effect="slide-left">
                <img src={require("./img/slider_02.png")} alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 columns">
              <div class="widget clearfix">
                <div class="services_lists">
                  <div class="services_lists_boxes clearfix">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                      <div
                        class="services_lists_boxes_icon"
                        data-effect="slide-bottom"
                      >
                        <a href="#" class="">
                          {" "}
                          <i class="active dm-icon-medium fa fa-key fa-2x"></i>{" "}
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9">
                      <div class="servicetitle">
                        <h4>Create an Account</h4>
                        <hr />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry"s standard dummy text ever since..
                      </p>
                    </div>
                  </div>

                  <div class="services_lists_boxes clearfix">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                      <div
                        class="services_lists_boxes_icon"
                        data-effect="slide-bottom"
                      >
                        <a href="#" class="">
                          {" "}
                          <i class="active dm-icon-medium fa fa-download fa-2x"></i>{" "}
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9">
                      <div class="servicetitle">
                        <h4>Upload Your Works</h4>
                        <hr />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry"s standard..
                      </p>
                    </div>
                  </div>

                  <div class="services_lists_boxes clearfix">
                    <div class="col-lg-3 col-md-3 col-sm-12">
                      <div
                        class="services_lists_boxes_icon_none"
                        data-effect="slide-bottom"
                      >
                        <a href="#" class="">
                          {" "}
                          <i class="active dm-icon-medium fa fa-dollar fa-2x"></i>{" "}
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9">
                      <div class="servicetitle">
                        <h4>Earn Money</h4>
                        <hr />
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the industry. Lorem
                        Ipsum has been the industry"s standard dummy text ever
                        since..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <div class="widget col-lg-3 col-md-3 col-sm-12">
              <h4 class="title">Tentang Kami</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry"s standard dummy
                text ever since the 1500s..
              </p>
              <a class="button small" href="#">
                read more
              </a>
            </div>
            <div class="widget col-lg-3 col-md-3 col-sm-12">
              <h4 class="title">Koleksi Buku Baru</h4>
              <ul class="recent_posts">
                <li>
                  <a href="home1.html#">
                    <img src={require("./img/portfolio_10.jpg")} alt="" />
                    Our New Dashboard Is Here
                  </a>
                  <a class="readmore" href="#">
                    read more
                  </a>
                </li>
                <li>
                  <a href="home1.html#">
                    <img src={require("./img/portfolio_05.jpg")} alt="" />
                    Design Is In The Air
                  </a>
                  <a class="readmore" href="#">
                    read more
                  </a>
                </li>
              </ul>
            </div>
            <div class="widget col-lg-3 col-md-3 col-sm-12">
              <h4 class="title">Prestasi</h4>
              <ul class="recent_posts">
                <li>
                  <a href="home1.html#">
                    <img src={require("./img/portfolio_08.jpg")} alt="" />
                    Our New Dashboard Is Here
                  </a>
                  <a class="readmore" href="#">
                    read more
                  </a>
                </li>
                <li>
                  <a href="home1.html#">
                    <img src={require("./img/portfolio_09.jpg")} alt="" />
                    Design Is In The Air
                  </a>
                  <a class="readmore" href="#">
                    read more
                  </a>
                </li>
              </ul>
            </div>
            <div class="widget col-lg-3 col-md-3 col-sm-12">
              <h4 class="title">Hubungi Kami</h4>
              <ul class="contact_details">
                <li>
                  <i class="fa fa-envelope-o"></i> info@perpustakaansman70.com
                </li>
                <li>
                  <i class="fa fa-phone-square"></i> +21 1234 5678
                </li>
                <li>
                  <i class="fa fa-home"></i> Jl. Bulungan Blk. C No.1,
                  RT.11/RW.7, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12130
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-map-marker"></i> View large map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="copyrights">
            <div class="container">
              <div class="col-lg-6 col-md-6 col-sm-12 columns footer-left">
                <p>Copyright © 2021 - All rights reserved.</p>
                <div class="credits"></div>
              </div>
            </div>
          </div>
        </footer>

        <script src="./lib/jquery/jquery.min.js"></script>
        <script src="./lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="./lib/php-mail-form/validate.js"></script>
        <script src="./lib/prettyphoto/js/prettyphoto.js"></script>
        <script src="./lib/isotope/isotope.min.js"></script>
        <script src="./lib/hover/hoverdir.js"></script>
        <script src="./lib/hover/hoverex.min.js"></script>
        <script src="./lib/unveil-effects/unveil-effects.js"></script>
        <script src="./lib/owl-carousel/owl-carousel.js"></script>
        <script src="./lib/jetmenu/jetmenu.js"></script>
        <script src="./lib/animate-enhanced/animate-enhanced.min.js"></script>
        <script src="./lib/jigowatt/jigowatt.js"></script>
        <script src="./lib/easypiechart/easypiechart.min.js"></script>
      </div>
    );
  }
}

export default App;
