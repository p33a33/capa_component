import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Tab } from "../../CustomizedComponent";
import { CustomizedTabProps } from "../../CustomizedComponent/Tab";

export default {
  title: "CAPA DesignSystem/Component/Tab",
  component: Tab,
  argTypes: {
    tabs: { control: "array", defaultValue: ["a", "b"] },
  },
} as Meta;

const Template: Story<CustomizedTabProps> = (args) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Tab
      {...args}
      currentTab={currentTab}
      setCurrentTab={(newValue) => setCurrentTab(newValue)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "fullWidth",
};
