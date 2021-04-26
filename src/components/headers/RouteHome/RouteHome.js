import React, { Component } from "react";
import { connect } from "react-redux";
import { setMenuActive } from "../../../store/actions";

class RouteHome extends Component {
  goHome = () => {
    this.props.setMenuActive("homeActive");
    this.props.goToHome.push("/");
  };

  render() {
    return (
      <div>
        <section className="post-wrapper-top">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul className="breadcrumb">
                <li>
                  <div className={"div-link"} onClick={this.goHome}>
                    Home
                  </div>
                </li>
                <li>{this.props.title}</li>
              </ul>
              <h2>{this.props.title.toUpperCase()}</h2>
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

export default connect(mapStateToProps, { setMenuActive })(RouteHome);
