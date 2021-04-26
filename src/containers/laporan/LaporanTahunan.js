import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import { setMenuActive } from "../../store/actions";

class LaporanTahunan extends Component {
  componentDidMount() {
    this.props.setMenuActive("laporanActive");
  }

  render() {
    return (
      <div>
        <RouteHome title="Laporan tahunan" goToHome={this.props.history} />
        <section className="section1">
          <div className="container clearfix"></div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { menu } = state.menu;
  return { menu };
};

export default connect(mapStateToProps, { setMenuActive })(LaporanTahunan);
