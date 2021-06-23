import React from "react";
import {
  makeStyles,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { CustomizedTypography } from ".";
import { colorSet } from "../Provider";

export interface CustomizedDialogProps {
  open: boolean;
  onClose: () => void;
  iconBoxColor?: string;
  icon?: React.ReactNode;
  title?: string;
  mainText?: string;
  subText?: string;
  buttons?: React.ReactNode;
  maxWidth?: number;
}

const CustomizedDialog = (props: CustomizedDialogProps) => {
  const maxWidth = props.maxWidth || 600;
  const classes = useStyles({ maxWidth });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      classes={{ root: classes.root }}
    >
      <Box display="flex" alignItems="center" className="MuiDialogTitle-root">
        <Box display="flex" alignItems="center">
          <Box
            style={{ backgroundColor: props.iconBoxColor }}
            className="iconBox"
          >
            {props.icon}
          </Box>
          <CustomizedTypography
            variant={matches ? "body1" : "h3"}
            color="textPrimary"
            fontWeight="700"
          >
            {props.title}
          </CustomizedTypography>
        </Box>
        <IconButton className="closeButton" onClick={props.onClose}>
          <CloseOutlined />
        </IconButton>
      </Box>

      <DialogContent>
        <CustomizedTypography
          variant={matches ? "body1" : "h4"}
          fontWeight="500"
        >
          {props.mainText}
        </CustomizedTypography>

        <CustomizedTypography variant={"body2"} className={classes.subText}>
          {props.subText}
        </CustomizedTypography>
      </DialogContent>

      <DialogActions>{props.buttons}</DialogActions>
    </Dialog>
  );
};

export default CustomizedDialog;

const useStyles = makeStyles((theme) => ({
  root: (props: { maxWidth?: number }) => ({
    "& .MuiDialog-paper": {
      padding: 32,
      position: "relative",
      width: "calc(100% - 32px)",
      maxWidth: props.maxWidth || 600,
      boxShadow:
        "0px 14px 56px 7px #0000001F, 0px 24px 56px 4px #00000024, 0px 24px 24px -6px #00000033",
      [theme.breakpoints.down("xs")]: {
        padding: 24,
      },
    },
    "& .MuiDialogTitle-root": {
      display: "flex",
      justifyContent: "space-between",
      padding: 0,
      "& .iconBox": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 18,
        minWidth: 42,
        minHeight: 42,
        borderRadius: 8,
        [theme.breakpoints.down("xs")]: {
          marginRight: 12,
          minWidth: 32,
          minHeight: 32,
        },
      },
      "& .closeButton": {
        position: "relative",
        top: "-15px",
        right: "-15px",
        "& svg": {
          fill: colorSet.gray900,
        },
      },
    },
    "& .MuiDialogContent-root": {
      padding: 0,
      marginTop: 36,
      [theme.breakpoints.down("xs")]: {
        marginTop: 24,
      },
    },
    "& .MuiDialogActions-root": {
      padding: 0,
      marginTop: 48,
    },
  }),
  subText: {
    color: colorSet.gray700,
    marginTop: 16,
  },
}));
