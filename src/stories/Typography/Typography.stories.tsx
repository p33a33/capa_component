import React from "react";
import { Story, Meta } from "@storybook/react";
import { CustomizedTypography } from "../../CustomizedComponent";
import { Props } from "../../CustomizedComponent/CustomizedTypography";

export default {
  title: "CAPA/Typography",
  component: CustomizedTypography,
  argTypes: {
    variant: {
      options: ["caption", "body2", "body1", "h4", "h3", "h2", "h1"],
      control: "select",
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <CustomizedTypography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "모든 국민은 직업선택의 자유를 가진다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회는 국가의 예산안을 심의·확정한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다.",
};

export const ColorTextPrimary = Template.bind({});
ColorTextPrimary.args = {
  ...Default.args,
  color: "textPrimary",
};

export const ColorTextSecondaray = Template.bind({});
ColorTextSecondaray.args = {
  ...Default.args,
  color: "textSecondary",
};

export const ColorError = Template.bind({});
ColorError.args = {
  ...Default.args,
  color: "error",
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  ...Default.args,
  color: "primary",
};

export const VariantH1 = Template.bind({});
VariantH1.args = {
  ...Default.args,
  variant: "h1",
};

export const VariantH2 = Template.bind({});
VariantH2.args = {
  ...Default.args,
  variant: "h2",
};

export const VariantH3 = Template.bind({});
VariantH3.args = {
  ...Default.args,
  variant: "h3",
};

export const VariantH4 = Template.bind({});
VariantH4.args = {
  ...Default.args,
  variant: "h4",
};

export const VariantBody1 = Template.bind({});
VariantBody1.args = {
  ...Default.args,
  variant: "body1",
};

export const VariantBody2 = Template.bind({});
VariantBody2.args = {
  ...Default.args,
  variant: "body2",
};

export const VariantCaption = Template.bind({});
VariantCaption.args = {
  ...Default.args,
  variant: "caption",
};

export const Weight100 = Template.bind({});
Weight100.args = {
  ...Default.args,
  fontWeight: "100",
};

export const Weight300 = Template.bind({});
Weight300.args = {
  ...Default.args,
  fontWeight: "300",
};

export const Weight400 = Template.bind({});
Weight400.args = {
  ...Default.args,
  fontWeight: "400",
};

export const Weight500 = Template.bind({});
Weight500.args = {
  ...Default.args,
  fontWeight: "500",
};

export const Weight700 = Template.bind({});
Weight700.args = {
  ...Default.args,
  fontWeight: "700",
};

export const Weight900 = Template.bind({});
Weight900.args = {
  ...Default.args,
  fontWeight: "900",
};
