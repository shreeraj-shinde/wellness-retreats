import _ from "lodash";

interface PropTypes {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: Function;
}

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}: PropTypes) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="flex justify-center gap-2 mt-4">
      {currentPage != 1 && (
        <button
          className="bg-[#1a3352] p-2 text-white rounded-md"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {currentPage != 8 && (
        <button
          className="bg-[#1a3352] p-2 text-white rounded-md"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
