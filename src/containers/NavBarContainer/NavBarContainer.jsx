import { CATEGORIES } from "../../utilidades/const";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";

export const NavBarContainer = ({ cart }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      if (categories.length === 0) {
        const response = await fetch(`${CATEGORIES}`);
        let aux = await response.json();
        setCategories(aux);
      }
    };
    getCategories();
  }, [categories]);

  return <NavBar categories={categories} cart={cart} />;
};
