import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Alert, Container } from "react-bootstrap";
import { ItemList } from "../../components/ItemList/ItemList";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import "./styles.scss";

export const ItemListContainer = () => {
  const { products, categories } = useContext(CartContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    let cat = id ? categories.find((c) => c.id === parseInt(id)) : null;
    let p = id ? products.filter((p) => p.category === parseInt(id)) : products;
    setFilterProducts(p);
    setCategory(cat);
  }, [id, products, categories]);

  return (
    <Container>
      <Row>
        <Col md={3} className="categories d-none d-md-block">
          <h5 className="mb-3">Categorías</h5>
          <ul className=" list-unstyled nav-links">
            <li>
              <Link to={`/`} style={{ textDecoration: "none" }}>
                Todos los productos{" "}
              </Link>
            </li>
            {categories.map((cat) => {
              return (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col md={9}>
          <h2 key={1} className="mb-3">
            {category ? `${category.name}` : ""}
          </h2>
          {filterProducts.length === 0 ? (
            <Alert key={2} variant="danger" align="left" className={"mt-3"}>
              No hay productos para mostrar.
            </Alert>
          ) : (
            <ItemList key={2} data={filterProducts} />
          )}
        </Col>
      </Row>
    </Container>
  );
};
