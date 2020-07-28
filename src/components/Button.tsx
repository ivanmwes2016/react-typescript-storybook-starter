import React from "react";

export interface ButtonProps {
  label?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <div>{props.label}</div>;
};
