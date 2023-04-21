import Card from "./Card";
import Spinner from "react-bootstrap/Spinner";

const CardsList = ({ products, isLoading, hasError, errorText, isInitial }) => {
  const cardsElements = products.map((product) => {
    return <Card key={product.id} {...product} />;
  });

  return (
    <>
      {isLoading ? (
        <div className="text-center p-5">
          <Spinner
            animation="border"
            variant="warning"
            style={{ width: "4rem", height: "4rem" }}
          />
        </div>
      ) : hasError ? (
        <div className="p-5">
          <p className="fs-3 text-danger text-center m-auto fw-bold">
            {errorText}
          </p>
        </div>
      ) : !isInitial && cardsElements.length === 0 ? (
        <div className="p-5">
          <p className="fs-3 text-danger text-center m-auto fw-bold">
            No Products Found
          </p>
        </div>
      ) : (
        <section className="p-sm-1 p-md-5 mt-2 d-flex justify-content-center flex-wrap ">
          {cardsElements}
        </section>
      )}
    </>
  );
};

export default CardsList;
