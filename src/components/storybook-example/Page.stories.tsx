import React from "react";
import { Page, PageProps } from "./Page";
import * as HeaderStories from "./Header.stories";
import { Args } from "../../types";

export default {
  title: "Example/Page",
  component: Page,
};

const Template = (args: Args & PageProps) => <Page {...args} />;

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
  ...(HeaderStories.LoggedIn as any).args,
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {
  ...(HeaderStories.LoggedOut as any).args,
};
