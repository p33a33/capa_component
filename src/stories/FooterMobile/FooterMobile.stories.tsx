import React from "react";
import { Story, Meta } from "@storybook/react";
import { FooterMobile } from "../../CustomizedLayout";
import { FooterMobileProps } from "../../CustomizedLayout/FooterMobile";

export default {
  title: "CAPA DesignSystem/Layout/FooterMobile",
  component: FooterMobile,
} as Meta;

const Template: Story<FooterMobileProps> = (args) => <FooterMobile {...args} />;

export const Default = Template.bind({});
Default.args = {
  mainLinks: [
    { title: "CAPA 블로그", onClick: () => console.log("capa블로그") },
    { title: "이벤트", onClick: () => console.log("이벤트") },
  ],
  subLinks: [
    { title: "이용약관", onClick: () => console.log("이용약관") },
    {
      title: "개인정보처리방침",
      onClick: () => console.log("개인정보처리방침"),
    },
    {
      title: "마케팅정보수신동의",
      onClick: () => console.log("마케팅정보수신동의"),
    },
  ],
};
