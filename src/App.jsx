import { Suspense, lazy, useState } from "react";
import { usePageContext } from "./store/PageProvider";
import useAPI from "./hooks/use-api";
import SearchBar from "./components/SearchBar/SearchBar";

import Paginate from "./components/Paginate/Paginate";
import Spinner from "react-bootstrap/Spinner";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const CardsList = lazy(() => import("./components/CardsList"));
function App() {
  const AppCTX = usePageContext();
  const [products, setProducts] = useState([]);
  const { isLoading, hasError, errorText, requestData, isInitial } = useAPI(
    (productsData) => setProducts(productsData)
  );
  const productsPerPage = 10;

  const updateSearch = (word) => {
    requestData(word);
  };

  const indexOfLastProduct = AppCTX.currentPage * productsPerPage;
  const indexOfFirstProducs = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProducs,
    indexOfLastProduct
  );

  return (
    <main className="bg-primary-subtle p-5">
      <SearchBar search={updateSearch} />
      <Suspense
        fallback={
          <div className="text-center p-5">
            <Spinner
              animation="border"
              variant="warning"
              style={{ width: "4rem", height: "4rem" }}
            />
          </div>
        }
      >
        <CardsList
          products={currentProducts}
          isLoading={isLoading}
          hasError={hasError}
          errorText={errorText}
          isInitial={isInitial}
        />
      </Suspense>
      <Paginate totalProducts={products.length} perPage={productsPerPage} />
    </main>
  );
}

export default App;
