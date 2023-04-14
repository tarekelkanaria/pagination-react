import { usePaginateContext } from "../../store/PaginateProvider";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Pagination from "react-bootstrap/Pagination";

const Paginate = ({ total, perPage }) => {
  const paginateCTX = usePaginateContext();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const pageCount = Math.ceil(total.length / perPage);

  const decrease = (currentPage) => {
    if (currentPage > 1) {
      setCurrentPageNumber((prevPage) => prevPage - 1);
    }
    paginateCTX.changePage(currentPage);
  };

  const increase = (currentPage) => {
    if (currentPage < pageCount) {
      setCurrentPageNumber((prevPage) => prevPage + 1);
    }
    paginateCTX.changePage(currentPage);
  };

  return (
    <Pagination className="d-flex justify-content-center p-5" size="lg">
      <Pagination.Prev
        onClick={() => decrease(currentPageNumber)}
        disabled={currentPageNumber === 1}
        className="bg-light"
      >
        <MdArrowBackIosNew />
      </Pagination.Prev>
      <Pagination.Item disabled className="fs-2 bg-secondary-subtle">
        {currentPageNumber}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => increase(currentPageNumber)}
        disabled={currentPageNumber === pageCount}
        className="bg-light"
      >
        <MdArrowForwardIos />
      </Pagination.Next>
    </Pagination>
  );
};

export default Paginate;
