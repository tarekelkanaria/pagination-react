import { usePaginateContext } from "../../store/PaginateProvider";
import Spinner from "react-bootstrap/Spinner";
import Card from "../Card/Card";

const AllCards = () => {
  const AllCardsCTX = usePaginateContext();
  // here we will pass isLoading and hasError from useAPIData hook to handle errors and loading

  const cardsElements = AllCardsCTX.currentProducts.map((product) => {
    return <Card key={product.id} {...product} />;
  });
  return (
    <>
      {AllCardsCTX.isLoading ? (
        <div className="text-center p-5">
          <Spinner
            animation="border"
            variant="warning"
            style={{ width: "4rem", height: "4rem" }}
          />
        </div>
      ) : (
        <section className="p-5 d-flex flex-wrap ">{cardsElements}</section>
      )}
    </>
  );
};

export default AllCards;
