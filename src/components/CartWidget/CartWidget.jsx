import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import { ModalStore } from "../ModalStore/ModalStore";
import "./styles.scss";
import { useState } from "react";

export const CartWidget = ({ cantidad }) => {
  const [showCart, setShowCart] = useState(false);
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <div onClick={handleShow}>
        <FontAwesomeIcon icon={"shopping-cart"} className="ml-2 fa" size="lg" />{" "}
        <Badge
          pill
          variant="light"
          style={{
            verticalAlign: "top",
            marginLeft: -4,
            fontSize: "65%",
            opacity: "85%",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
            paddingTop: "0.2em",
          }}
        >
          {cantidad}
        </Badge>
        <span className="sr-only">Carrito de compras</span>
      </div>
      <ModalStore
        show={showCart}
        onHide={handleClose}
        title="Carrito de compras"
        text="Estos son los productos en tu carrito de compras:"
        textAction1="Cerrar"
        textAction2="Confirmar"
        action1={handleClose}
        action2={null}
      />
    </>
  );
};
