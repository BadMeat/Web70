import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import ImageFadeIn from "../../components/ui/ImageFadeIn";
import Auxiliary from "../../hoc/Auxiliary";
import { setMenuActive } from "../../store/actions";

class BimbinganContainer extends Component {
  componentDidMount() {
    this.props.setMenuActive("layananActive");
  }

  render() {
    return (
      <Auxiliary>
        <RouteHome title="Layanan Bimbingan" goToHome={this.props.history} />

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
                  <ImageFadeIn>
                    <img
                      className="img-responsive img-shadow"
                      src={require("../../img/img-bimbingan.jpg")}
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
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(BimbinganContainer);
