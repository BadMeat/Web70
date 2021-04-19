import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import bulanAgustus from "../data/Bulanan/BulanAgustus";
import bulanApril from "../data/Bulanan/BulanApril";
import bulanFebruari from "../data/Bulanan/BulanFebruari";
import bulanJanuari from "../data/Bulanan/BulanJanuari";
import bulanJuli from "../data/Bulanan/BulanJuli";
import bulanJuni from "../data/Bulanan/BulanJuni";
import bulanMaret from "../data/Bulanan/BulanMaret";
import bulanMei from "../data/Bulanan/BulanMei";
import bulanOktober from "../data/Bulanan/BulanOktober";
import bulanSeptember from "../data/Bulanan/BulanSeptember";
import bulanNovember from "../data/Bulanan/BulanNovember";
import bulanDesember from "../data/Bulanan/BulanDesember";
import bulanKosong from "../data/Bulanan/BulanKosong";

class LaporanBulananContainers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  state = {
    dataBulan: bulanJanuari,
    selectedTitle: "Januari",
    selectedTahun: "2020",
    sirkulasiTitle: "",
  };

  renderKoleksi = () => {
    return this.state.dataBulan.koleksi.map((value, index) => {
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
    return this.state.dataBulan.anggota.map((value, index) => {
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
    return this.state.dataBulan.kunjungan.map((value, index) => {
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

  renderKunjunganRombel = () => {
    return this.state.dataBulan.kunjunganRombel.map((value, index) => {
      const { kelas, mataPelajaran, jumlahSiswa } = value;
      let idx = index + 1;
      if (kelas === "-") {
        idx = "-";
      }
      return (
        <tr key={index}>
          <td>{idx}</td>
          <td>{kelas}</td>
          <td>{mataPelajaran}</td>
          <td>{jumlahSiswa}</td>
        </tr>
      );
    });
  };

  renderSirkulasi = () => {
    return this.state.dataBulan.sirkulasi.map((value, index) => {
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

  onTahunSelected = (target) => {
    switch (target) {
      case "2021": {
        this.setState({
          selectedTahun: "2021",
          sirkulasiTitle: "",
          dataBulan: bulanKosong,
        });
        break;
      }
      case "2020": {
        this.setState({
          selectedTitle: "Januari",
          selectedTahun: "2020",
          sirkulasiTitle: "",
          dataBulan: bulanJanuari,
        });
        break;
      }
      default:
        this.setState({
          selectedTahun: "2019",
          sirkulasiTitle: "",
          dataBulan: bulanKosong,
        });
    }
  };

  onSemesterSelected = (target) => {
    switch (target) {
      case "1": {
        this.setState({
          dataBulan: bulanJanuari,
          selectedTitle: "Januari",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "2": {
        this.setState({
          dataBulan: bulanFebruari,
          selectedTitle: "Februari",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "3": {
        this.setState({
          dataBulan: bulanMaret,
          selectedTitle: "Maret",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "4": {
        this.setState({
          dataBulan: bulanApril,
          selectedTitle: "April",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "5": {
        this.setState({
          dataBulan: bulanMei,
          selectedTitle: "Mei",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "6": {
        this.setState({
          dataBulan: bulanJuni,
          selectedTitle: "Juni",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "7": {
        this.setState({
          dataBulan: bulanJuli,
          selectedTitle: "Juli",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "8": {
        this.setState({
          dataBulan: bulanAgustus,
          selectedTitle: "Agustus",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "9": {
        this.setState({
          dataBulan: bulanSeptember,
          selectedTitle: "September",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "10": {
        this.setState({
          dataBulan: bulanOktober,
          selectedTitle: "Oktober",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      case "11": {
        this.setState({
          dataBulan: bulanNovember,
          selectedTitle: "November",
          sirkulasiTitle: "",
          selectedTahun: "2020",
        });
        break;
      }
      default:
        this.setState({
          dataBulan: bulanDesember,
          selectedTitle: "Desember",
          sirkulasiTitle: "",
          selectedTahun: "2020",
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
                <li>Laporan Bulanan</li>
              </ul>
              <h2>LAPORAN BULANAN</h2>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container clearfix">
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <DropdownButton
                id="dropdown-item-button"
                title="Bulan"
                onSelect={this.onSemesterSelected}
              >
                <Dropdown.Item eventKey="1" as="button">
                  Januari
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" as="button">
                  Februari
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" as="button">
                  Maret
                </Dropdown.Item>
                <Dropdown.Item eventKey="4" as="button">
                  April
                </Dropdown.Item>
                <Dropdown.Item eventKey="5" as="button">
                  Mei
                </Dropdown.Item>
                <Dropdown.Item eventKey="6" as="button">
                  Juni
                </Dropdown.Item>
                <Dropdown.Item eventKey="7" as="button">
                  Juli
                </Dropdown.Item>
                <Dropdown.Item eventKey="8" as="button">
                  Agustus
                </Dropdown.Item>
                <Dropdown.Item eventKey="9" as="button">
                  September
                </Dropdown.Item>
                <Dropdown.Item eventKey="10" as="button">
                  Oktober
                </Dropdown.Item>
                <Dropdown.Item eventKey="11" as="button">
                  November
                </Dropdown.Item>
                <Dropdown.Item eventKey="12" as="button">
                  Desember
                </Dropdown.Item>
              </DropdownButton>
              <div style={{ marginLeft: 10 }}>
                <DropdownButton
                  id="dropdown-item-button"
                  title="Tahun"
                  onSelect={this.onTahunSelected}
                >
                  <Dropdown.Item eventKey="2021" as="button">
                    2021
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2020" as="button">
                    2020
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2019" as="button">
                    2019
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  marginLeft: "20px",
                  fontSize: "20px",
                }}
              >
                {this.state.selectedTitle} {this.state.selectedTahun}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 clearfix">
                <div className="clearfix">&nbsp;</div>
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
                <h4>KUNJUNGAN DRIVE THRU</h4>
                <p>Kunjungan Tanpa Rombel</p>
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
                <p className="small">Kunjungan dengan Rombel (klasikal)</p>
                <table className="table table-striped" data-effect="fade">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Kelas</th>
                      <th>Mata Pelajaran</th>
                      <th>Jumlah Siswa</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderKunjunganRombel()}</tbody>
                </table>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix"></div>
            </div>

            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix">
                <div className="clearfix">&nbsp;</div>
                <h4>SIRKULASI DRIVE THRU*</h4>
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
export default LaporanBulananContainers;
