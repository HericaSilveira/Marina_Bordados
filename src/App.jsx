import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { NavBarContainer } from "./containers/NavBarContainer/NavBarContainer";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/ItemDetailContainer";
import { ItemCheckoutContainer } from "./containers/ItemCheckoutContainer/ItemCheckoutContainer";
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
      <BrowserRouter>
        <header style={{ marginBottom: "5rem" }}>
          <NavBarContainer cart={cart} />
        </header>

        <Switch>
          <Route exact path="/">
            <ItemListContainer
              greeting={"Listado de productos"}
            />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer
              greeting={"Listado de productos por categoría"}
            />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer
              greeting={"Detalle de producto"}
              onAddToCart={addToCart}
            />
          </Route>
          <Route path="/cart">
            <ItemCheckoutContainer
              greeting={"Carrito de compras"}
              cart={cart}
            />
          </Route>
          <footer></footer>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
