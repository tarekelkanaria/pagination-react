import { useState, useEffect } from "react";
import axios from "axios";

const useAPIData = () => {
  const [productsData, setProductsData] = useState({
    products: [],
    isLoading: false,
    hasError: false,
    errorText: "",
  });

  const getData = async (search) => {
    const colors = {};
    const searchParam = `search?q=${search}`;
    try {
      setProductsData((prevData) => ({ ...prevData, isLoading: true }));
      const response = await axios
        .get(`https://dummyjson.com/products/${search ? searchParam : ""}`)
        .then((res) => res.data.products);
      const loadedProducts = response.map((item) => {
        if (!colors[item.category]) {
          colors[item.category] =
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        }
        return {
          ...item,
          color: colors[item.category],
        };
      });
      setProductsData((prevData) => ({
        ...prevData,
        products: loadedProducts,
      }));
    } catch (error) {
      setProductsData((prevProducts) => ({
        ...prevProducts,
        hasError: true,
        errorText: `Something went wrong ${error.message}`,
      }));
    }
    setProductsData((prevData) => ({ ...prevData, isLoading: false }));
  };

  useEffect(() => {
    getData();
  }, []);

  return { ...productsData, getData };
};
export default useAPIData;
