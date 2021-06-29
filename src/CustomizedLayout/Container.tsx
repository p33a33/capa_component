import React from "react";
import { Box, BoxProps, makeStyles } from "@material-ui/core";
import { colorSet } from "../Provider";

export interface ContainerProps extends BoxProps {
  backgroundColor?: string;
  wrapperStyle?: BoxProps;
}

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
