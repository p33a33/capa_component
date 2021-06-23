import React from "react";
import { Story, Meta } from "@storybook/react";
import { CustomizedButton, CustomizedDialog } from "../../CustomizedComponent";
import { CustomizedDialogProps } from "../../CustomizedComponent/CustomizedDialog";
import { colorSet } from "../../Provider";
import { CheckCircleOutlined } from "@material-ui/icons";

export default {
  title: "CAPA/Dialog",
  component: CustomizedDialog,
  argTypes: {
    open: { control: "boolean", description: "팝업의 열림/닫힘 상태" },
    iconBoxColor: {
      description: "아이콘이 표시되는 박스의 배경색",
      control: "color",
    },
    title: {
      description: "팝업 제목(default : h3, mobile : body1)",
      control: "text",
    },
    mainText: {
      description: "팝업 주요 내용(default : h4, mobile : body1)",
      control: "text",
    },
    subText: {
      description: "팝업 상세 내용(body2)",
      control: "text",
    },
    maxWidth: { default: 600, control: "number" },
  },
} as Meta;

const Template: Story<CustomizedDialogProps> = (args) => (
  <CustomizedDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: false,
  onClose: () => console.log("closed"),
  iconBoxColor: colorSet.goodDark,
  icon: <CheckCircleOutlined />,
  title: "모든 국민은 직업선택의 자유를 가진다.",
  mainText:
    "모든 국민은 직업선택의 자유를 가진다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  subText:
    "모든 국민은 직업선택의 자유를 가진다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회는 국가의 예산안을 심의·확정한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다.",
  buttons: (
    <>
      <CustomizedButton variant="contained" color="primary">
        Button 1
      </CustomizedButton>
      <CustomizedButton variant="contained" color="secondary">
        Button 2
      </CustomizedButton>
    </>
  ),
};
