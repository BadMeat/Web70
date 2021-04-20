import React, { Component } from "react";
class ReferensiContainer extends Component {
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
                <li>Layanan Referensi</li>
              </ul>
              <h2>LAYANAN REFERENSI</h2>
            </div>
          </div>
        </section>
        <section className="section1">
          <div className="container ">
            <div className="col-lg-12 col-md-12 col-sm-12 clearfix">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p>
                    Layanan Referensi adalah merupakan layanan pokok di
                    perpustakaan yang secara spesifik melayankan koleksi
                    referensi kepada para pemustaka.
                  </p>
                  <p>
                    Jasa layanan referensi merupakan salah satu kegiatan yang
                    ada untuk pemustaka dalam mencari informasi yang
                    dibutuhkannya. Layanan referensi juga suatu kegiatan
                    pelayanan untuk membantu pemustaka menemukan informasi
                    dengan cara menerima pertanyaan-pertanyaan dari para
                    pemustaka dan menjawab dengan menggunakan koleksi referensi
                    yang ada; Membimbing pemustaka untuk menemukan koleksi
                    referensi dan mencari informasi yang dibutuhkan dan
                    penggunaan bahan pustaka koleksi referensi; Memberikan
                    pengarahan dan bantuan pada pengguna mengenai cara
                    menggunakan perpustakaan maupun koleksi referensi;
                    Memberikan petunjuk tentang bagaimana cara memilih dan
                    memilah bahan pustaka dalam kelompok koleksi referensi yang
                    bermutu dan berbobot ilmiah agar diperoleh sumber referensi
                    yang berdaya guna maksimal.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  Sedangkan tujuan layanan referensi adalah sebagai berikut:
                  <ul>
                    <li>
                      Memungkinkan pengguna menemukan informasi secara cepat dan
                      tepat
                    </li>
                    <li>
                      Memungkinkan pengguna menelusur informasi dengan pilihan
                      yang lebih luas
                    </li>
                    <li>
                      Memungkinkan pengguna menggunakan koleksi referensi dengan
                      lebih tepat guna
                    </li>
                  </ul>
                  <p>
                    Adapun Jenis Referensi yang terdapat di Perpustakaan SMA
                    Negeri 70 Jakarta, diantaranya:
                  </p>
                  <ol>
                    <li>Ensiklopedia</li>
                    <li>Peta</li>
                    <li>
                      Kamus
                      <ul type="circle">
                        <li>Kamus Bahasa Indonesia</li>
                        <li>Kamus Bahasa Inggris</li>
                        <li>Kamus Bahasa Jerman</li>
                        <li>Kamus Bahasa Perancis</li>
                      </ul>
                    </li>
                    <li>Bibliografi</li>
                    <li>Atlas</li>
                    <li>Globe</li>
                    <li>Katalog</li>
                    <li>Indeks</li>
                    <li>Karya Ilmiah</li>
                  </ol>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    <img
                      src={require("../../img/img-referensi.jpg")}
                      className="img-responsive img-shadow"
                      alt="Referensi"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ReferensiContainer;
