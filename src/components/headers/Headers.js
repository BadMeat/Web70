import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Collapse from "react-bootstrap/Collapse";
import MenuItemMobile from "./MenuItemMobile";
import MenuItemProfil from "./MenuProfil/MenuItemProfil";
import MenuItemOpac from "./MenuOpac/MenuItemOpac";
import MenuItemLaporan from "./MenuLaporan/MenuItemLaporan";
import MenuItemAktifitas from "./MenuAktifitas/MenuAktifitas";

const navLinkStyle = {
  color: "black",
  textDecoration: "none",
};

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
    isOpen: false,
    menuOpen: false,
  };

  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  handleLinkClick(e) {
    this.setState({ menuOpen: false });
  }

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
      isOpen: false,
      scrolled: false,
      menuIsOpen: false,
      menuLayananIsOpen: false,
      menuProfilIsOpen: false,
      menuOpacIsOpen: false,
      menuLaporanIsOpen: false,
      menuAktivitasIsOpen: false,
    });
    this.handleLinkClick();
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
    this.setState({
      isOpen: false,
    });
  };

  showSettings(event) {
    event.preventDefault();
  }

  handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  };

  setMenuCollapse = () => {
    this.setState({
      menuIsOpen: false,
      menuLayananIsOpen: false,
      menuProfilIsOpen: false,
      menuOpacIsOpen: false,
      menuLaporanIsOpen: false,
      menuAktivitasIsOpen: false,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      isOpen: false,
    });
  }

  setMenuIsOpen = (property, state) => {
    this.setState({
      [property]: !state,
    });
  };

  RenderMenu = () => {
    let x = ["jetmenu  blue"];
    if (this.state.scrolled) {
      x.push("scrolled");
    }

    if (isMobile) {
      return (
        <ul id="jetmenu" className={x.join(" ")}>
          <div
            style={{
              padding: "20px 20px 10px 20px",
              fontSize: "20px",
            }}
            onClick={() =>
              this.setState({ menuIsOpen: !this.state.menuIsOpen })
            }
            aria-controls="example-collapse-text"
            aria-expanded={this.state.menuIsOpen}
          >
            <div
              style={{
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                display: "flex",
              }}
            >
              Menu
              <img src={require("../../img/list.png")} alt="" />
            </div>
          </div>
          <Collapse in={this.state.menuIsOpen}>
            <div style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
              <div id="navcollpase" className={this.state.homeActive}>
                <NavLink
                  style={{ color: "black", fontSize: "15px" }}
                  // className="fa fa-home"
                  to={"/"}
                  onClick={this.setMenuCollapse}
                >
                  {" "}
                  Home
                </NavLink>
              </div>
              <MenuItemMobile
                menu={() =>
                  this.setMenuIsOpen(
                    "menuLayananIsOpen",
                    this.state.menuLayananIsOpen
                  )
                }
                setMenuCollapse={this.setMenuCollapse}
                menuIsOpen={this.state.menuLayananIsOpen}
                navToScroolBot={this.navToScroolBot}
              />
              <MenuItemProfil
                menu={() =>
                  this.setMenuIsOpen(
                    "menuProfilIsOpen",
                    this.state.menuProfilIsOpen
                  )
                }
                setMenuCollapse={this.setMenuCollapse}
                menuIsOpen={this.state.menuProfilIsOpen}
              />
              <MenuItemOpac
                menu={() =>
                  this.setMenuIsOpen(
                    "menuOpacIsOpen",
                    this.state.menuOpacIsOpen
                  )
                }
                setMenuCollapse={this.setMenuCollapse}
                menuIsOpen={this.state.menuOpacIsOpen}
              />
              <MenuItemLaporan
                menu={() =>
                  this.setMenuIsOpen(
                    "menuLaporanIsOpen",
                    this.state.menuLaporanIsOpen
                  )
                }
                setMenuCollapse={this.setMenuCollapse}
                menuIsOpen={this.state.menuLaporanIsOpen}
              />
              <MenuItemAktifitas
                menu={() =>
                  this.setMenuIsOpen(
                    "menuAktivitasIsOpen",
                    this.state.menuAktivitasIsOpen
                  )
                }
                setMenuCollapse={this.setMenuCollapse}
                menuIsOpen={this.state.menuAktivitasIsOpen}
              />
            </div>
          </Collapse>
        </ul>
      );
    }
    return (
      <ul id="jetmenu" className={x.join(" ")}>
        <li className={this.state.homeActive}>
          <a onClick={() => this.setHover("homeActive")}>
            <Nav.Item>
              <Nav.Link className="fa fa-home">
                <NavLink to={"/"}> Home</NavLink>
              </Nav.Link>
            </Nav.Item>
          </a>
        </li>
        <li
          // onClick={this.showLayananDropdown}
          onMouseEnter={this.showLayananDropdown}
          onMouseLeave={this.hideLayananDropdown}
          className={this.state.layananActive}
        >
          <a>
            <NavDropdown
              title="Layanan"
              id="collasible-nav-dropdown"
              show={this.state.layanan}
            >
              <NavDropdown.Item onClick={() => this.navToScroolBot("anak")}>
                <NavLink style={navLinkStyle} to={"/layanan"}>
                  Layanan Anak
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("sirkulasi")}
              >
                <NavLink style={navLinkStyle} to={"/layanan"}>
                  Layanan Sirkulasi
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("referensi")}
              >
                <NavLink style={navLinkStyle} to={"/layanan"}>
                  Layanan Referensi
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("bimbingan")}
              >
                <NavLink style={navLinkStyle} to={"/layanan"}>
                  Layanan Bimbingan Pemustaka
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("keanggotaan")}
              >
                <NavLink style={navLinkStyle} to={"/layanan"}>
                  Layanan Keanggotaan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("kerjasama")}
              >
                <NavLink style={navLinkStyle} to={"/layanan"}>
                  Layanan Kerjasama
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={this.showProfilDropdown}
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
              <NavDropdown.Item onClick={() => this.setHover("profilActive")}>
                <NavLink style={navLinkStyle} to={"/profile"}>
                  Visi Misi
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("profilActive")}>
                Tujuan
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("profilActive")}>
                Struktur Organisasi Perpustakaan
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={this.showOpacDropdown}
          onMouseLeave={this.hideOpacDropdown}
          className={this.state.opacActive}
        >
          <a>
            <NavDropdown
              title="O P A C"
              id="collasible-nav-dropdown"
              show={this.state.opac}
            >
              <NavDropdown.Item onClick={() => this.setHover("opacActive")}>
                <a
                  onClick={() =>
                    window.open("http://localhost/lib70/?p=visitor", "_blank")
                  }
                >
                  Visitor Counter
                </a>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("opacActive")}>
                <a
                  onClick={() =>
                    window.open("http://localhost/lib70/", "_blank")
                  }
                >
                  Sistem PERPUSTAKAAN
                </a>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("opacActive")}>
                e-DTS
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("opacActive")}>
                e-DDC
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={this.showLaporanDropdown}
          onMouseLeave={this.hideLaporanDropdown}
          className={this.state.laporanActive}
        >
          <a>
            <NavDropdown
              title="Laporan"
              id="collasible-nav-dropdown"
              show={this.state.laporan}
            >
              <NavDropdown.Item onClick={() => this.setHover("laporanActive")}>
                <NavLink style={navLinkStyle} to={"/laporanBulanan"}>
                  {" "}
                  Bulanan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("laporanActive")}>
                <NavLink style={navLinkStyle} to={"/laporanTriwulan"}>
                  {" "}
                  Triwulan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("laporanActive")}>
                <NavLink style={navLinkStyle} to={"/laporanTahunan"}>
                  Tahunan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("laporanActive")}>
                <NavLink style={navLinkStyle} to={"/laporanSemester"}>
                  Semester
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={this.showAktivitasDropdown}
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
                <NavLink style={navLinkStyle} to={"/programUnggulan"}>
                  Program Unggulan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.setHover("aktivitasActive")}
              >
                Prestasi
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
      </ul>
    );
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
                  href="https://web.facebook.com/libseventy/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/libseventy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/libseventy"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCevAbguNQoxuQwnLRiHblTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Youtube"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/lib-seventy-6772771b1/"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    <this.RenderMenu />
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
