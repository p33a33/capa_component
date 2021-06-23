import React from "react";
import {
  TextField,
  TextFieldProps,
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
  }),
  labelBox: (props: any) => ({
    display: "flex",
    marginBottom: props.labelPlacement === "top" ? "8px" : "0px",
    marginRight: props.labelPlacement === "left" ? "8px" : "0px",
    justifyContent:
      props.labelPlacement === "left" ? "center" : "space-between",
  }),
  root: {
    "& .MuiInputBase-root": {
      border: `1px solid ${colorSet.gray400}`,
    },
    "& .MuiInputBase-input.Mui-disabled": {
      backgroundColor: colorSet.gray100,
      color: colorSet.gray500,
    },
  },
}));

const CustomizedInput = (props: CustomizedInputProps) => {
  const labelPlacement = props.labelPlacement || "left";
  const classes = useStyles({ labelPlacement });
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.labelBox}>
        <Box>{props.inputLabel}</Box>
        {labelPlacement === "top" && <Box>{props.labelSubtext}</Box>}
      </Box>
      <TextField
        {...(props as TextFieldProps)}
        classes={{ root: classes.root }}
      />
    </Box>
  );
};

export default CustomizedInput;
