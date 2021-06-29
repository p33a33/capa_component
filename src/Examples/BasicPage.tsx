import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "../CustomizedComponent";
import { GlobalNavigationBar, Footer, Container } from "../CustomizedLayout";
import { colorSet } from "../Provider";
import { WithContainerAndBanner } from "../stories/GlobalNavigationBar/GlobalNavigationBar.stories";

const BasicPage = () => {
  return (
    <>
      <GlobalNavigationBar
        type={"client"}
        onTabChange={() => {}}
        {...WithContainerAndBanner.args}
      />
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ backgroundColor: colorSet.primary200, height: "500px" }}
        >
          <Typography variant="h1">contents are here!</Typography>
        </Box>
      </Container>
      <Footer
        links={[
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
        ]}
      />
    </>
  );
};

export default BasicPage;
