import React from "react";
import { Story, Meta } from "@storybook/react";
import { BasicPage } from "../../Examples";

export default {
  title: "CAPA DesignSystem/Example/BasicPage",
  component: BasicPage,
} as Meta;

const Template: Story = (args) => <BasicPage {...args} />;

export const Default = Template.bind({});
