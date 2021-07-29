import { useContext } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { CartContext } from "../../context/CartContext/CartContext";


export const NavBarContainer = () => {
  const { categories } = useContext(CartContext);
  return <NavBar categories={categories} />;
};
