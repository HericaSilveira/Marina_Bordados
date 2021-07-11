import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import "./styles.scss";
import "../../App.scss";

export const CartWidget = ({ cantidad }) => {
  return (
    <>
      <FontAwesomeIcon icon={"shopping-cart"} className="ml-2 fa" size="lg" />{" "}
      <Badge
        pill
        variant="light"
        style={{ verticalAlign: "top", marginLeft: -4, fontSize: "65%", opacity: "85%" }}
      >
        {cantidad}
      </Badge>
      <span className="sr-only">Carrito de compras</span>
    </>
  );
};
