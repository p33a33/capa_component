import React from "react";
import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "@material-ui/core";
import { Button } from "../../CustomizedComponent";

export default {
  title: "CAPA DesignSystem/Component/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: "radio",
      description: "버튼 색상",
      defaultValue: "primary",
    },
    size: {
      options: ["small", "medium", "large"],
      control: "radio",
      description: "버튼 사이즈",
      defaultValue: "medium",
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: "radio",
      description: "버튼 스타일",
      defaultValue: "contained",
    },
    children: { control: "text", description: "버튼 라벨" },
    fullWidth: { control: "boolean", description: "전체너비 여부" },
    disabled: { control: "boolean", description: "비활성화" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} disableElevation />
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
