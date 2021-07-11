import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";
import { Container } from "react-bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  const [cart, setCart] = useState(0);
  function addToCart(c) {
    setCart(c);
  }
  return (
    <>
      <header style={{ marginBottom: "4rem" }}>
        <NavBar cart={cart} />
      </header>
      <Container>
        <ItemListContainer
          greeting={"Bienvenidos"}
          onAdd={addToCart}
        />
      </Container>
      <footer></footer>
    </>
  );
}

export default App;
