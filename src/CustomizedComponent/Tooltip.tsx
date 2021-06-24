import React, { useState } from "react";
import {
  ClickAwayListener,
  makeStyles,
  Tooltip as MaterialTooltip,
  Grid,
  Box,
  BoxProps,
} from "@material-ui/core";
import Typography from "./Typography";
import { colorSet } from "../Provider";
import { CloseOutlined } from "@material-ui/icons";

export interface CustomizedTooltipProps {
  color?: "gray" | "primary";
  close_button?: boolean;
  arrow?: boolean;
  show_default?: boolean;
  openAgain?: boolean;
  title: string;
  children?: React.ReactNode;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  closeByButtonOnly?: boolean;
  onCloseButtonAction?: () => void;
  boxStyle?: BoxProps;
  zIndex?: number;
  useHover?: boolean;
  button?: React.ReactNode;
}

const Tooltip = ({
  color = "gray",
  close_button = false,
  arrow = false,
  openAgain = true,
  show_default = false,
  children,
  title,
  placement,
  closeByButtonOnly = false,
  boxStyle = {},
  zIndex = 1500,
  useHover = false,
  onCloseButtonAction,
  button,
}: CustomizedTooltipProps) => {
  const [open, setOpen] = useState<boolean>(show_default);
  const {
    tooltip_base,
    arrow_base_gray,
    arrow_base_primary,
    iconBox,
    closeIcon,
    bottom,
    color_primary,
    color_gray,
    messageStyle,
  } = useStyles();
  const close = () => setOpen(false);
  const openSwitch = () => {
    if (openAgain) setOpen(!open);
  };

  const message = (
    <Box display="flex" flexDirection="column">
      <Grid container direction="row">
        <Box>
          <Typography variant="body2" fontWeight="500" className={messageStyle}>
            {title}
          </Typography>
        </Box>
        {close_button ? (
          <Box
            className={iconBox}
            onClick={(e) => {
              e.stopPropagation();
              if (onCloseButtonAction) {
                onCloseButtonAction();
              }
              close();
            }}
          >
            <CloseOutlined className={closeIcon} />
          </Box>
        ) : (
          <></>
        )}
      </Grid>
      {button && <Box paddingTop={"18px"}>{button}</Box>}
    </Box>
  );

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        e.stopPropagation();
        if (!closeByButtonOnly) close();
      }}
    >
      <MaterialTooltip
        interactive={closeByButtonOnly}
        disableFocusListener
        disableHoverListener={!useHover}
        disableTouchListener
        arrow={arrow}
        classes={{
          tooltip: `${tooltip_base} ${
            color === "primary" ? color_primary : color_gray
          }`,
          arrow: color === "primary" ? arrow_base_primary : arrow_base_gray,
          tooltipPlacementBottom: bottom,
        }}
        PopperProps={{
          disablePortal: true,
          style: { zIndex, pointerEvents: open ? "auto" : "none" },
        }}
        onClose={(e) => {
          e.stopPropagation();
          close();
        }}
        onOpen={() => setOpen(true)}
        open={open}
        title={message}
        placement={placement}
      >
        <Box onClick={openSwitch} style={{ ...boxStyle }}>
          {children}
        </Box>
      </MaterialTooltip>
    </ClickAwayListener>
  );
};

export default Tooltip;

const useStyles = makeStyles((theme) => ({
  tooltip_base: {
    maxWidth: "none",
    // minWidth: 224,
    [theme.breakpoints.down("xs")]: {
      // minWidth: 200,
      margin: 8,
    },
    borderRadius: 8,
    padding: "10px 16px",
    boxShadow:
      "0px 5px 5px -3px rgba(0, 0, 0, 0.1), 0px 8px 10px 1px rgba(0, 0, 0, 0.07), 0px 3px 14px 2px rgba(0, 0, 0, 0.06)",
    "& .MuiGrid-container": {
      flexWrap: "nowrap",
    },
  },
  color_gray: {
    backgroundColor: colorSet.gray800,
  },
  color_primary: {
    backgroundColor: colorSet.primary500,
  },
  arrow_base_gray: {
    "&::before": {
      // tooltip arrow styles
      backgroundColor: colorSet.gray800,
    },
  },
  arrow_base_primary: {
    "&::before": {
      // tooltip arrow styles
      backgroundColor: colorSet.primary500,
    },
  },
  bottom: {
    margin: "8px 0",
  },
  iconBox: {
    width: 36,
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 4,
    margin: "0px !important",
    "&:hover": {
      cursor: "pointer",
    },
  },
  closeIcon: {
    width: 18,
    height: 18,
    transform: "translateY(-1px)",
  },
  messageStyle: {
    whiteSpace: "pre-line",
  },
}));
