import { createContext, useContext, useState } from "react";

const PageContext = createContext({
  currentPage: 1,
  changePage: () => {},
});

const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const PageContextValue = {
    currentPage,
    changePage,
  };
  return (
    <PageContext.Provider value={PageContextValue}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
export default PageProvider;
