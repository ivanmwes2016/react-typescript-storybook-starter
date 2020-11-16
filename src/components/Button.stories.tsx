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

const Story = (args: Args & ButtonProps) => {
  return (
    <div>
      <p>
        This is a sample component. To learn more about Storybook:
        <a
          href="https://storybook.js.org/docs/react/get-started/introduction"
          target="_blank"
          rel="noreferrer"
        >
          https://storybook.js.org/docs/react/get-started/introduction
        </a>
      </p>
      <Button {...args} />
    </div>
  );
};

export const Basic = Story.bind({});
(Basic as any).args = {
  label: "Button",
};
