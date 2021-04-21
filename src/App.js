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
// import LayananContainers from "./containers/LayananContainers";
import LaporanBulananContainers from "./containers/LaporanBulananContainers";
import LaporanTriwulanContainers from "./containers/LaporanTriwulanContainers";
import LaporanSemesterContainer from "./containers/LaporanSemesterContainer";
// import LaporanSaran from "./containers/LaporanSaran";
import Sirkulasi from "./containers/layanan/SirukulasiContainer";
import ReferensiContainer from "./containers/layanan/ReferensiContainer";
import BimbinganContainer from "./containers/layanan/BimbinganContainer";
import KeanggotaanContainer from "./containers/layanan/KeanggotaanContainer";
import KerjasamaContainer from "./containers/layanan/KerjasamaContainer";
import AnakContainer from "./containers/layanan/AnakContainer";
import LaporanTahunan from "./containers/laporan/LaporanTahunan";
import ProgramUnggulanContainer from "./containers/aktivitas/ProgramUnggulanContainer";
import PrestasiContainer from "./containers/aktivitas/PrestasiContainer";
// import LoginContainer from "./containers/LoginContainers";

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
          {/* Layanan */}
          {/* <Route
            path="/layanan"
            render={() => <LayananContainers layanan={this.state.layanan} />}
          /> */}
          <Route path="/layanan" component={AnakContainer} />
          <Route path="/layananSirkulasi" component={Sirkulasi} />
          <Route path="/layananReferensi" component={ReferensiContainer} />
          <Route path="/layananBimbingan" component={BimbinganContainer} />
          <Route path="/layananKeanggotaan" component={KeanggotaanContainer} />
          <Route path="/layananKerjasama" component={KerjasamaContainer} />
          {/* Laporan */}
          <Route path="/laporanBulanan" component={LaporanBulananContainers} />
          <Route path="/laporanTahunan" component={LaporanTahunan} />
          <Route
            path="/laporanTriwulan"
            component={LaporanTriwulanContainers}
          />
          <Route path="/laporanSemester" component={LaporanSemesterContainer} />
          {/* <Route path="/laporanSaran" component={LaporanSaran} /> */}
          {/* <Route path="/opacSurvey" component={LoginContainer} /> */}
          {/* Aktivitas */}
          <Route path="/aktivitasProgram" component={ProgramUnggulanContainer} />
          <Route path="/aktivitasPrestasi" component={PrestasiContainer} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
