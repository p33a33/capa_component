import React from "react";
import { Story, Meta } from "@storybook/react";
import { Container, GlobalNavigationBar } from "../../CustomizedLayout";
import {
  Button,
  NavigationBanner,
  Typography,
} from "../../CustomizedComponent";
import { GlobalNavigationBarProps } from "../../CustomizedLayout/GlobalNavigationBar";
import { colorSet } from "../../Provider";
import { IconButton } from "@material-ui/core";
import {
  AccountCircleRounded,
  Apps,
  NotificationsOutlined,
} from "@material-ui/icons";
import {
  InfoBanner,
  RatingBanner,
} from "../NavigationBanner/NavigationBanner.stories";
import { NavigationBannerProps } from "../../CustomizedComponent/NavigationBanner";

export default {
  title: "CAPA DesignSystem/Layout/GlobalNavigationBar",
  component: GlobalNavigationBar,
  argTypes: {
    type: {
      options: ["partner", "client"],
      control: "radio",
      description: "gnb 타입 선택",
    },
    tabs: { description: "문자열 or 컴포넌트의 배열" },
    handleTabChange: {
      description: "tab 클릭 및 현재 탭 변동시 실행하는 callback",
    },
    buttons: { description: "GNB 우측 버튼 혹은 버튼들을 노드로 전달" },
  },
} as Meta;

const Template: Story<GlobalNavigationBarProps> = (args) => (
  <GlobalNavigationBar {...args} />
);
const ContainerTemplate: Story<GlobalNavigationBarProps> = (args) => (
  <>
    <GlobalNavigationBar {...args} />
    <Container
      paddingTop={"32px"}
      paddingBottom={"32px"}
      backgroundColor={colorSet.gray200}
    >
      <Typography variant="h1">Container Component</Typography>
      <Typography variant="h1">maxWidth : 1024px</Typography>
      <Typography variant="h1">minWidth : 375px</Typography>
      <Typography variant="h1">width : calc ( 100% - 32px )</Typography>
    </Container>
  </>
);

export const Client = Template.bind({});
Client.args = {
  type: "client",
  tabs: ["요청현황", "채팅"],
  onTabChange: (e, newValue) => {},
  buttons: (
    <>
      <Button variant="text">클라우드</Button>
      <IconButton children={<Apps />} />
      <IconButton children={<NotificationsOutlined />} />
      <IconButton children={<AccountCircleRounded />} />
      <Button variant="contained" color="primary">
        견적 요청하기
      </Button>
    </>
  ),
};

export const Partner = Template.bind({});
Partner.args = {
  type: "partner",
  tabs: ["전체 견적요청", "상담 프로젝트", "확정 프로젝트"],
  onTabChange: (e, newValue) => {},
  buttons: (
    <>
      <Button variant="text">클라우드</Button>
      <IconButton children={<Apps />} />
      <IconButton children={<NotificationsOutlined />} />
      <IconButton children={<AccountCircleRounded />} />
    </>
  ),
};

export const WithInfoBanner = Template.bind({});
WithInfoBanner.args = {
  ...Client.args,
  banner: <NavigationBanner {...(InfoBanner.args as NavigationBannerProps)} />,
};

export const WithRatingBanner = Template.bind({});
WithRatingBanner.args = {
  ...Client.args,
  banner: (
    <NavigationBanner {...(RatingBanner.args as NavigationBannerProps)} />
  ),
};

export const WithContainer = ContainerTemplate.bind({});
WithContainer.args = {
  ...Client.args,
};

export const WithContainerAndBanner = ContainerTemplate.bind({});
WithContainerAndBanner.args = {
  ...Client.args,
  banner: (
    <NavigationBanner {...(RatingBanner.args as NavigationBannerProps)} />
  ),
};
