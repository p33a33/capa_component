import React from "react";
import { Story, Meta } from "@storybook/react";
import { Container } from "../../CustomizedLayout";
import { ContainerProps } from "../../CustomizedLayout/Container";

export default {
  title: "CAPA DesignSystem/Layout/Container",
  component: Container,
  argTypes: {
    paddingTop: { control: "text" },
    paddingBottom: { control: "text" },
    minHeight: { control: "text" },
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const PaddingY32 = Template.bind({});
PaddingY32.args = {
  children: "children 위치",
  paddingTop: "32px",
  paddingBottom: "32px",
  minHeight: "100vh",
};
