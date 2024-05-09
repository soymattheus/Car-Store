import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

// Estilo para o componente de paginação
const StyledPagination = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;

  li {
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
  }

  li.selected {
    background-color: #ff6600; /* Cor de fundo para a página atual */
    color: white;
  }

  li:hover {
    background-color: #f0f0f0;
  }
`;

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <StyledPagination
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"selected"}
    />
  );
};
