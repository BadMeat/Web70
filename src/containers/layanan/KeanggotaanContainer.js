import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import ImageFadeIn from "../../components/ui/ImageFadeIn";
import Auxiliary from "../../hoc/Auxiliary";
import { setMenuActive } from "../../store/actions";

class KeanggotaanContainer extends Component {
  componentDidMount() {
    this.props.setMenuActive("layananActive");
  }

  render() {
    return (
      <Auxiliary>
        <RouteHome title="Layanan Anggota" goToHome={this.props.history} />

        <section className="section1">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <p>
                  Merupakan layanan mengadministrasikan data anggota untuk
                  memudahkan proses layanan pengguna perpustakaan.
                </p>
                <p>Prosedur layanan ini meliputi:</p>
                <div style={{ marginBottom: 25 }} />
                <p>
                  <ImageFadeIn>
                    <img
                      className="img-responsive "
                      src={require("../../img/img-anggota.JPG")}
                      alt=""
                    />
                  </ImageFadeIn>
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

export default connect(mapStateToProps, { setMenuActive })(
  KeanggotaanContainer
);
