import React from "react";
import { MenuItem } from "@material-ui/core";
import { Story, Meta } from "@storybook/react";
import { Select, Typography } from "../../CustomizedComponent";
import { CustomizedSelectProps } from "../../CustomizedComponent/Select";

export default {
  title: "CAPA DesignSystem/Component/Select",
  component: Select,
  argTypes: {
    width: {
      control: "number",
      defaultValue: 300,
    },
    size: {
      options: ["small", "medium"],
      control: "radio",
      description: "Select 크기",
      defaultValue: "small",
    },
    autoWidth: {
      control: "boolean",
      description: "아이템 너비에 따른 자동너비 설정 여부",
      defaultValue: false,
    },
    placeholder: { control: "text", description: "Select 내부 안내문구 설정" },
    disabled: { control: "boolean", description: "비활성화" },
    labelPlacement: {
      options: ["top", "left"],
      control: "radio",
      description: "라벨 위치",
      defaultValue: "left",
    },
    inputLabel: { control: "text", description: "Select 라벨 문구" },
    labelSubtext: {
      control: "text",
      description: "Select 라벨 설명문구(라벨 위치 top인 경우에만 표시)",
    },
    menuItems: {
      control: "array",
      description:
        "Select 아이템을 [{item : string, value : any}] 형식으로 전달",
      defaultValue: [
        { item: "default", value: "default" },
        { item: "second", value: "second" },
        { item: "third", value: "third" },
      ],
    },
  },
} as Meta;

const Template: Story<CustomizedSelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  placeholder: "small input",
  size: "small",
  defaultValue: "default",
};

export const LeftLabel = Template.bind({});
LeftLabel.args = {
  ...Default.args,
  inputLabel: (
    <Typography variant="body1" color="textPrimary">
      좌측라벨
    </Typography>
  ),
  labelPlacement: "left",
};

export const TopLabel = Template.bind({});
TopLabel.args = {
  ...Default.args,
  inputLabel: (
    <Typography variant="body1" color="textPrimary">
      상단라벨
    </Typography>
  ),
  labelSubtext: (
    <Typography variant="caption" color="textSecondary">
      인풋관련 Subtext입니다
    </Typography>
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
};
