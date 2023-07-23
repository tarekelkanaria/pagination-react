import { useState, useCallback, CSSProperties } from "react";
import useProductsData from "../../hooks/useProductsData";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import DotLoader from "react-spinners/DotLoader";

import { ProductItemType } from "../../types/products";

import ProductItem from "./ProductItem";
import SearchBar from "../SearchBar";
import classes from "./ProductsList.module.css";

const bgColor = new Map<string, string>();

const loaderStyle: CSSProperties = {
  display: "block",
  margin: "50px auto",
};

const ProductsList = () => {
  const [skipNumber, setSkipNumber] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const pageNumber =
    skipNumber > 1 ? Math.floor(skipNumber / 10 + 1) : skipNumber;

  const { isLoading, isError, error, data, isSuccess } = useProductsData(
    skipNumber,
    searchTerm
  );

  const handleSearching = useCallback((text: string) => {
    setSearchTerm(text);
  }, []);

  let productsPerPage: ProductItemType[];
  let totalProducts: number;

  if (isSuccess) {
    ({
      data: { products: productsPerPage },
    } = data as { data: { products: ProductItemType[] } });
    ({
      data: { total: totalProducts },
    } = data as { data: { total: number } });
  }

  const addBGColor = (key: string): string => {
    if (bgColor.get(key) === undefined) {
      bgColor.set(
        key,
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
      );
    }
    return bgColor.get(key)!;
  };

  return (
    <>
      <header className="mb-3">
        <SearchBar search={handleSearching} />
      </header>
      <main className={classes["content-wrapper"]}>
        <DotLoader
          size={60}
          color="#fcd34d"
          loading={isLoading}
          cssOverride={loaderStyle}
        />
        {isError && <h2 className={classes.error}>{error.message}</h2>}
        {isSuccess && productsPerPage.length === 0 && (
          <h2 className={classes.error}>No Products Found</h2>
        )}
        {isSuccess && (
          <section className={classes["products-wrapper"]}>
            {productsPerPage.map((product) => (
              <ProductItem
                key={product.id}
                {...product}
                addUniqueBG={addBGColor}
              />
            ))}
          </section>
        )}
        {searchTerm.length === 0 && (
          <section className={classes.actions}>
            <button
              onClick={() => setSkipNumber((prevPage) => prevPage - 10)}
              disabled={skipNumber === 1}
              className={classes["prev-btn"]}
            >
              <MdArrowBackIosNew />
            </button>
            <span className="mr-2">{pageNumber}</span>
            <button
              onClick={() => setSkipNumber((prevPage) => prevPage + 10)}
              disabled={skipNumber === totalProducts - 10 + 1}
              className={classes["next-btn"]}
            >
              <MdArrowForwardIos />
            </button>
          </section>
        )}
      </main>
    </>
  );
};

export default ProductsList;
