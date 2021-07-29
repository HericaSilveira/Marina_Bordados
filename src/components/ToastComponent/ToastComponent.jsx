import { APP_NAME, SHOW_TOAST } from "../../utilidades/const";
import { useState } from "react";
import { Toast } from "react-bootstrap";

export const ToastComponent = ({ msj, type }) => {
  const [show, setShow] = useState(true);
  let alert = type === "error" ? "red" : "#17a2b8";
  return (
    <Toast
      style={{
        backgroundColor: alert,
        maxWidth: "100%",
      }}
      onClose={() => setShow(false)}
      show={show}
      delay={SHOW_TOAST}
      className="mt-3"
    >
      <Toast.Header>
        <strong className="mr-auto">Notificación</strong>
        <small>{APP_NAME}</small>
      </Toast.Header>
      <Toast.Body>{msj}</Toast.Body>
    </Toast>
  );
};
