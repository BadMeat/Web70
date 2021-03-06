import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import ImageFadeIn from "../../components/ui/ImageFadeIn";
import { setMenuActive } from "../../store/actions";

class AnakContainer extends Component {
  componentDidMount() {
    this.props.setMenuActive("layananActive");
  }

  render() {
    return (
      <div>
        <RouteHome title="Layanan Anak" goToHome={this.props.history} />

        <section className="section1">
          <div className="container ">
            <div className="col-lg-12 col-md-12 col-sm-12 clearfix">
              <div id="anak"></div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    {" "}
                    Kebiasaan membaca harus dilatih sejak usia dini, yaitu
                    dengan memberikan bahan bacaan kepada anak semenjak dini,
                    menyediakan ruangan membaca khusus untuk anak. Seperti
                    sebuah ruangan bacaan yang terdapat pada perpustakaan umum
                    Kota Pekanbaru, yang menyediakan ruangan khusus tempat
                    membaca anak dan juga memiliki koleksi khusus untuk
                    anak-anak, koleksi anak yang ada yaitu : buku dongeng, buku
                    belajar Al-Qur’an, majalah anak, buku doa, buku bergambar,
                    buku cerita rakyat dan lain-lain.
                  </p>

                  <p>
                    Layanan seperti ini biasanya diselenggarakan oleh
                    perpustakaan. sesuai dengan tugas dan fungsi perpustakaan
                    umum yaitu memberikan pelayanan kepada masyarakat melalui
                    pendayagunaan koleksi bahan pustaka untuk keperluan
                    pendidikan, penelitian, ilmu pengetahuan, dan rekreasi, maka
                    salah satu layanan yang diselenggarakan oleh perpustakaan
                    umum adalah layanan anak atau juga dikenal dengan seksi
                    anak-anak. Berbagai kegiatan disiapkan untuk kebutuhan
                    anak-anak dari pemilihan bahan pustaka sampai kepada
                    pelayannya disesuaikan untuk anak menurut usia dan selera
                    anak-anak. Bahan bacaan anak usia balita lebih ditekankan
                    pada gambar (picture books) tanpa teks. Anak balita banyak
                    tertarik pada gambar dan warna-warna yang menyolok. Setelah
                    usia sekolah dasar anak diperkenalkan dengan huruf dan
                    angka. Oleh karena itu koleksi untuk anak usia ini adalah
                    buku-buku yang banyak gambar dan berwarna-warni, namun sudah
                    mulai ada sedikit teks.
                  </p>
                  <p>
                    Perpustakaan SMA Negeri 70 Jakarta berkolaborasi dengan
                    Pokja Perpustakaan beserta RW sekitar sekolah memberikan
                    fasilitas layanan anak untuk meningkatkan liteasi anak sejak
                    dini.
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ImageFadeIn>
                    <img
                      className="img-responsive"
                      src={require("../../img/img-layananak.png")}
                      alt=""
                    />
                  </ImageFadeIn>
                </div>
              </div>

              <div className="clearfix">&nbsp;</div>
              <div className="clearfix">&nbsp;</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(AnakContainer);
