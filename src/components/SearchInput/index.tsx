import React from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa"; // Importar um ícone de pesquisa

// Criar um contêiner estilizado para o campo de pesquisa
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black; // Borda para o contêiner
  border-radius: 5px; // Bordas arredondadas
  /* padding: 5px; // Espaçamento interno */
  width: 100%; // Largura do contêiner
  background-color: #9ed99e;
  color: black;
  font-weight: bold;
`;

// Criar um campo de pesquisa estilizado
export const SearchInput = styled.input`
  border: none; // Remover borda do input
  outline: none; // Remover outline ao focar
  /* flex-grow: 1; // Permitir que o input cresça para preencher o contêiner */
  width: 80%;
  padding: 10px; // Espaçamento interno
  margin: 0px;
`;

// Criar um ícone de pesquisa estilizado
export const SearchIcon = styled(FaSearch)`
  color: black; // Cor do ícone
  margin: 5px 10px 5px 10px; // Margem à direita para o ícone
  cursor: pointer;
`;
