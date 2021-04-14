import React, { Component } from "react";
class LaporanBulananContainers extends Component {
  render() {
    return (
      <div>
        <section class="post-wrapper-top">
          <div class="container">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul class="breadcrumb">
                <li>
                  <a href="home.html">Home</a>
                </li>
                <li>Laporan</li>
              </ul>
              <h2>LAPORAN</h2>
            </div>
          </div>
        </section>
        <section class="section1">
          <div class="container clearfix">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 clearfix">
              <div class="dropdown">
                <button
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Bulan
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <a href="/">Januari</a>
                  </li>
                  <li>
                    <a href="/">Februari</a>
                  </li>
                  <li>
                    <a href="/">Maret</a>
                  </li>
                  <li>
                    <a href="/">April</a>
                  </li>
                  <li>
                    <a href="/">Mei</a>
                  </li>
                  <li>
                    <a href="/">Juni</a>
                  </li>
                </ul>
                <button
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Tahun
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <a href="/">2021</a>
                  </li>
                  <li>
                    <a href="/">2020</a>
                  </li>
                  <li>
                    <a href="/">2019</a>
                  </li>
                </ul>
              </div>
              <div class="clearfix">&nbsp;</div>
              <h4>ANGGOTA</h4>
              <table class="table table-striped" data-effect="fade">
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

            <div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4>KOLEKSI</h4>
              <table class="table table-striped" data-effect="fade">
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
          </div>
        </section>
      </div>
    );
  }
}
export default LaporanBulananContainers;
