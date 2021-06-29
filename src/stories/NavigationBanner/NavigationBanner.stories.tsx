import React from "react";
import { Story, Meta } from "@storybook/react";
import { NavigationBanner } from "../../CustomizedComponent";
import { NavigationBannerProps } from "../../CustomizedComponent/NavigationBanner";
import { ChevronRight, InfoOutlined } from "@material-ui/icons";
import { colorSet } from "../../Provider";

export default {
  title: "CAPA DesignSystem/Component/NavigationBanner",
  component: NavigationBanner,
  argTypes: {
    backgroundColor: { control: "color" },
    paddingLeft: { contorl: "number" },
    text: { control: "text" },
  },
} as Meta;

const Template: Story<NavigationBannerProps> = (args) => (
  <NavigationBanner {...args} />
);

export const InfoBanner = Template.bind({});
InfoBanner.args = {
  backgroundColor: "#FCE7E7",
  startIcon: <InfoOutlined style={{ fill: colorSet.gray700 }} />,
  endIcon: <ChevronRight />,
  text: "고객님, 무료 견적을 위한 필수 정보를 입력해주세요!",
};

export const RatingBanner = Template.bind({});
RatingBanner.args = {
  backgroundColor: colorSet.warningLight,
  text: "카파 서비스를 주변 지인에게 추천하시겠습니까? (추천 안 함 : 1, 매우 추천함 : 10)",
};
