import { useCallback, useState } from "react";
import { usePageContext } from "./store/PageProvider";
import useAPI from "./hooks/use-api";
import SearchBar from "./components/SearchBar";
import CardsList from "./components/CardsList";
import Paginate from "./components/Paginate";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // context api to get current page
  const AppCTX = usePageContext();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // Passing function and search term to api hook to extract the data
  const changeProducts = useCallback((productsData) => {
    setProducts(productsData);
  }, []);

  const { isLoading, hasError, errorText, isInitial } = useAPI(
    changeProducts,
    searchTerm
  );
  const productsPerPage = 10;

  // update the data when user start searching
  const updateSearch = useCallback((word) => {
    setSearchTerm(word);
  }, []);
  // get the current products for the current page
  const indexOfLastProduct = AppCTX.currentPage * productsPerPage;
  const indexOfFirstProducs = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProducs,
    indexOfLastProduct
  );

  return (
    <main className="bg-primary-subtle p-sm-1 p-md-5">
      <SearchBar search={updateSearch} />
      <CardsList
        products={currentProducts}
        isLoading={isLoading}
        hasError={hasError}
        errorText={errorText}
        isInitial={isInitial}
      />
      <Paginate totalProducts={products.length} perPage={productsPerPage} />
    </main>
  );
}

export default App;
