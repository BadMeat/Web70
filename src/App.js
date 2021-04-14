import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./lib/bootstrap/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
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
import { Helmet } from "react-helmet";
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
              <Route path="/profile" exact component={ProfileContainers} />
            </Switch>
          </BrowserRouter>
        </Layout>
        <Helmet>
          <script
            src="./lib/jquery/jquery.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/bootstrap/js/bootstrap.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/php-mail-form/validate.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/prettyphoto/js/prettyphoto.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/isotope/isotope.min.js"
            type="text/javascript"
          ></script>
          <script src="./lib/hover/hoverdir.js" type="text/javascript"></script>
          <script
            src="./lib/hover/hoverex.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/unveil-effects/unveil-effects.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/owl-carousel/owl-carousel.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/jetmenu/jetmenu.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/animate-enhanced/animate-enhanced.min.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/jigowatt/jigowatt.js"
            type="text/javascript"
          ></script>
          <script
            src="./lib/easypiechart/easypiechart.min.js"
            type="text/javascript"
          ></script>
        </Helmet>
      </div>
    );
  }
}

export default App;
