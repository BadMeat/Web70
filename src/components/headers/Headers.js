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
// import IpAddressModal from "../modals/IpAddressModal";
import { connect } from "react-redux";
import { setMenuActive } from "../../store/actions";
import InformationModal from "../modals/InformationModal";
import NotificationModal from "../modals/NotificationModal";

const navLinkStyle = {
  color: "black",
  textDecoration: "none",
  display: "block"
};

class Headers extends Component {
  state = {
    layanan: false,
    profil: false,
    opac: false,
    laporan: false,
    aktivitas: false,
    isOpen: false,
    menuOpen: false,
    ipAddressIsOpen: false,
    urlLocal: "",
    notifIsOpen: false,
  };

  setHover = (property) => {
    this.props.setMenuActive(property);
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
  };

  showDropDown = (property) => {
    this.setState({
      [property]: !this.state[property],
    });
  };

  hideDropDown = (property) => {
    this.setState({
      [property]: false,
    });
  };

  navToScroolBot = (type) => {
    this.setHover("layananActive");
    this.props.setLayanan(type);
    this.setState({
      isOpen: false,
    });
  };

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
                  style={{
                    color: "black",
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
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
        {/* <li className={this.state.homeActive}> */}
        <li className={this.props.menu.homeActive}>
          <a onClick={() => this.setHover("homeActive")} href="/#">
            <Nav.Item>
              <Nav.Link id="collasible-nav-dropdown" className="fa fa-home">
                <NavLink id="collasible-nav-dropdown" to={"/"}>
                  {" "}
                  Home
                </NavLink>
              </Nav.Link>
            </Nav.Item>
          </a>
        </li>
        <li
          onMouseEnter={() => this.showDropDown("layanan")}
          onMouseLeave={() => this.hideDropDown("layanan")}
          // className={this.state.layananActive}
          className={this.props.menu.layananActive}
        >
          <a href="/layanan">
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
                <NavLink style={navLinkStyle} to={"/layananSirkulasi"}>
                  Layanan Sirkulasi
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("referensi")}
              >
                <NavLink style={navLinkStyle} to={"/layananReferensi"}>
                  Layanan Referensi
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("bimbingan")}
              >
                <NavLink style={navLinkStyle} to={"/layananBimbingan"}>
                  Layanan Bimbingan Pemustaka
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("keanggotaan")}
              >
                <NavLink style={navLinkStyle} to={"/layananKeanggotaan"}>
                  Layanan Keanggotaan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.navToScroolBot("kerjasama")}
              >
                <NavLink style={navLinkStyle} to={"/layananKerjasama"}>
                  Layanan Kerjasama
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={() => this.showDropDown("profil")}
          onMouseLeave={() => this.hideDropDown("profil")}
          // className={this.state.profilActive}
          className={this.props.menu.profilActive}
        >
          <a href="/profile">
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
                <NavLink style={navLinkStyle} to={"/profile"}>
                  Tujuan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item onClick={() => this.setHover("profilActive")}>
                <NavLink style={navLinkStyle} to={"/profile"}>
                  Struktur Organisasi Perpustakaan
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={() => this.showDropDown("opac")}
          onMouseLeave={() => this.hideDropDown("opac")}
          // className={this.state.opacActive}
          className={this.props.menu.opacActive}
        >
          <a href="/#">
            <NavDropdown
              title="O P A C"
              id="collasible-nav-dropdown"
              show={this.state.opac}
            >
              <NavDropdown.Item
                onClick={() => {
                  this.setHover("opacActive");
                  this.setState({
                    urlLocal: "?p=visitor",
                  });
                  this.modalIsClick(true);
                }}
              >
                Visitor Counter
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => {
                  this.setHover("opacActive");
                  this.setState({
                    urlLocal: "",
                  });
                  this.modalIsClick(true);
                }}
              >
                Sistem PERPUSTAKAAN
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => {
                  this.setHover("opacActive");
                  this.notifIsClick(true);
                }}
              >
                e-DTS
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => {
                  this.setHover("opacActive");
                  this.notifIsClick(true);
                }}
              >
                e-DDC
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.setHover("laporanActive")}>
                <a
                  href="/#"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSdU3ZoGW9g_KgYty8xmJgsRq0CTxVQl2AHQQd4MyDFjIG69sw/viewform",
                      "_blank"
                    )
                  }
                  style={navLinkStyle}
                >
                  Survey Kepuasan Pemustaka
                </a>
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
        <li
          onMouseEnter={() => this.showDropDown("laporan")}
          onMouseLeave={() => this.hideDropDown("laporan")}
          // className={this.state.laporanActive}
          className={this.props.menu.laporanActive}
        >
          <a href="/#">
            <NavDropdown
              title="Laporan"
              id="collasible-nav-dropdown"
              show={this.state.laporan}
            >
              <NavDropdown.Item onClick={() => this.setHover("laporanActive")}>
                <NavLink style={navLinkStyle} to={"/laporanBulanan"}>
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
          onMouseEnter={() => this.showDropDown("aktivitas")}
          onMouseLeave={() => this.hideDropDown("aktivitas")}
          // className={this.state.aktivitasActive}
          className={this.props.menu.aktivitasActive}
        >
          <a href="/aktivitasProgram">
            <NavDropdown
              title="Aktivitas"
              id="collasible-nav-dropdown"
              show={this.state.aktivitas}
            >
              <NavDropdown.Item
                onClick={() => this.setHover("aktivitasActive")}
              >
                <NavLink style={navLinkStyle} to={"/aktivitasProgram"}>
                  Program Unggulan
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                onClick={() => this.setHover("aktivitasActive")}
              >
                <NavLink style={navLinkStyle} to={"/aktivitasPrestasi"}>
                  Prestasi
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
      </ul>
    );
  };

  modalIsClick = (bool) => {
    this.setState({
      ipAddressIsOpen: bool,
    });
  };

  notifIsClick = (bool) => {
    this.setState({
      notifIsOpen: bool,
    });
  };

  render() {
    return (
      <div>
        {/* <body> */}
        {/* <IpAddressModal
          show={this.state.ipAddressIsOpen}
          onHide={() => this.modalIsClick(false)}
        /> */}
        <InformationModal
          show={this.state.ipAddressIsOpen}
          onHide={() => this.modalIsClick(false)}
          localUrl={this.state.urlLocal}
        />
        <NotificationModal
          show={this.state.notifIsOpen}
          onHide={() => this.notifIsClick(false)}
        />
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
                {/* | */}
                {/* <a
                  href="/#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Notifikasi"
                >
                  <i className="fa fa-bell"></i>
                </a>
                <a
                  href="/#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Signout"
                >
                  <i className="fa fa-sign-out"></i>
                </a> */}
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
                    <NavLink style={{ color: "black" }} to={"/"}>
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

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(Headers);
