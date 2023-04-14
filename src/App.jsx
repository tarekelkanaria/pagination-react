import { useState, useEffect } from "react";
import { usePaginateContext } from "./store/PaginateProvider";
import axios from "axios";
import AllCards from "./components/AllCards/AllCards";
import SearchBar from "./components/SearchBar/SearchBar";
import Paginate from "./components/Paginate/Paginate";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useAPIData from "./services/useAPIData";

function App() {
  const AppCTX = usePaginateContext();

  const { products } = useAPIData();

  const [currentProductsInPage, setCurrentProductsInPage] = useState([]);
  const [postsPerPage] = useState(10);

  const indexOfLastProduct = AppCTX.currentPage * postsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <main className="bg-primary-subtle p-5">
      <SearchBar />
      <AllCards products={currentProducts} />
      <Paginate total={products} perPage={postsPerPage} />
    </main>
  );
}

export default App;
