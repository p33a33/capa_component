import React from "react";
import Typography from "./Typography";
import { Chip, ChipProps, makeStyles } from "@material-ui/core";
import { colorSet } from "../Provider";

export interface CustomizedLabelProps extends ChipProps {
  shape?: "square" | "round";
  backgroundColor?: string;
  textColor?: string;
  text?: string;
  fontWeight?: "700" | "500";
}

const Label = (props: CustomizedLabelProps) => {
  const { root } = useStyles(props);
  return (
    <Chip
      className={root}
      {...props}
      label={
        <Typography variant="caption" fontWeight={props.fontWeight || "700"}>
          {props.text}
        </Typography>
      }
    />
  );
};

export default Label;

const useStyles = makeStyles((theme) => ({
  root: (props: CustomizedLabelProps) => ({
    padding: "4px 8px",
    borderRadius: props.shape === "square" ? 4 : 100,
    backgroundColor: props.backgroundColor || colorSet.primary50,
    "& .MuiChip-label": {
      color: props.textColor || colorSet.primary500,
      padding: "2px 4px 0px",
    },
    "& .MuiChip-icon": {
      width: 16,
      height: 16,
      margin: 0,
      fill: props.textColor || colorSet.primary500,
    },
  }),
}));
