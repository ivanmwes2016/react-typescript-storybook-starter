import React from "react";
import { Button, ButtonProps } from "./Button";
import { Args } from "../../types";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: Args & ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
(Primary as any).args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
(Secondary as any).args = {
  label: "Button",
};

export const Large = Template.bind({});
(Large as any).args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
(Small as any).args = {
  size: "small",
  label: "Button",
};
