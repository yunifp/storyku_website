import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-end items-center space-x-2 mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 bg-orange-200 hover:bg-orange-500 rounded-md"
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
        </button>
        <span className="px-4 py-2 bg-orange-500 rounded-md text-white">{currentPage}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 bg-orange-200 hover:bg-orange-500 rounded-md"
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
    </div>
  );
};

export default Pagination;
