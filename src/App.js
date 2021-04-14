import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "./lib/bootstrap/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./lib/font-awesome/css/font-awesome.min.css";
import "./lib/prettyphoto/css/prettyphoto.css";
import "./lib/hover/hoverex-all.css";
import "./lib/jetmenu/jetmenu.css";
import "./lib/owl-carousel/owl-carousel.css";
import "./css/style.css";
import "./css/colors/blue.css";
// import * as jQuery from "jquery";
import HomeContainers from "./containers/HomeContainers";
import Layout from "./components/layout/Layout";
import ProfileContainers from "./containers/ProfileContainers";
import LayananContainers from "./containers/LayananContainers";
import LaporanBulananContainers from "./containers/LaporanBulananContainers";
// import 'jquery'
// import "./lib/jquery/jquery.min"
// import "./lib/bootstrap/js/bootstrap.min.js"
// window.$ = jQuery;

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./lib/jquery/jquery.min";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomeContainers} />
              <Route path="/profile" component={ProfileContainers} />
              <Route path="/layanan" component={LayananContainers} />
              <Route path="/laporanBulanan" component={LaporanBulananContainers} />
            </Switch>
          </BrowserRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
