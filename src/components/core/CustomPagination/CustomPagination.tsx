import React, { useState, useEffect } from "react";

interface CustomPaginationProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newPage: number
  ) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const [previousCount, setPreviousCount] = useState(count);

  useEffect(() => {
    if (count !== previousCount && count !== 0) {
      setPreviousCount(count);
    }
  }, [count, previousCount]);

  const totalPages = Math.ceil(previousCount / rowsPerPage);

  const handlePreviousPage = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (page > 0) onPageChange(event, page - 1);
  };

  const handleNextPage = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (page < totalPages - 1) onPageChange(event, page + 1);
  };

  // Logic for determining the pages to show
  const getPagesToShow = () => {
    const pages: number[] = [];

    const range = 1; // Show 1 page before and after the current page

    // Show the first four pages at the start
    if (page <= 4) {
      // Show the first 4 pages if the current page is less than or equal to 4
      for (let i = 0; i < Math.min(4, totalPages); i++) {
        pages.push(i);
      }
    } else {
      // Otherwise, show 1 page before and after the current page
      pages.push(0);
      for (let i = page - range; i <= page + range; i++) {
        if (i >= 0 && i < totalPages) {
          pages.push(i);
        }
      }
    }

    // Ensure that the current page is always included
    if (!pages.includes(page)) {
      pages.push(page);
    }

    // Always show the last page, but only if it's not already included
    if (!pages.includes(totalPages - 1)) {
      pages.push(totalPages - 1);
    }

    // Remove duplicates and sort
    const uniquePages = Array.from(new Set(pages)).sort((a, b) => a - b);

    const pagesWithEllipsis: (number | string)[] = [];

    // Add ellipsis if needed
    for (let i = 0; i < uniquePages.length; i++) {
      if (i > 0 && uniquePages[i] - uniquePages[i - 1] > 1) {
        pagesWithEllipsis.push("...");
      }
      pagesWithEllipsis.push(uniquePages[i]);
    }

    return pagesWithEllipsis;
  };

  const pagesToShow = getPagesToShow();

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-end space-x-2 mt-2">
        {/* Previous Button */}
        <button
          onClick={handlePreviousPage}
          className={`px-3 py-1 rounded font-semibold ${
            page > 0 ? "cursor-pointer" : "cursor-not-allowed opacity-50"
          }`}
          disabled={page === 0}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {pagesToShow.map((pageItem, index) => (
          <button
            key={index}
            onClick={(event) => {
              if (pageItem !== "...") {
                onPageChange(
                  event as React.MouseEvent<HTMLElement, MouseEvent>,
                  pageItem as number
                );
              }
            }}
            className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded ${
              pageItem === page
                ? "font-semibold rounded-sm bg-[#2BD17E]"
                : "bg-[#092C39]"
            } ${
              pageItem === "..." ? "text-lg font-bold" : "text-sm font-medium"
            }`}
            disabled={pageItem === "..."}
          >
            {pageItem === "..." ? "..." : Number(pageItem) + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          className={`px-3 py-1 rounded font-semibold ${
            page < totalPages - 1
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          disabled={page >= totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
