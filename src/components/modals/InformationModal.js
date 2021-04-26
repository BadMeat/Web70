import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const informationModal = (props) => {
  console.log("propsku", props.localUrl);
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
          <h4>
            Menu hanya bisa di akses dari network yang sama dengan aplikasi
            SLiMS SMAN70
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            window.open(`http://localhost/lib70/${props.localUrl}`, "_blank");
            props.onHide();
          }}
        >
          Lanjut
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default informationModal;
