import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../Buttons/Button";
import "./styles.scss";

export const NotFound = () => {
  return (
    <Container>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <h3 className="oops">¡Oops! Página no encontrada</h3>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <ButtonComponent
            text={`Home`}
            variant="outline-light"
            icon={<FontAwesomeIcon icon={"home"} title="Home" />}
          />
        </Link>
      </div>
    </Container>
  );
};
