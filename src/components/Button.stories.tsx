import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Button, ButtonProps } from "./Button";
import { Args } from "../types";

export default {
  title: "Component/Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {},
};

const Story = (args: Args & ButtonProps) => <Button {...args} />;

export const Basic = Story.bind({});
(Basic as any).args = {
  label: "Button",
};
