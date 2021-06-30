import React from "react";
import { Box, BoxProps, makeStyles } from "@material-ui/core";
import { colorSet } from "../Provider";

export interface ContainerProps extends BoxProps {
  backgroundColor?: string;
  wrapperStyle?: BoxProps;
}

/**
 * 화면 전체너비의 wapper와 디자인 시스템에 맞는 너비의 container로 이루어져있는 페이지의 기본 컴포넌트입니다.
 *
 * wrapperStyle 이라는 prop에 material ui Box 컴포넌트 prop을 내려줘서 스타일을 수정할 수 있습니다.
 * 그 외 prop들은 container에 전달됩니다.
 * children은 container 안에 표시됩니다
 */
const Container = (props: ContainerProps) => {
  const { container, wrapper } = useStyles({
    backgroundColor: props.backgroundColor || colorSet.gray000,
  });

  return (
    <Box className={wrapper} {...props.wrapperStyle}>
      <Box className={container} {...props}>
        {props.children}
      </Box>
    </Box>
  );
};

export default Container;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    backgroundColor: colorSet.gray000,
  },
  container: ({ backgroundColor }: { backgroundColor: string }) => ({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    paddingLeft: "32px",
    paddingRight: "32px",
    maxWidth: 1024,
    minWidth: 375,
    width: "calc(100% - 32px)",
    backgroundColor: backgroundColor,
    marginBottom: 300,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "16px",
      paddingRight: "16px",
    },
  }),
}));
