import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/modalContext";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <Modal
        show={() => handleModal()}
        onHide={() => handleModal()}
        keyboard={false}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default ModalComponent;
