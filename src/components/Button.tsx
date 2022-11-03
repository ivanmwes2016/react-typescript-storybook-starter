import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #fe805c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  border: none;
  width: 142px;
  height: 40px;
`;

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.label}</StyledButton>;
};
