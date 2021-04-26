import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import Auxiliary from "../../hoc/Auxiliary";
import { setMenuActive } from "../../store/actions";

class KerjasamaContainer extends Component {
  componentDidMount() {
    this.props.setMenuActive("layananActive");
  }

  render() {
    return (
      <Auxiliary>
        <RouteHome title="Layanan Kerjasama" goToHome={this.props.history} />

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

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(KerjasamaContainer);
