import React from "react";
import { Header, HeaderProps } from "./Header";
import { Args } from "../../types";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args: Args & HeaderProps) => <Header {...args} />;

export const LoggedIn = Template.bind({});
(LoggedIn as any).args = {
  user: {},
};

export const LoggedOut = Template.bind({});
(LoggedOut as any).args = {};
