import { NAME_APP } from "../../utilidades/const";
import { Navbar, Nav } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./logo.png"; // with import
import "./styles.scss";
import { MenuItems } from "./MenuItems";
import { Auth } from "../Auth/Auth";

export const NavBar = ({ cart }) => {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg">
      <div className="container">
        <img
          src={logo}
          alt={NAME_APP}
          title={NAME_APP}
          style={{ maxWidth: 160 }}
          className="d-inline-block align-top"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-2">
            {MenuItems.map((item) => {
              return (
                <Nav.Link href={item.href} key={item.href}>
                  {item.name}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ml-auto">
            <Auth />
            <Nav.Link href="#cart">
              <CartWidget cantidad={cart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
