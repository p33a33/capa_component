import React from "react";
import { Story, Meta } from "@storybook/react";
import { Label } from "../../CustomizedComponent";
import { CustomizedLabelProps } from "../../CustomizedComponent/Lable";
import { colorSet } from "../../Provider";
import { PlayArrow } from "@material-ui/icons";

export default {
  title: "CAPA DesignSystem/Component/Label",
  component: Label,
  argTypes: {
    shape: {
      options: ["square", "round"],
      control: "radio",
      description: "레이블 모양",
      defaultValue: "round",
    },
    text: { control: "text", description: "레이블 문구" },
    backgroundColor: { control: "color", description: "레이블 배경 색상" },
    textColor: { control: "color", description: "레이블 문구 색상" },
    fontWeight: {
      options: ["700", "500"],
      control: "radio",
      description: "레이블 폰트 두께",
      defaultValue: "700",
    },
  },
} as Meta;

const Template: Story<CustomizedLabelProps> = (args) => <Label {...args} />;

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
