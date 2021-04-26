import React, { Component } from "react";
import { connect } from "react-redux";
import RouteHome from "../../components/headers/RouteHome/RouteHome";
import Auxiliary from "../../hoc/Auxiliary";
import { setMenuActive } from "../../store/actions";

class ProgramUnggulanContainer extends Component {
  componentDidMount() {
    this.props.setMenuActive("aktivitasActive");
  }

  render() {
    return (
      <Auxiliary>
        <RouteHome title="Program Unggulan" goToHome={this.props.history} />
        <section className="section1">
          <div className="container clearfix"></div>
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
  ProgramUnggulanContainer
);
