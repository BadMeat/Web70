import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class LaporanBulananContainers extends Component {
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
                <li>Laporan Bulanan</li>
              </ul>
              <h2>LAPORAN BULANAN</h2>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container clearfix">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 clearfix">
                <div className="dropdown">
                  <div style={{ display: "flex" }}>
                    <DropdownButton id="dropdown-basic-button" title="Bulan">
                      <Dropdown.Item href="#/action-1">Januari</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Februari</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Maret</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">April</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Mei</Dropdown.Item>
                    </DropdownButton>
                    <div style={{ marginLeft: 10 }}>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Tahunan"
                      >
                        <Dropdown.Item href="#/action-2">2021</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">2020</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">2019</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>

                  {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <a href="/">2021</a>
                    </li>
                    <li>
                      <a href="/">2020</a>
                    </li>
                    <li>
                      <a href="/">2019</a>
                    </li>
                  </ul> */}
                </div>
                <div className="clearfix">&nbsp;</div>
                <h4>ANGGOTA</h4>
                <table className="table table-striped" data-effect="fade">
                  <thead>
                    <tr>
                      <th>Jenis Anggota</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Guru/Karyawan</td>
                      <td>92</td>
                    </tr>
                    <tr>
                      <td>Siswa Kelas X</td>
                      <td>360</td>
                    </tr>
                    <tr>
                      <td>Siswa Kelas XI</td>
                      <td>360</td>
                    </tr>
                    <tr>
                      <td>Siswa Kelas XII</td>
                      <td>360</td>
                    </tr>
                    <tr>
                      <td>Jumlah</td>
                      <td>1172</td>
                    </tr>
                  </tbody>
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
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>January 29, 2014</td>
                      <td>$15.00</td>
                      <td>
                        <a href="/">View Details and Downloads</a>
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>December 31, 2013</td>
                      <td>$18.00</td>
                      <td>
                        <a href="/">View Details and Downloads</a>
                      </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>November 15, 2013</td>
                      <td>$45.00</td>
                      <td>
                        <a href="/">View Details and Downloads</a>
                      </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>September 12, 2013</td>
                      <td>$30.00</td>
                      <td>
                        <a href="/">View Details and Downloads</a>
                      </td>
                    </tr>
                  </tbody>
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
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Siswa</td>
                      <td>19 Siswa</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>OTM</td>
                      <td>360</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Guru</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                </table>
                <p className="small">Kunjungan dengan Rombel (klasikal)</p>
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
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Guru/Karyawan</td>
                      <td>9 </td>
                      <td>10 </td>
                      <td>0 </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Siswa*</td>
                      <td>19</td>
                      <td>19 </td>
                      <td>6 </td>
                    </tr>
                  </tbody>
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
