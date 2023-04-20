import { useState } from "react";
import axios from "axios";

const useAPI = (updateProducts) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isInitial, setIsInitial] = useState(true);

  const requestData = async (search) => {
    const bgColor = {};
    const searchParam = `/search?q=${search}`;

    try {
      setIsLoading(true);
      setIsInitial(false);
      const response = await axios
        .get(
          `https://dummyjson.com/products${search ? searchParam : "?limit=0"}`
        )
        .then((res) => res.data.products);

      const loadedProducts = response.map((item) => {
        if (!bgColor[item.category]) {
          bgColor[item.category] =
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        }
        return {
          ...item,
          bgColor: bgColor[item.category],
        };
      });

      updateProducts(loadedProducts);
    } catch (error) {
      setHasError(true);
      setErrorText(`Something went wrong ${error.message}`);
    }

    setIsLoading(false);
  };

  return { isLoading, hasError, errorText, requestData, isInitial };
};

export default useAPI;
