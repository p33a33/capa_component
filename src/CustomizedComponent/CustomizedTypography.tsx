import React from "react";
import { Typography, TypographyProps } from "@material-ui/core";

export interface Props extends TypographyProps {
  fontWeight?:
    | "100"
    | "300"
    | "400"
    | "500"
    | "700"
    | "900"
    | "bold"
    | "normal";
  gutterBottoms?: number;
}

const CustomizedTypography: React.FC<Props> = (props) => {
  const { fontWeight, gutterBottoms, ...rest } = props;
  let styled: any = Object.assign(
    {},
    { fontWeight: fontWeight, marginBottom: gutterBottoms, ...rest }
  );
  return (
    <Typography {...rest} style={{ ...styled, ...rest.style }}>
      {props.children}
    </Typography>
  );
};

export default CustomizedTypography;
