import React from "react";
import { Story, Meta } from "@storybook/react";
import { CustomizedButton, CustomizedTooltip } from "../../CustomizedComponent";
import { InfoOutlined } from "@material-ui/icons";
import { CustomizedTooltipProps } from "../../CustomizedComponent/CustomizedTooltip";

export default {
  title: "CAPA/Tooltip",
  component: CustomizedTooltip,
  argTypes: {
    color: {
      options: ["gray", "primary"],
      control: "radio",
      description: "툴팁의 테마색",
      defaultValue: "gray",
    },
    close_button: {
      control: "boolean",
      description: "툴팁 내부 종료버튼 노출여부",
      defaultValue: false,
    },
    arrow: {
      control: "boolean",
      description: "툴팁 화살표 노출 여부",
      defaultValue: false,
    },
    show_default: {
      control: "boolean",
      description: "기본 노출 여부 설정",
      defaultValue: false,
    },
    openAgain: {
      control: "boolean",
      description: "툴팁 종료 후 다시 표시할 수 있는지 여부",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "툴팁 내용, Template Literal로 전달시 줄바꿈 적용됨.",
    },
    placement: {
      description: "툴팁 노출 위치 설정",
      defaultValue: "bottom",
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: "radio",
    },
    closeByButtonOnly: {
      control: "boolean",
      description:
        "종료버튼 클릭을 통해서만 종료. 타 액션으로 인한 툴팁종료 방지",
      defaultValue: false,
    },
    zIndex: {
      control: "number",
      description: "zIndex 설정",
      defaultValue: "1500",
    },
    useHover: {
      control: "boolean",
      description: "호버를 통한 툴팁 노출, 숨김 사용",
      defaultValue: false,
    },
    children: {
      description: "툴팁이 설정될 Element",
    },
    boxStyle: {
      description: "툴팁 박스 관련 스타일 전달",
    },
    onCloseButtonAction: {
      description: "툴팁 종료 버튼 클릭시 액션(함수)",
    },
    button: {
      description: "툴팁 내 버튼(Element). fullWidth 추천",
    },
  },
} as Meta;

const Template: Story<CustomizedTooltipProps> = (args) => (
  <CustomizedTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: `모든 국민은 직업선택의 자유를 가진다. 
    대법관의 임기는 6년으로 하며`,
  children: <InfoOutlined />,
  boxStyle: { width: "fit-content" },
};

export const ColorGray = Template.bind({});
ColorGray.args = {
  ...Default.args,
  color: "gray",
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  ...Default.args,
  color: "primary",
};

export const Arrow = Template.bind({});
Arrow.args = {
  ...Default.args,
  arrow: true,
};

export const CloseButton = Template.bind({});
CloseButton.args = {
  ...Default.args,
  close_button: true,
};

export const CloseByCloseButton = Template.bind({});
CloseByCloseButton.args = {
  ...Default.args,
  close_button: true,
  closeByButtonOnly: true,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  useHover: true,
};

export const CanNotOpenAgain = Template.bind({});
CanNotOpenAgain.args = {
  ...Default.args,
  show_default: true,
  openAgain: false,
};

export const WithButton = Template.bind({});
WithButton.args = {
  ...Default.args,
  button: (
    <CustomizedButton variant="contained" color="primary" fullWidth>
      Button
    </CustomizedButton>
  ),
};
