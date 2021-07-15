import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetailContainer";
import { Container, Row, Col } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas);

function App() {
  const [cart, setCart] = useState(0);
  function addToCart(c) {
    setCart(cart + c);
  }
  return (
    <>
      <header style={{ marginBottom: "4rem" }}>
        <NavBar cart={cart} />
      </header>
      <Container>
        <Row>
          <Col>
            <ItemDetailContainer
              greeting={"ItemDetailContainer"}
              onAdd={addToCart}
            />
          </Col>
        </Row>
        <hr color="white" />{" "}
        <Row className="mb-4">
          <Col>
            <ItemListContainer
              greeting={"ItemListContainer"}
              onAdd={addToCart}
            />
          </Col>
        </Row>
      </Container>
      <footer></footer>
    </>
  );
}

export default App;
