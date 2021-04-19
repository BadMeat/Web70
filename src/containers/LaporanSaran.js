import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "../axios-db";
import _ from "lodash";
import Spinner from "../components/ui/Spinner";

class LaporanSaran extends Component {
  state = {
    isLoading: false,
    dataSaran: [],
  };

  getData = () => {
    this.setState({
      isLoading: true,
    });
    axios
      .get("/saran.json")
      .then((res) => {
        const data = _.map(res.data, (value, uid) => {
          return { ...value, uid };
        });
        this.setState({
          dataSaran: data,
          isLoading: false,
        });
      })
      .catch((err) => {
        alert(err);
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  renderTable = () => {
    return this.state.dataSaran.map((value, index) => {
      const { nama, saran, nilai } = value;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nama}</td>
          <td>{nilai}</td>
          <td>{saran}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <section className="post-wrapper-top">
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul className="breadcrumb">
                <li>
                  <a href="home.html">Home</a>
                </li>
                <li>Laporan Saran</li>
              </ul>
              <h2>PESAN DAN KESAN</h2>
            </div>
          </div>
        </section>
        <section className="section1">
          <div className="container clearfix">
            {/* Table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Nilai</th>
                  <th>Saran</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </Table>
            {this.state.isLoading && <Spinner />}
          </div>
        </section>
      </div>
    );
  }
}
export default LaporanSaran;
