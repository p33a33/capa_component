import React, { useMemo } from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { theme as globalTheme, colorSet } from "../Provider";
import { MuiButtonProps, ICustomizedButtonProps } from "./types";

const Button: React.FC<ICustomizedButtonProps> = (
  props: ICustomizedButtonProps
) => {
  const { color, ...rest } = props;
  const colorProp =
    color === "default" || color === "success" || color === "error"
      ? "secondary"
      : color;
  const customizedPalette =
    color === "default" || color === "success" || color === "error"
      ? MuiButtonProps[color].palette
      : globalTheme.palette;
  const customizedStyle =
    color === "default" || color === "success" || color === "error"
      ? MuiButtonProps[color].style
      : {};

  const theme = useMemo(() => {
    return createMuiTheme({
      ...globalTheme,
      palette: customizedPalette,
      overrides: {
        MuiButton: {
          root: {
            borderRadius: 4,
            "&.medium": {
              height: 40,
              fontSize: 14,
              fontWeight: 500,
            },
          },
          label: {
            alignItems: "initial",
          },
          containedPrimary: {
            "&:disabled": {
              backgroundColor: colorSet.gray200,
              color: colorSet.gray500,
            },
          },
          containedSecondary: {
            "&:disabled": {
              backgroundColor: colorSet.gray200,
              color: colorSet.gray500,
            },
            "&:hover": {
              backgroundColor: colorSet.gray400,
              color: colorSet.gray800,
            },
          },
          outlinedPrimary: {
            "&:disabled": {
              backgroundColor: colorSet.gray000,
              color: colorSet.gray400,
            },
            "&:hover": {
              backgroundColor: colorSet.primary200,
            },
          },
          outlinedSecondary: {
            border: `1px solid ${colorSet.gray600}`,
            "&:disabled": {
              backgroundColor: colorSet.gray000,
              color: colorSet.gray400,
              border: `1px solid ${colorSet.gray400}`,
            },
            "&:hover": {
              backgroundColor: colorSet.gray400,
              color: colorSet.gray800,
            },
          },
          textPrimary: {
            "&:disabled": {
              color: colorSet.gray500,
            },
            "&:hover": {
              color: colorSet.primary600,
              backgroundColor: colorSet.gray000,
            },
          },
          iconSizeSmall: {
            "& > *:first-child": {
              fontSize: 20,
            },
          },
          iconSizeLarge: {
            "& > *:first-child": {
              fontSize: 24,
            },
          },
          startIcon: {
            marginRight: 4,
          },
          endIcon: {
            marginLeft: 4,
          },
          outlinedSizeLarge: {
            height: 48,
            fontSize: 16,
            fontWeight: 500,
          },
          outlinedSizeSmall: {
            height: 24,
            fontSize: 14,
            fontWeight: 500,
          },
          containedSizeLarge: {
            height: 48,
            fontSize: 16,
            fontWeight: 500,
          },
          containedSizeSmall: {
            height: 24,
            fontSize: 14,
            fontWeight: 500,
          },
          textSizeLarge: {
            height: 24,
            fontSize: 16,
            fontWeight: 500,
          },
          textSizeSmall: {
            height: 20,
            fontSize: 14,
            fontWeight: 500,
          },
          ...customizedStyle,
        },
      },
    });
  }, [customizedPalette, customizedStyle]);

  return (
    <ThemeProvider theme={theme}>
      <MaterialButton
        {...rest}
        color={colorProp}
        className={
          props.size === "medium"
            ? props.className + " medium"
            : props.className
        }
        disableElevation
      >
        {props.children}
      </MaterialButton>
    </ThemeProvider>
  );
};

export default Button;
