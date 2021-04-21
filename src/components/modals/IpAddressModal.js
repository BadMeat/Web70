import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class IpAddressModal extends Component {
  render() {
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
            <h4>IP Address</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Masukan IP Address anda</p>
          <input
            type="text"
            placeholder={"anonymous"}
            // value={this.state.nama}
            // onChange={(event) => this.handleInput(event, "nama")}
            style={{
              padding: 5,
              width: "100%",
              borderWidth: "1px",
              color: "gray",
              borderRadius: "5px",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save</Button>
          <Button variant="info">Set</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default IpAddressModal;
