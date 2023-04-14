import { createContext, useContext, useState } from "react";

const PaginateContext = createContext({
  currentPage: 1,
  changePage: () => {},
});

const PaginateProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePageHandler = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginateValue = {
    currentPage,
    changePage: changePageHandler,
  };

  return (
    <PaginateContext.Provider value={paginateValue}>
      {children}
    </PaginateContext.Provider>
  );
};

export const usePaginateContext = () => useContext(PaginateContext);

export default PaginateProvider;
