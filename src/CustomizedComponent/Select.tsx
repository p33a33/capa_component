import React from "react";
import {
  Select as MaterialSelect,
  makeStyles,
  Box,
  SelectProps,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  InputBaseComponentProps,
} from "@material-ui/core";
import { colorSet } from "../Provider";

export interface CustomizedSelectProps extends SelectProps {
  size?: "medium" | "small";
  width?: number;
  labelPlacement?: "left" | "top";
  inputLabel?: React.ReactNode;
  labelSubtext?: React.ReactNode;
  menuItems?: [{ item: React.ReactNode; value: any }];
  placeholder?: string;
  helperText?: string;
  listPlacement: "top" | "bottom";
  inputProps?: InputBaseComponentProps;
}

const useStyles = makeStyles((theme) => ({
  wrapper: (props: any) => ({
    display: "flex",
    flexDirection: props.labelPlacement === "left" ? "row" : "column",
    alignItems: props.labelPlacement === "left" ? "center" : "default",
    height: "fit-content",
    "& .MuiInputLabel-formControl": {
      left: "16px",
      top: "50%",
      transform:
        props.helperText && props.error
          ? "translateY(calc(-50% - 8px))"
          : "translateY(calc(-50%))",
      color: colorSet.gray600,
      ...(props.size === "small"
        ? theme.typography.body2
        : theme.typography.body1),
      zIndex: 1,
    },
    "& .MuiFormHelperText-root": {
      color: colorSet.errorBase,
    },
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
    backgroundColor: colorSet.gray000,
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
  const classes = useStyles({
    labelPlacement,
    size,
    width,
    helperText: props.helperText,
    error: props.error || false,
  });
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.labelBox}>
        <Box>{props.inputLabel}</Box>
        {labelPlacement === "top" && <Box>{props.labelSubtext}</Box>}
      </Box>
      <FormControl>
        {!props.value && (
          <InputLabel disableAnimation>{props.placeholder}</InputLabel>
        )}
        <MaterialSelect
          {...(props as SelectProps)}
          classes={{ root: classes.root, select: classes.select }}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: props.listPlacement === "top" ? "top" : "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: props.listPlacement === "top" ? "bottom" : "top",
              horizontal: "center",
            },
          }}
        >
          {props.menuItems &&
            props.menuItems.map((el) => (
              <MenuItem value={el.value}>{el.item}</MenuItem>
            ))}
        </MaterialSelect>
        <FormHelperText>{props.error && props.helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Select;
