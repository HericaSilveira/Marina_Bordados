import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { getCategories } from "../../firebase/client";


export const NavBarContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const waitForData = async () => {
      setCategories(await getCategories());
    };
    waitForData();
  }, []);
  return <NavBar categories={categories} />;
};