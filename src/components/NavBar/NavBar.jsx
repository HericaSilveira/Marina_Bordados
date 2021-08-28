import { APP_NAME } from "../../utilidades/const";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./styles.scss";

export const NavBar = ({ categories }) => {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg">
      <div className="container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img
            src={"/assets/logo.png"}
            alt={APP_NAME}
            title={APP_NAME}
            style={{ maxWidth: 200 }}
            className="mr-2"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1 d-block d-lg-none mt-3">
            {categories.map((cat) => {
              return (
                <Nav.Link
                  as={NavLink}
                  activeClassName="active"
                  className="ml-2"
                  key={cat.id}
                  to={`/category/${cat.id}`}
                >
                  {cat.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="flex-grow-1 d-none d-lg-block"></Nav>
          <Nav className="mt-2">
            <Nav.Item>
              <CartWidget />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
