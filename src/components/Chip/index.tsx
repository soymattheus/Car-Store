import React from "react";
import styled from "styled-components";

const ChipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  background-color: #e0dfdf;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #000;
  margin: 3px 3px;
`;

interface IChip {
  text: string;
}

export const Chip = ({ text }: IChip) => {
  return <ChipContainer>{text}</ChipContainer>;
};
