import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Footers from "../footers/Footers";
import Headers from "../headers/Headers";
class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Headers />
        {this.props.children}
        <Footers />
      </Auxiliary>
    );
  }
}
export default Layout;
