import { NAME_APP } from "../../utilidades/const";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./logo.png";
import "./styles.scss";

export const NavBar = ({ categories, cart }) => {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg">
      <div className="container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img
            src={logo}
            alt={NAME_APP}
            title={NAME_APP}
            style={{ maxWidth: 160 }}
            className="mr-2"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-grow-1">
            {categories.map((cat) => {
              return (
                <Nav.Item className="ml-2" key={cat.id}>
                  <Link
                    to={`/category/${cat.id}`}
                    style={{ color: "#122333", textDecoration: "none" }}
                  >
                    {cat.name}
                  </Link>
                </Nav.Item>
              );
            })}
          </Nav>
          <Nav>
            <Nav.Item>
              <Link to={`/cart`}>
                <CartWidget cantidad={cart} />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
