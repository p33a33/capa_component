import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CustomizedInput,
  CustomizedTypography,
} from "../../CustomizedComponent";
import { CustomizedInputProps } from "../../CustomizedComponent/CustomizedInput";

export default {
  title: "CAPA/Input",
  component: CustomizedInput,
  argTypes: {
    fullWidth: { control: "boolean" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    labelPlacement: { options: ["top", "left"], control: "radio" },
    inputLabel: { control: "text" },
    labelSubtext: { control: "text" },
  },
} as Meta;

const Template: Story<CustomizedInputProps> = (args) => (
  <CustomizedInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  placeholder: "small input",
  size: "small",
};

export const LeftLabel = Template.bind({});
LeftLabel.args = {
  ...Default.args,
  inputLabel: (
    <CustomizedTypography variant="body1" color="textPrimary">
      좌측라벨
    </CustomizedTypography>
  ),
  labelPlacement: "left",
};

export const TopLabel = Template.bind({});
TopLabel.args = {
  ...Default.args,
  inputLabel: (
    <CustomizedTypography variant="body1" color="textPrimary">
      상단라벨
    </CustomizedTypography>
  ),
  labelSubtext: (
    <CustomizedTypography variant="caption" color="textSecondary">
      인풋관련 Subtext입니다
    </CustomizedTypography>
  ),
  labelPlacement: "top",
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  placeholder: "medium input",
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  placeholder: "disabled input",
  size: "small",
  disabled: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  ...Default.args,
  multiline: true,
};

export const onError = Template.bind({});
onError.args = {
  ...Default.args,
  error: true,
  helperText: "Error on this input",
};
