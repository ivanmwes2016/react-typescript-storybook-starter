import React from "react";
import { action } from "@storybook/addon-actions";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={action("onClick")}>{props.label}</button>;
};
