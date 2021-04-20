import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
class BimbinganContainer extends Component {
  render() {
    return (
      <Auxiliary>
        <section className="post-wrapper-top">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Layanan Bimbingan</li>
              </ul>
              <h2>LAYANAN BIMBINGAN</h2>
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="container ">
            <div className="col-lg-12 col-md-12 col-sm-12 clearfix">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    Layanan sirkulasi bertujuan untuk membantu pemustaka dalam
                    proses peminjaman, pengembalian, dan perpanjangan bahan
                    pustaka. Prosedur layanan peminjaman dalam sirkulasi ini
                    meliputi aktivitas pemilihan buku sampai buku bisa dipinjam
                    oleh pemustaka dengan melalui proses peminjaman di bagian
                    layanan sirkulasi. Sedangkan prosedur layanan pengembalian
                    dan perpanjangan bahan pustaka ini meliputi aktivitas
                    penyerahan pustaka yang dipinjam sampai dengan petugas
                    memproses pengembalian ataupun perpanjangan pustaka di
                    bagian layanan sirkulasi.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img
                    className="img-responsive img-shadow"
                    src={require("../../img/img-bimbingan.jpg")}
                    alt=""
                  />
                </div>
              </div>

              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}
export default BimbinganContainer;
