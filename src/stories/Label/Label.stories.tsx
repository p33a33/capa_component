import React from "react";
import { Story, Meta } from "@storybook/react";
import { CustomizedLabel } from "../../CustomizedComponent";
import { CustomizedLabelProps } from "../../CustomizedComponent/CustomizedLable";
import { colorSet } from "../../Provider";
import { PlayArrow } from "@material-ui/icons";

export default {
  title: "CAPA/Label",
  component: CustomizedLabel,
  argTypes: {
    shape: { options: ["square", "round"], control: "radio" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    text: { control: "text" },
    fontWeight: { options: ["700", "500"], control: "radio" },
  },
} as Meta;

const Template: Story<CustomizedLabelProps> = (args) => (
  <CustomizedLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const ShapeRound = Template.bind({});
ShapeRound.args = {
  shape: "round",
  text: "Round",
};

export const ShapeSquare = Template.bind({});
ShapeSquare.args = {
  shape: "square",
  text: "Square",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <PlayArrow fontSize="small" />,
  text: "WithIcon",
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  text: "WithoutIcon",
};

export const Backgroundcolor = Template.bind({});
Backgroundcolor.args = {
  text: "BackgroundColor",
  backgroundColor: colorSet.primary500,
  textColor: colorSet.gray000,
};

export const Fontweight500 = Template.bind({});
Fontweight500.args = {
  fontWeight: "500",
  text: "FontWeight500",
};

export const Fontweight700 = Template.bind({});
Fontweight700.args = {
  fontWeight: "700",
  text: "FontWeight700",
};
