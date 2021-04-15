import React, { Component } from "react";
class LaporanTriwulanContainers extends Component {
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
                <li>Laporan Triwulan</li>
              </ul>
              <h2>LAPORAN TRIWULAN</h2>
            </div>
          </div>
        </section>
        <section class="section1">
          <div class="container clearfix">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 clearfix">
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
            </div>

            <div class="row">
              <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
              <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
            </div>

            <div class="row">
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 clearfix">
                <div class="clearfix">&nbsp;</div>
                <h4>KUNJUNGAN</h4>
                <table class="table table-striped" data-effect="fade">
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
              </div>
              <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix"></div>
            </div>

            <div class="row">
              <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 clearfix">
                <div class="clearfix">&nbsp;</div>
                <h4>SIRKULASI</h4>
                <table class="table table-striped" data-effect="fade">
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
              <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 clearfix"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LaporanTriwulanContainers;
