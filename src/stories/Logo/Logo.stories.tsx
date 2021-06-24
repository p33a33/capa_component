import React from "react";
import { Story, Meta } from "@storybook/react";
import { Logo } from "../../CustomizedComponent";
import { LogoProps } from "../../CustomizedComponent/Logo";
import { colorSet } from "../../Provider";

export default {
  title: "CAPA DesignSystem/Component/Logo",
  component: Logo,
  argTypes: {
    width: { control: "number", description: "로고 너비", defaultValue: 300 },
    height: { control: "number", description: "로고 높이" },
    type: {
      options: ["client", "partner"],
      control: "radio",
      description: "로고 타입",
    },
    color: {
      options: ["primary", "black", "white"],
      control: "radio",
      description: "로고 색상",
    },
  },
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ClientPrimary = Template.bind({});
ClientPrimary.args = {
  type: "client",
  color: "primary",
};

export const ClientBlack = Template.bind({});
ClientBlack.args = {
  type: "client",
  color: "black",
};

export const ClientWhite = Template.bind({});
ClientWhite.args = {
  type: "client",
  color: "white",
};

export const PartnerPrimary = Template.bind({});
PartnerPrimary.args = {
  type: "partner",
  color: "primary",
};

export const PartnerBlack = Template.bind({});
PartnerBlack.args = {
  type: "partner",
  color: "black",
};

export const PartnerWhite = Template.bind({});
PartnerWhite.args = {
  type: "partner",
  color: "white",
};
