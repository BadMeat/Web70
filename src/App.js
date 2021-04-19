import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./lib/font-awesome/css/font-awesome.min.css";
import "./lib/prettyphoto/css/prettyphoto.css";
import "./lib/hover/hoverex-all.css";
import "./lib/jetmenu/jetmenu.css";
import "./lib/owl-carousel/owl-carousel.css";
import "./css/style.css";
import "./css/colors/blue.css";
import HomeContainers from "./containers/HomeContainers";
import Layout from "./components/layout/Layout";
import ProfileContainers from "./containers/ProfileContainers";
import LayananContainers from "./containers/LayananContainers";
import LaporanBulananContainers from "./containers/LaporanBulananContainers";
import LaporanTriwulanContainers from "./containers/LaporanTriwulanContainers";
import LaporanSemesterContainer from "./containers/LaporanSemesterContainer";
import LaporanSaran from "./containers/LaporanSaran";

class App extends Component {
  state = {
    layanan: "",
  };

  setLayanan = (type) => {
    this.setState({
      layanan: type,
    });
  };

  render() {
    return (
      <Layout setLayanan={this.setLayanan}>
        <Switch>
          <Route path="/" exact component={HomeContainers} />
          <Route path="/profile" component={ProfileContainers} />
          {/* <Route path="/layanan" component={LayananContainers} /> */}
          <Route
            path="/layanan"
            render={() => <LayananContainers layanan={this.state.layanan} />}
          />
          <Route path="/laporanBulanan" component={LaporanBulananContainers} />
          <Route
            path="/laporanTriwulan"
            component={LaporanTriwulanContainers}
          />
          <Route path="/laporanSemester" component={LaporanSemesterContainer} />
          <Route path="/laporanSaran" component={LaporanSaran} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
