import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import triwulanPertama from "../data/Triwulan/TriwulanPertama";
import triwulanKedua from "../data/Triwulan/TriwulanKedua";
import triwulanKetiga from "../data/Triwulan/TriwulanKetiga";
import triwulanKeempat from "../data/Triwulan/TriwulanKeempat";
import RouteHome from "../components/headers/RouteHome/RouteHome";
import { setMenuActive } from "../store/actions";
import { connect } from "react-redux";
import ImageFadeIn from "../components/ui/ImageFadeIn";

class LaporanTriwulanContainers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setMenuActive("laporanActive");
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  state = {
    dataTriwulan: triwulanPertama,
    selectedTitle: "Triwulan 1",
    sirkulasiTitle: "",
  };

  renderKoleksi = () => {
    return this.state.dataTriwulan.koleksi.map((value, index) => {
      const { jenisKoleksi, jumlahJudul, jumlahEksemplar } = value;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{jenisKoleksi}</td>
          <td>{jumlahJudul}</td>
          <td>{jumlahEksemplar}</td>
        </tr>
      );
    });
  };

  renderAnggota = () => {
    return this.state.dataTriwulan.anggota.map((value, index) => {
      const { jenisAnggota, jumlah } = value;
      return (
        <tr key={index}>
          <td>{jenisAnggota}</td>
          <td>{jumlah}</td>
        </tr>
      );
    });
  };

  renderKunjungan = () => {
    return this.state.dataTriwulan.kunjungan.map((value, index) => {
      const { jenisAnggota, jumlahPengunjung } = value;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{jenisAnggota}</td>
          <td>{jumlahPengunjung}</td>
        </tr>
      );
    });
  };

  renderSirkulasi = () => {
    return this.state.dataTriwulan.sirkulasi.map((value, index) => {
      const {
        jenisAnggota,
        jumlahPeminjam,
        jumlahMengembalikan,
        jumlahKeterlambatan,
      } = value;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{jenisAnggota}</td>
          <td>{jumlahPeminjam} </td>
          <td>{jumlahMengembalikan}</td>
          <td>{jumlahKeterlambatan}</td>
        </tr>
      );
    });
  };

  onSemesterSelected = (target) => {
    if (target === "1") {
      this.setState({
        dataTriwulan: triwulanPertama,
        selectedTitle: "Triwulan 1",
        sirkulasiTitle: "",
      });
    } else if (target === "2") {
      this.setState({
        dataTriwulan: triwulanKedua,
        selectedTitle: "Triwulan 2",
        sirkulasiTitle: "DRIVE THRU",
      });
    } else if (target === "3") {
      this.setState({
        dataTriwulan: triwulanKetiga,
        selectedTitle: "Triwulan 3",
        sirkulasiTitle: "DRIVE THRU",
      });
    } else {
      this.setState({
        dataTriwulan: triwulanKeempat,
        selectedTitle: "Triwulan 4",
        sirkulasiTitle: "DRIVE THRU",
      });
    }
  };

  render() {
    return (
      <div>
        <RouteHome title="Laporan Triwulan" goToHome={this.props.history} />
        <ImageFadeIn>
          <section className="section1">
            <div className="container clearfix">
              <div
                style={{
                  marginBottom: 20,
                  display: "flex",
                }}
              >
                <DropdownButton
                  id="dropdown-item-button"
                  title="Triwulan"
                  onSelect={this.onSemesterSelected}
                >
                  <Dropdown.Item eventKey="1" as="button">
                    1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" as="button">
                    2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3" as="button">
                    3
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4" as="button">
                    4
                  </Dropdown.Item>
                </DropdownButton>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                >
                  {this.state.selectedTitle}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 clearfix">
                  <h4>ANGGOTA</h4>
                  <table className="table table-striped" data-effect="fade">
                    <thead>
                      <tr>
                        <th>Jenis Anggota</th>
                        <th>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderAnggota()}</tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <h4>KOLEKSI</h4>
                  <table className="table table-striped" data-effect="fade">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Jenis Koleksi</th>
                        <th>Jumlah Judul</th>
                        <th>Jumlah Eksemplar</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderKoleksi()}</tbody>
                  </table>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
              </div>

              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 clearfix">
                  <div className="clearfix">&nbsp;</div>
                  <h4>KUNJUNGAN {this.state.sirkulasiTitle}</h4>
                  <table className="table table-striped" data-effect="fade">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Jenis Anggota</th>
                        <th>Jumlah Pengunjung</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderKunjungan()}</tbody>
                  </table>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix"></div>
              </div>

              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix">
                  <div className="clearfix">&nbsp;</div>
                  <h4>SIRKULASI {this.state.sirkulasiTitle}</h4>
                  <table className="table table-striped" data-effect="fade">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Jenis Anggota</th>
                        <th>Jumlah Peminjaman</th>
                        <th>Telah Mengembalikan</th>
                        <th>Jumlah Keterlambatan</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderSirkulasi()}</tbody>
                  </table>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 clearfix"></div>
              </div>
            </div>
          </section>
        </ImageFadeIn>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(
  LaporanTriwulanContainers
);
