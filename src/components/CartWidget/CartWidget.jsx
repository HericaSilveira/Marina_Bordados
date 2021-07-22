import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import "./styles.scss";

export const CartWidget = ({ cantidad }) => {
  return (
    <>
      <div>
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
    </>
  );
};
