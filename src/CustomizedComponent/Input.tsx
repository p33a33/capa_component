import React from "react";
import {
  TextField,
  makeStyles,
  Box,
  OutlinedTextFieldProps,
} from "@material-ui/core";
import { colorSet } from "../Provider";

export interface CustomizedInputProps extends OutlinedTextFieldProps {
  labelPlacement?: "left" | "top";
  inputLabel?: React.ReactNode;
  labelSubtext?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  wrapper: (props: any) => ({
    display: "flex",
    flexDirection: props.labelPlacement === "left" ? "row" : "column",
    alignItems: props.labelPlacement === "left" ? "center" : "default",
    height: "fit-content",
  }),
  labelBox: (props: any) => ({
    display: "flex",
    marginBottom: props.labelPlacement === "top" ? "8px" : "0px",
    marginRight: props.labelPlacement === "left" ? "8px" : "0px",
    justifyContent:
      props.labelPlacement === "left" ? "center" : "space-between",
  }),
  root: (props: any) => ({
    "& .MuiInputBase-root": {
      border: `1px solid ${colorSet.gray400}`,
      ...(props.size === "medium"
        ? theme.typography.h4
        : theme.typography.body1),
    },
    "& .MuiInputBase-input.Mui-disabled": {
      backgroundColor: colorSet.gray100,
      color: colorSet.gray500,
    },
  }),
}));

const Input = (props: CustomizedInputProps) => {
  const labelPlacement = props.labelPlacement || "left";
  const size = props.size || "small";
  const classes = useStyles({ labelPlacement, size });
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.labelBox}>
        <Box>{props.inputLabel}</Box>
        {labelPlacement === "top" && <Box>{props.labelSubtext}</Box>}
      </Box>
      <TextField
        {...(props as OutlinedTextFieldProps)}
        size={size}
        classes={{ root: classes.root }}
      />
    </Box>
  );
};

export default Input;
