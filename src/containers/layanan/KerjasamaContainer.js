import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
class KerjasamaContainer extends Component {
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
                <li>Layanan Kerjasama</li>
              </ul>
              <h2>LAYANAN KERJASAMA</h2>
            </div>
          </div>
        </section>
        <section className="section1">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  {" "}
                  Layanan Kerjasama merupakan program perpustakaan untuk
                  meningkatkan eksistensi perpustakaan SMAN 70 Jakarta ke
                  masyarakat luas. Sampai saat ini perpustakaan SMA Negeri 70
                  Jakarta telah bekerjasama dengan 11 Organisasi maupun sekolah
                  disekitaran SMAN 70 Jakarta, diantaranya:
                  <ol>
                    <li>Komite Sekolah</li>
                    <li>Guru</li>
                    <li>Lingkungan RW</li>
                    <li>Majalah Parahyangan</li>
                    <li>SMA Negeri 46 Jakarta</li>
                    <li>Dinas Sosial </li>
                    <li>BI Corner</li>
                    <li>Gramedia</li>
                    <li>SMA Negeri 6 Jakarta</li>
                    <li>Aksamaraya</li>
                    <li>RedHat Indonesia</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}
export default KerjasamaContainer;
