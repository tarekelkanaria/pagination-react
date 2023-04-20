import { usePageContext } from "../../store/PageProvider";
import Pagination from "react-bootstrap/Pagination";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Paginate = ({ totalProducts, perPage }) => {
  const paginateCTX = usePageContext();

  const totalPages = Math.ceil(totalProducts / perPage);

  const nextPage = (newPage) => {
    if (newPage <= totalPages) {
      paginateCTX.changePage(newPage);
    }
  };

  const previousPage = (newPage) => {
    if (newPage >= 1) {
      paginateCTX.changePage(newPage);
    }
  };

  return (
    <Pagination className="d-flex justify-content-center p-5" size="lg">
      <Pagination.Prev
        onClick={() => previousPage(paginateCTX.currentPage - 1)}
        disabled={paginateCTX.currentPage === 1}
        className="bg-light"
      >
        <MdArrowBackIosNew />
      </Pagination.Prev>
      <Pagination.Item disabled className="fs-2 bg-secondary-subtle">
        {paginateCTX.currentPage}
      </Pagination.Item>
      <Pagination.Next
        onClick={() => nextPage(paginateCTX.currentPage + 1)}
        disabled={paginateCTX.currentPage === totalPages}
        className="bg-light"
      >
        <MdArrowForwardIos />
      </Pagination.Next>
    </Pagination>
  );
};

export default Paginate;
