import { createContext, useContext, useState } from "react";
import useAPIData from "../services/useAPIData";

const PaginateContext = createContext({
  currentPage: 1,
  products: [],
  postsPerPage: 0,
  currentProducts: [],
  isLoading: false,
  changePage: () => {},
});

const PaginateProvider = ({ children }) => {
  const { products, isLoading } = useAPIData();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginateValue = {
    products,
    currentPage,
    postsPerPage,
    currentProducts,
    isLoading,
    changePage,
  };

  return (
    <PaginateContext.Provider value={paginateValue}>
      {children}
    </PaginateContext.Provider>
  );
};

export const usePaginateContext = () => useContext(PaginateContext);

export default PaginateProvider;
