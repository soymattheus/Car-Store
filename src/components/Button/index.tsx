import React from "react";
import styled from "styled-components";

export const Button = styled.button<{ black?: boolean }>`
  background-color: ${(props) => (props.black ? "black" : "#FF6600")};
  color: ${(props) => (props.black ? "white" : "black")};
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;

  &:hover {
    background-color: ${(props) => (props.black ? "darkblue" : "#ff6600a7")};
  }
`;
