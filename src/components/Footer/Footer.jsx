import { APP_NAME } from "../../utilidades/const";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 pr-md-5">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <img
                src={"/assets/logo-footer.png"}
                alt={APP_NAME}
                title={APP_NAME}
                style={{ maxWidth: 140 }}
                className="mr-2"
              />
            </Link>
            <p className="mt-2">
              <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />{" "}Colonia,
              Uruguay.
            </p>
          </div>
          <div className="col-md text-md-center mt-4">
            <ul className="list-unstyled nav-links">
              <li>
                <a href="/">Políticas de privacidad</a>
              </li>
              <li>
                <a href="/">Términos y condiciones</a>
              </li>
            </ul>
          </div>
          <div className="col-md text-md-center mt-4">
            <ul className="social list-unstyled">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/marinadelaquintana"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=59899091793"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />{" "}
                </a>
              </li>
            </ul>
            <p>
              <a href="/" className="btn btn-tertiary">
                Contactános
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="copyright mt-5 pt-5">
              <p>
                <small>© 2021 Todos los derechos reservados.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

