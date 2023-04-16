import { usePaginateContext } from "../../store/PaginateProvider";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Pagination from "react-bootstrap/Pagination";

const Paginate = () => {
  const paginateCTX = usePaginateContext();
  const pageCount = Math.ceil(
    paginateCTX.products.length / paginateCTX.postsPerPage
  );

  const decrease = (currentPage) => {
    if (currentPage >= 1) {
      paginateCTX.changePage(currentPage);
    }
  };

  const increase = (currentPage) => {
    if (currentPage <= pageCount) {
      paginateCTX.changePage(currentPage);
    }
  };

  return (
    <Pagination className="d-flex justify-content-center p-5" size="lg">
      <Pagination.Prev
        onClick={() => decrease(paginateCTX.currentPage - 1)}
        disabled={paginateCTX.currentPage === 1}
        className="bg-light"
      >
        <MdArrowBackIosNew />
      </Pagination.Prev>
      <Pagination.Item disabled className="fs-2 bg-secondary-subtle">
        {paginateCTX.currentPage}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => increase(paginateCTX.currentPage + 1)}
        disabled={paginateCTX.currentPage === pageCount}
        className="bg-light"
      >
        <MdArrowForwardIos />
      </Pagination.Next>
    </Pagination>
  );
};

export default Paginate;
