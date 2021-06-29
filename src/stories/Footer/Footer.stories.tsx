import React from "react";
import { Story, Meta } from "@storybook/react";
import { Footer } from "../../CustomizedLayout";
import { FooterProps } from "../../CustomizedLayout/Footer";

export default {
  title: "CAPA DesignSystem/Layout/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { title: "CAPA 블로그", onClick: () => console.log("capa블로그") },
    { title: "이용약관", onClick: () => console.log("이용약관") },
    { title: "이벤트", onClick: () => console.log("이벤트") },
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
