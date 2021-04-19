import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import semesterPertama from "../data/semester/SemesterPertama";
import semesterKedua from "../data/semester/SemesterKedua";

class LaporanSemesterContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  state = {
    dataSemester: semesterPertama,
    selectedTitle: "Semester 1",
  };

  renderKoleksi = () => {
    return this.state.dataSemester.koleksi.map((value, index) => {
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
    return this.state.dataSemester.anggota.map((value, index) => {
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
    return this.state.dataSemester.kunjungan.map((value, index) => {
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
    return this.state.dataSemester.sirkulasi.map((value, index) => {
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
        dataSemester: semesterPertama,
        selectedTitle: "Semester 1",
      });
    } else {
      this.setState({
        dataSemester: semesterKedua,
        selectedTitle: "Semester 2",
      });
    }
  };

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
                <li>Laporan Semester</li>
              </ul>
              <h2>LAPORAN SEMESTER</h2>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container clearfix">
            <div style={{ marginBottom: 20, display: "flex" }}>
              <DropdownButton
                id="dropdown-item-button"
                title="Semester"
                onSelect={this.onSemesterSelected}
              >
                <Dropdown.Item eventKey="1" as="button">
                  1
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" as="button">
                  2
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
                <h4>KUNJUNGAN</h4>
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
                <h4>SIRKULASI</h4>
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
      </div>
    );
  }
}
export default LaporanSemesterContainer;
