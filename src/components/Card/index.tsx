import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
`;

interface CardProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ onClick, children }) => {
  return <CardContainer onClick={onClick}>{children}</CardContainer>;
};
