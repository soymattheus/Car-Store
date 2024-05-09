import React from "react";
import styled from "styled-components";

export const IconButton = styled.button<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border: none;
  /* border-radius: 50%; */
  background-color: transparent;
  background: transparent;
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  cursor: pointer;
  width: 100;
  height: 50;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
  }

  /* Customize the size of the icon */
  svg {
    width: 24px;
    height: 24px;
  }
`;
