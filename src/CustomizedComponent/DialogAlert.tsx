import React from "react";
import { Button, Typography } from "./index";
import { InfoOutlined, CloseOutlined } from "@material-ui/icons";
import { Dialog, Box, makeStyles, IconButton } from "@material-ui/core";
import { colorSet } from "../Provider";

export interface DialogAlertProps {
  open: boolean;
  onClose: () => void;
  icon?: React.ReactNode;
  title?: string;
  subText?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
}

const DialogAlert = ({
  open,
  onClose,
  icon,
  title,
  subText,
  buttonLabel,
  buttonAction,
}: DialogAlertProps) => {
  const { root } = useStyles();

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: root }}>
      <IconButton onClick={onClose} className="closeButton">
        <CloseOutlined />
      </IconButton>

      <Box display="flex" justifyContent="center" className="titleIcon">
        {icon || <InfoOutlined color="error" fontSize="large" />}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className="content"
      >
        <Typography variant="h4" color="textPrimary" fontWeight="700">
          {title}
        </Typography>
        <Typography variant="body2" className="gray700">
          {subText}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" className="button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={buttonAction}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Dialog>
  );
};

export default DialogAlert;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "24px",
    borderRadius: 8,
    width: "calc(100% - 32px)",
    maxWidth: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .gray700": {
      color: colorSet.gray700,
    },
    "& .closeButton": {
      position: "absolute",
      top: 0,
      right: 0,
      padding: 24,
    },
    "& .titleIcon": {
      marginTop: 20,
      "& svg": {
        width: 48,
        height: 48,
        marginBottom: 24,
      },
    },
    "& .content": {
      marginBottom: 24,
      "& h4": {
        marginBottom: 8,
      },
    },
    "& .button": {
      width: 320,
      marginBottom: 20,
    },
  },
}));
