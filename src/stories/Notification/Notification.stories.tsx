import React from "react";
import { Story, Meta } from "@storybook/react";
import { Notification, Typography } from "../../CustomizedComponent";
import { NotificationProps } from "../../CustomizedComponent/Notification";
import { colorSet } from "../../Provider";

export default {
  title: "CAPA DesignSystem/Component/Notification",
  component: Notification,
  argTypes: {
    label: {
      description: "알림 칩 설정",
    },
    boxProps: {
      control: "object",
      description: "가장 상위 Box 컴포넌트로 전달되는 Props",
    },
    time: {
      control: "text",
      description: "알림이 온 시간 표시(n분 전, n시간 전 등)",
    },
    title: { control: "text", description: "알림 제목" },
    detail: {
      control: "text",
      description: "알림 관련 내용 표시. 문자열(줄바꿈 가능), ReactNode 지원,",
    },
    subText: { control: "text", description: "알림 서브텍스트" },
  },
} as Meta;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("clicked"),
  boxProps: {
    style: { backgroundColor: "#FFFFFF" },
  },
  label: {
    text: "defaultLabel",
    shape: "square",
    backgroundColor: colorSet.primary50,
    textColor: colorSet.primary500,
    fontWeight: "700",
  },
  time: "시간표시",
  title: "Default Title",
  detail: `- 파트너 회사명 : PartnerCompanyName
  - 프로젝트 이름 : Project Title`,
  subText: "이 박스를 클릭해서 어쩌고 저쩌고 해보세요!",
};

export const ControlBoxprops = Template.bind({});
ControlBoxprops.args = {
  onClick: () => console.log("clicked"),
  boxProps: {
    style: {
      backgroundColor: colorSet.primary100,
      borderRadius: 16,
    },
  },
  label: {
    text: "defaultLabel",
    shape: "square",
    backgroundColor: colorSet.primary50,
    textColor: colorSet.primary500,
    fontWeight: "700",
  },
  time: "시간표시",
  title: "BoxProps are under control",
  detail: `- 파트너 회사명 : PartnerCompanyName
  - 프로젝트 이름 : Project Title`,
  subText: "이 박스를 클릭해서 어쩌고 저쩌고 해보세요!",
};

export const 견적요청완료 = Template.bind({});
견적요청완료.args = {
  label: { text: "견적요청완료", shape: "square" },
  time: "6분 전",
  title: "견적요청서 등록이 완료되었습니다.",
  detail: (
    <Typography variant="body2">
      - 프로젝트명 : <b style={{ fontWeight: 500 }}>{`{프로젝트명}`}</b>
    </Typography>
  ),
  subText: "이 박스를 눌러 지금 바로 요청서를 확인해보세요!",
};

export const 요청서마감3일전 = Template.bind({});
요청서마감3일전.args = {
  label: { text: "D-3", shape: "square" },
  time: "6분 전",
  title: "3일 후에 {프로젝트명}의 요청서가 마감될 예정입니다.",
  detail: (
    <Typography variant="body2">
      - 프로젝트명 : <b style={{ fontWeight: 500 }}>{`{프로젝트명}`}</b>
    </Typography>
  ),
  subText: "이 박스를 눌러 지금 바로 요청서를 확인해보세요!",
};

export const 요청서마감 = Template.bind({});
요청서마감.args = {
  label: {
    text: "마감",
    shape: "square",
    backgroundColor: colorSet.gray200,
    textColor: colorSet.gray900,
  },
  time: "6분 전",
  title: "{프로젝트명} 의 요청서가 직접 마감 처리되었습니다",
  detail: (
    <Typography variant="body2">
      - 프로젝트명 : <b style={{ fontWeight: 500 }}>{`{프로젝트명}`}</b>
    </Typography>
  ),
  subText: "이 박스를 눌러 지금 바로 요청서를 확인해보세요!",
};

export const 간편견적가 = Template.bind({});
간편견적가.args = {
  label: {
    text: "간편견적가",
    shape: "square",
    backgroundColor: "#F4E6FF",
    textColor: "#830BCD",
  },
  time: "6분 전",
  title: "간편 견적가가 도착했습니다.",
  detail: (
    <>
      <Typography variant="body2">
        - 파트너 회사명 : <b style={{ fontWeight: 500 }}>{`{파트너회사명}`}</b>
      </Typography>
      <Typography variant="body2">
        - 프로젝트명 : <b style={{ fontWeight: 500 }}>{`{프로젝트명}`}</b>
      </Typography>
    </>
  ),
  subText: "박스를 눌러 지금 바로 견적가를 확인해보세요!",
};

export const 업체확정요청 = Template.bind({});
업체확정요청.args = {
  label: {
    text: "업체확정 요청",
    shape: "square",
    backgroundColor: "#FFEAC1",
    textColor: "#823C1E",
  },
  time: "6분 전",
  title: "업체확정 요청이 도착했습니다.",
  detail: (
    <>
      <Typography variant="body2">
        - 파트너 회사명 : <b style={{ fontWeight: 500 }}>{`{파트너회사명}`}</b>
      </Typography>
      <Typography variant="body2">
        - 프로젝트명 : <b style={{ fontWeight: 500 }}>{`{프로젝트명}`}</b>
      </Typography>
    </>
  ),
  subText: "이 박스를 눌러 파트너와 업체 확정하세요!",
};

export const 이벤트진행안내 = Template.bind({});
이벤트진행안내.args = {
  label: {
    text: "이벤트",
    shape: "square",
    backgroundColor: colorSet.goodLight,
    textColor: colorSet.goodDark,
  },
  time: "6분 전",
  title: "CAPA 통큰 이벤트 첫번째!",
  detail: "친구 초대하고 아메리카노 기프티콘 받아가세요~",
  subText: "이 박스를 눌러 지금 바로 이벤트를 확인해보세요!",
};

export const 스탬프적립 = Template.bind({});
스탬프적립.args = {
  label: {
    text: "이벤트",
    shape: "square",
    backgroundColor: colorSet.goodLight,
    textColor: colorSet.goodDark,
  },
  time: "6분 전",
  title: "+2 친구초대 스탬프 적립",
  detail: (
    <>
      <Typography variant="body2">
        누적 스탬프 수 :{" "}
        <b style={{ fontWeight: 400, color: colorSet.primary700 }}>n개</b>
      </Typography>
      <Typography variant="body2">
        아메리카노 쿠폰까지{" "}
        <b style={{ fontWeight: 400, color: colorSet.primary700 }}>n개</b>
      </Typography>
    </>
  ),
  subText: "이 박스를 눌러 지금 바로 이벤트를 확인해보세요!",
};
