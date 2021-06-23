import React from "react";
import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "@material-ui/core";
import { CustomizedButton } from "../../CustomizedComponent";

export default {
  title: "CAPA/Button",
  component: CustomizedButton,
  argTypes: {
    color: { options: ["primary", "secondary"], control: "radio" },
    size: { options: ["small", "medium", "large"], control: "radio" },
    variant: { options: ["contained", "outlined", "text"], control: "radio" },
    children: { control: "text" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <CustomizedButton {...args} disableElevation />
);

export const Contained = Template.bind({});
Contained.args = {
  color: "primary",
  variant: "contained",
  size: "large",
  children: "Contained Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  color: "primary",
  variant: "outlined",
  size: "large",
  children: "Outlined Button",
};

export const Text = Template.bind({});
Text.args = {
  color: "primary",
  variant: "text",
  size: "large",
  children: "Text Button",
};

export const Large = Template.bind({});
Large.args = {
  color: "primary",
  variant: "contained",
  size: "large",
  children: "Large Button",
};

export const Medium = Template.bind({});
Medium.args = {
  color: "primary",
  variant: "contained",
  size: "medium",
  children: "Medium Button",
};

export const Small = Template.bind({});
Small.args = {
  color: "primary",
  variant: "contained",
  size: "small",
  children: "Small Button",
};
