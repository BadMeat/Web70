import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import ImageFadeIn from "../../components/ui/ImageFadeIn";
import Auxiliary from "../../hoc/Auxiliary";
import { setMenuActive } from "../../store/actions";

class ReferensiContainer extends Component {
  componentDidMount() {
    this.props.setMenuActive("layananActive");
  }

  render() {
    return (
      <Auxiliary>
        <RouteHome title="Layanan Referensi" goToHome={this.props.history} />

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
                    <ImageFadeIn>
                      <img
                        src={require("../../img/img-referensi.jpg")}
                        className="img-responsive img-shadow"
                        alt="Referensi"
                      />
                    </ImageFadeIn>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(ReferensiContainer);
