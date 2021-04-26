import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const notificationModal = (props) => {
  return (
    <Modal
      animation={false}
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="my-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Aplikasi masih dalam tahap pengembangan</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Keluar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default notificationModal;
