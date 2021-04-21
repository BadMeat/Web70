import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "../../axios-db";
import Spinner from "../ui/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
class FormIsianModal extends Component {
  state = {
    nama: "",
    saran: "",
    nilai: "biasa",
    isLoading: false,
    belumTerisi: false,
  };

  submitData = () => {
    this.setState({
      isLoading: true,
    });

    if (this.state.saran === "" || this.state.nilai === "") {
      this.setState({
        belumTerisi: true,
        isLoading: false,
      });
      return;
    }

    let nama = "";

    if (this.state.nama === "") {
      nama = "anonymus";
    } else {
      nama = this.state.nama;
    }
    const submitedData = {
      nama: nama,
      saran: this.state.saran,
      nilai: this.state.nilai,
    };
    axios
      .post("/saran.json", submitedData)
      .then((_) => this.setState({ isLoading: false, belumTerisi: false }))
      .catch((_) => this.setState({ isLoading: false, belumTerisi: false }));

    this.setState({
      nama: "",
      saran: "",
      nilai: "biasa",
      isLoading: false,
      belumTerisi: false,
    });
  };

  handleInput = (event, property) => {
    if (this.state.belumTerisi) {
      this.setState({
        belumTerisi: false,
      });
    }
    this.setState({
      [property]: event.target.value,
    });
  };

  handleOptionChange = (event) => {
    this.setState({
      nilai: event.target.value,
      selectedNilai: event.target.value,
    });
  };

  render() {
    const RenderContent = () => {
      if (this.state.isLoading) {
        return <Spinner />;
      }

      return <Button onClick={this.submitData}>Submit</Button>;
    };

    const RenderError = () => {
      return (
        <p style={{ color: "red" }}>Silahkan isi semua data terlebih dahulu</p>
      );
    };

    return (
      <Modal
        animation={false}
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Pesan dan Saran</h4>
            {this.state.belumTerisi && <RenderError />}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nama</p>
          <input
            type="text"
            placeholder={"anonymous"}
            value={this.state.nama}
            onChange={(event) => this.handleInput(event, "nama")}
            style={{
              padding: 5,
              width: "100%",
              borderWidth: "1px",
              color: "gray",
              borderRadius: "5px",
            }}
          />
          <p>Pesan dan Saran</p>
          <textarea
            value={this.state.saran}
            onChange={(event) => this.handleInput(event, "saran")}
            style={{
              padding: 5,
              width: "100%",
              borderWidth: "1px",
              color: "gray",
              borderRadius: "5px",
            }}
          />
          <p>Nilai terhadap website</p>
          <form onSubmit={this.handleOptionChange}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="buruk"
                  name="nilai"
                  checked={this.state.nilai === "buruk"}
                  onChange={this.handleOptionChange}
                />
                Buruk
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="biasa"
                  name="nilai"
                  checked={this.state.nilai === "biasa"}
                  onChange={this.handleOptionChange}
                />
                Biasa
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="bagus"
                  name="nilai"
                  checked={this.state.nilai === "bagus"}
                  onChange={this.handleOptionChange}
                />
                Bagus
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <RenderContent />
        </Modal.Footer>
      </Modal>
    );
  }
}
export default FormIsianModal;
