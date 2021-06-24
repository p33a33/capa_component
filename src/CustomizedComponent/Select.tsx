import React, { useState } from "react";
import {
  Select as MaterialSelect,
  makeStyles,
  Box,
  SelectProps,
  InputBaseComponentProps,
  MenuItem,
} from "@material-ui/core";
import { colorSet } from "../Provider";

export interface CustomizedSelectProps extends SelectProps {
  size?: "medium" | "small";
  width?: number;
  labelPlacement?: "left" | "top";
  inputLabel?: React.ReactNode;
  labelSubtext?: React.ReactNode;
  menuItems?: [{ item: string; value: any }];
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
    width: props.width,
    height: props.size === "small" ? 40 : 56,
    boxSizing: "border-box",
    border: `1px solid ${colorSet.gray400}`,
    "&.Mui-disabled": {
      backgroundColor: colorSet.gray100,
      color: colorSet.gray500,
    },
  }),
  select: (props: any) => ({
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    ...(props.size === "medium"
      ? theme.typography.body1
      : theme.typography.body2),
  }),
}));

const Select = (props: CustomizedSelectProps) => {
  const labelPlacement = props.labelPlacement || "left";
  const size = props.size || "small";
  const width = props.width;
  const classes = useStyles({ labelPlacement, size, width });
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.labelBox}>
        <Box>{props.inputLabel}</Box>
        {labelPlacement === "top" && <Box>{props.labelSubtext}</Box>}
      </Box>
      <MaterialSelect
        {...(props as SelectProps)}
        inputProps={props as InputBaseComponentProps}
        classes={{ root: classes.root, select: classes.select }}
      >
        {props.menuItems &&
          props.menuItems.map((el) => (
            <MenuItem value={el.value}>{el.item}</MenuItem>
          ))}
      </MaterialSelect>
    </Box>
  );
};

export default Select;
