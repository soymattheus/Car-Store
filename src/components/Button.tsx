import React from "react";
import styled from "styled-components";

export const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "blue" : "#FF6600")};
  color: black;
  font-weight: bolder;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "#ff6600a7")};
  }
`;
