import React from "react";
import { Box, BoxProps, makeStyles } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import { colorSet } from "../Provider";
import { Label, Typography } from ".";
import { CustomizedLabelProps } from "./Lable";

export interface NotificationProps {
  onClick?: () => void;
  boxProps?: BoxProps;
  label?: CustomizedLabelProps;
  time?: string;
  title?: string;
  detail?: React.ReactNode;
  subText?: string;
}

const Notification = (props: NotificationProps) => {
  const { wrapper, header, body, footer } = useStyles();

  return (
    <Box className={wrapper} {...props.boxProps}>
      <Box className={header}>
        <Label {...props.label} />
        <Typography variant="caption" color="textSecondary">
          {props.time}
        </Typography>
      </Box>

      <Box className={body}>
        <Box className="title">
          <Typography variant="body2" fontWeight="700">
            {props.title}
          </Typography>
          <ChevronRight />
        </Box>
        <Box className="detail">{props.detail}</Box>
      </Box>

      <Box className={footer}>
        <Typography variant="body2">{props.subText}</Typography>
      </Box>
    </Box>
  );
};

export default Notification;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: 326,
    border: `1px solid ${colorSet.backgroundLight}`,
    borderRadius: "4px",
    backgroundColor: colorSet.gray000,
    padding: 16,
    "&:hover": {
      cursor: "pointer",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    "& .title": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      "& svg": {
        marginLeft: 10,
      },
    },
    "& .detail": {
      ...theme.typography.body2,
      whiteSpace: "pre-line",
    },
  },
  footer: {},
}));
