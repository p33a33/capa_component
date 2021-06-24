import React from "react";
import { Story, Meta } from "@storybook/react";
import { DialogAlert } from "../../CustomizedComponent";
import { DialogAlertProps } from "../../CustomizedComponent/DialogAlert";

export default {
  title: "CAPA DesignSystem/Component/DialogAlert",
  component: DialogAlert,
  argTypes: {
    open: { control: "boolean", description: "팝업의 열림/닫힘 상태" },
    icon: { description: "알림 팝업 아이콘" },
    title: {
      description: "알림 제목(h4)",
      control: "text",
    },
    subText: {
      description: "알림 상세 내용(body2)",
      control: "text",
    },
  },
} as Meta;

const Template: Story<DialogAlertProps> = (args) => <DialogAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: false,
  onClose: () => console.log("closed"),
  title: "모든 국민은 직업선택의 자유를 가진다.",
  subText: "대법관의 임기는 6년으로 하며",
  buttonLabel: "카파로 돌아가기",
  buttonAction: () => console.log("alert dialog button action"),
};
