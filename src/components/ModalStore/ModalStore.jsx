import { Modal, Button } from "react-bootstrap";
import "./styles.scss";

export const ModalStore = ({
  show,
  onHide,
  title,
  text,
  textAction1,
  textAction2,
  action1,
  action2,
}) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer>
          {action1 != null ? (
            <Button
              variant={action2 == null ? "primary" : "secondary"}
              onClick={() => action1()}
            >
              {textAction1}
            </Button>
          ) : null}
          {action2 != null ? (
            <Button variant="primary" onClick={() => action2()}>
              {textAction2}
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};
