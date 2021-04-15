import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class Headers extends Component {
  state = {
    layanan: false,
    profil: false,
    opac: false,
    laporan: false,
    aktivitas: false,
    homeActive: "active",
    layananActive: "inactive",
    profilActive: "inactive",
    opacActive: "inactive",
    laporanActive: "inactive",
    aktivitasActive: "inactive",
  };

  setHover = (property) => {
    this.setState({
      homeActive: "inactive",
      layananActive: "inactive",
      profilActive: "inactive",
      opacActive: "inactive",
      laporanActive: "inactive",
      aktivitasActive: "inactive",
      layanan: false,
      profil: false,
      opac: false,
      laporan: false,
      aktivitas: false,
      [property]: "active",
    });
  };

  showLayananDropdown = (e) => {
    this.setState({
      layanan: !this.state.layanan,
    });
  };

  hideLayananDropdown = (e) => {
    this.setState({
      layanan: false,
    });
  };

  showProfilDropdown = () => {
    this.setState({
      profil: !this.state.profil,
    });
  };

  hideProfilDropdown = () => {
    this.setState({
      profil: false,
    });
  };

  showOpacDropdown = (e) => {
    this.setState({
      opac: !this.state.opac,
    });
  };

  hideOpacDropdown = (e) => {
    this.setState({
      opac: false,
    });
  };

  showLaporanDropdown = (e) => {
    this.setState({
      laporan: !this.state.laporan,
    });
  };

  hideLaporanDropdown = (e) => {
    this.setState({
      laporan: false,
    });
  };

  showAktivitasDropdown = (e) => {
    this.setState({
      aktivitas: !this.state.aktivitas,
    });
  };

  hideAktivitasDropdown = (e) => {
    this.setState({
      aktivitas: false,
    });
  };

  navToSirkulasi = () => {
    this.setHover("layananActive");
    this.props.setLayanan("sirkulasi");
  };

  navToAnak = () => {
    this.setHover("layananActive");
    this.props.setLayanan("anak");
  };

  navToScroolBot = (type) => {
    this.setHover("layananActive");
    this.props.setLayanan(type);
  };

  render() {
    return (
      <div>
        {/* <body> */}
        <div className="topbar clearfix">
          <div className="container">
            <div className="col-lg-12 text-right">
              <div className="social_buttons">
                <a
                  // href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  // href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  // href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  // href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Youtube"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a
                  // href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="LinkedIn"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                |
                <a
                  // href="/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Notifikasi"
                >
                  <i className="fa fa-bell"></i>
                </a>
                <a
                  // href="index.html"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Signout"
                >
                  <i className="fa fa-sign-out"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </body> */}

        <header className="header">
          <div className="container">
            <div className="site-header clearfix">
              <div className="col-lg-3 col-md-3 col-sm-12 title-area">
                <div
                  className="site-title"
                  id="title"
                  onClick={() => this.setHover("homeActive")}
                >
                  <h4>
                    <NavLink to={"/"}>
                      PERPUSTAKAAN <span>SMAN 70</span>
                    </NavLink>
                  </h4>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12">
                <div id="nav" className="right">
                  <div className="container clearfix">
                    <ul id="jetmenu" className="jetmenu blue">
                      <li className={this.state.homeActive}>
                        <a>
                          <Nav.Item>
                            <Nav.Link className="fa fa-home">
                              <NavLink to={"/"}> Home</NavLink>
                            </Nav.Link>
                          </Nav.Item>
                        </a>
                      </li>
                      <li
                        onClick={this.showLayananDropdown}
                        // onMouseEnter={this.showLayananDropdown}
                        onMouseLeave={this.hideLayananDropdown}
                        className={this.state.layananActive}
                      >
                        <a>
                          <NavDropdown
                            title="Layanan"
                            id="collasible-nav-dropdown"
                            show={this.state.layanan}
                          >
                            <NavDropdown.Item
                              onClick={() => this.navToScroolBot("anak")}
                            >
                              <NavLink
                                style={{ color: "black" }}
                                to={"/layanan"}
                              >
                                Layanan Anak
                              </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.navToScroolBot("sirkulasi")}
                            >
                              <NavLink
                                style={{ color: "black" }}
                                to={"/layanan"}
                              >
                                Layanan Sirkulasi
                              </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.navToScroolBot("referensi")}
                            >
                              Layanan Referensi
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.navToScroolBot("bimbingan")}
                            >
                              Layanan Bimbingan Pemustaka
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.navToScroolBot("keanggotaan")}
                            >
                              Layanan Keanggotaan
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.navToScroolBot("kerjasama")}
                            >
                              Layanan Kerjasama
                            </NavDropdown.Item>
                          </NavDropdown>
                        </a>
                      </li>
                      <li
                        onClick={this.showProfilDropdown}
                        // onTouchStart={this.showProfilDropdown}
                        onMouseLeave={this.hideProfilDropdown}
                        className={this.state.profilActive}
                      >
                        <a>
                          <NavDropdown
                            title="Profil"
                            id="collasible-nav-dropdown"
                            show={this.state.profil}
                          >
                            <NavDropdown.Item
                              onClick={() => this.setHover("profilActive")}
                            >
                              <NavLink
                                style={{ color: "black" }}
                                to={"/profile"}
                              >
                                Visi Misi
                              </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("profilActive")}
                            >
                              Tujuan
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("profilActive")}
                            >
                              Struktur Organisasi Perpustakaan
                            </NavDropdown.Item>
                          </NavDropdown>
                        </a>
                      </li>
                      <li
                        onClick={this.showOpacDropdown}
                        onMouseLeave={this.hideOpacDropdown}
                        className={this.state.opacActive}
                      >
                        <a>
                          <NavDropdown
                            title="O P A C"
                            id="collasible-nav-dropdown"
                            show={this.state.opac}
                          >
                            <NavDropdown.Item
                              onClick={() => this.setHover("opacActive")}
                            >
                              Visitor Counter
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("opacActive")}
                            >
                              Sistem Perpustakaan
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("opacActive")}
                            >
                              e-DTS
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("opacActive")}
                            >
                              e-DDC
                            </NavDropdown.Item>
                          </NavDropdown>
                        </a>
                      </li>
                      <li
                        onClick={this.showLaporanDropdown}
                        onMouseLeave={this.hideLaporanDropdown}
                        className={this.state.laporanActive}
                      >
                        <a>
                          <NavDropdown
                            title="Laporan"
                            id="collasible-nav-dropdown"
                            show={this.state.laporan}
                          >
                            <NavDropdown.Item
                              onClick={() => this.setHover("laporanActive")}
                            >
                              <NavLink
                                style={{ color: "black" }}
                                to={"/laporanBulanan"}
                              >
                                {" "}
                                Bulanan
                              </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("laporanActive")}
                            >
                              <NavLink
                                style={{ color: "black" }}
                                to={"/laporanTriwulan"}
                              >
                                {" "}
                                Triwulan
                              </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("laporanActive")}
                            >
                              Tahunan
                            </NavDropdown.Item>
                          </NavDropdown>
                        </a>
                      </li>
                      <li
                        onClick={this.showAktivitasDropdown}
                        onMouseLeave={this.hideAktivitasDropdown}
                        className={this.state.aktivitasActive}
                      >
                        <a>
                          <NavDropdown
                            title="Aktivitas"
                            id="collasible-nav-dropdown"
                            show={this.state.aktivitas}
                          >
                            <NavDropdown.Item
                              onClick={() => this.setHover("aktivitasActive")}
                            >
                              Program Unggulan
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                              onClick={() => this.setHover("aktivitasActive")}
                            >
                              Prestasi
                            </NavDropdown.Item>
                          </NavDropdown>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Headers;
