import { DATA, CATEGORIES } from "../../utilidades/const";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Container, Spinner } from "react-bootstrap";
import { ItemList } from "../../components/ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);

  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoaded(false);
    setFilterProducts([]);
    setCategory(null);
    const getItems = async () => {
      let p, cat;
      if (products.length !== 0)
        p = id ? products.filter((p) => p.category === parseInt(id)) : products;
      else {
        const response = await fetch(`${DATA}`);
        let aux = await response.json();
        p = aux;
        setProducts(aux);
      }
      if (id) {
        if (categories.length === 0) {
          const response = await fetch(`${CATEGORIES}`);
          let aux = await response.json();
          setCategories(aux);
        }
        cat = categories.find((c) => c.id === parseInt(id));
      }
      setTimeout(() => {
        setFilterProducts(p);
        setCategory(cat);
        setLoaded(true);
      }, 1000);
    };
    getItems();
  }, [id, products, categories]);

  return (
    <Container>
      <h2 className="mb-3">
        {greeting}
        {category ? `: ${category.name}` : ""}
      </h2>

      {loaded ? (
        filterProducts.length === 0 ? (
          <Alert variant="danger" align="left" className={"mt-3"}>
            No hay productos para mostrar.
          </Alert>
        ) : (
          <ItemList data={filterProducts} />
        )
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner align="center" animation="border" variant="info" />
        </div>
      )}
    </Container>
  );
};