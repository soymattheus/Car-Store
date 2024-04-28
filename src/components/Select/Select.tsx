import React from "react";
import styled from "styled-components";

export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  background-color: #000;
  display: flex;
  align-items: center;
  border: 1px solid black; // Borda para o contêiner
  border-radius: 5px; // Bordas arredondadas
  width: 100%; // Largura do contêiner
  color: white;
  /* font-weight: 400; */

  /* Estilizar a opção de placeholder (a primeira opção) */
  option: {
    color: gray;
    background-color: #333;
  }
`;
