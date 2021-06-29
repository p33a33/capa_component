import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Select, Typography } from "../../CustomizedComponent";
import { CustomizedSelectProps } from "../../CustomizedComponent/Select";

export default {
  title: "CAPA DesignSystem/Component/Select",
  component: Select,
  argTypes: {
    variant: {
      defaultValue: "outlined",
      control: "none",
    },
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
    placeholder: {
      control: "text",
      description: "Select 내부 안내문구 설정",
      defaultValue: "placeholder",
    },
    disabled: { control: "boolean", description: "비활성화" },
    error: {
      control: "boolean",
      description: "현재 select 에러 발생 여부",
    },
    helperText: {
      control: "text",
      description:
        "에러 발생시 select 아래 표시되는 안내 텍스트, error : true인 경우에만 노출",
    },
    labelPlacement: {
      options: ["top", "left"],
      control: "radio",
      description: "라벨 위치",
      defaultValue: "left",
    },
    inputLabel: { control: "text", description: "Select 라벨 문구" },
    listPlacement: {
      options: ["top", "bottom"],
      control: "radio",
    },
    labelSubtext: {
      control: "text",
      description: "Select 라벨 설명문구(라벨 위치 top인 경우에만 표시)",
    },
    menuItems: {
      control: "array",
      description:
        "Select 아이템을 [{item : ReactNode or string, value : any}] 형식으로 전달",
      defaultValue: [
        { item: "default", value: "default" },
        { item: "second", value: "second" },
        { item: "third", value: "third" },
      ],
    },
  },
} as Meta;

const Template: Story<CustomizedSelectProps> = (args) => {
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setValue(e.target.value as string);
  };

  return <Select {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  size: "small",
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

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};

export const ErrorWHelpertext = Template.bind({});
ErrorWHelpertext.args = {
  ...Default.args,
  error: true,
  helperText: "error",
};
