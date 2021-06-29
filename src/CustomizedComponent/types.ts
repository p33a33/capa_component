import { ButtonProps, PropTypes } from "@material-ui/core";
import { colorSet } from "../Provider";

export type TCustomizedButtonColor = "default" | "success" | "error";
export type TColorProp = PropTypes.Color | TCustomizedButtonColor;
export interface ICustomizedButtonProps extends Omit<ButtonProps, "color"> {
  color?: TColorProp;
}

export const MuiButtonProps = {
  default: {
    palette: {
      secondary: {
        light: colorSet.gray200,
        main: colorSet.gray300,
        dark: colorSet.gray400,
        contrastText: colorSet.gray700,
      },
    },
    style: {
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
      outlinedSecondary: {
        color: colorSet.gray700,
        border: `1px solid ${colorSet.gray600}`,
        "&:disabled": {
          backgroundColor: colorSet.gray000,
          color: colorSet.gray400,
          border: `1px solid ${colorSet.gray400}`,
        },
        "&:hover": {
          backgroundColor: colorSet.gray600,
          color: colorSet.gray800,
        },
      },
    },
  },
  success: {
    palette: {
      secondary: {
        light: colorSet.successLight,
        main: colorSet.successMain,
        dark: colorSet.successDark,
        contrastText: colorSet.gray000,
      },
    },
    style: {
      containedSecondary: {
        "&:disabled": {
          backgroundColor: colorSet.gray200,
          color: colorSet.gray500,
        },
        "&:hover": {
          backgroundColor: colorSet.successDark,
          color: colorSet.gray000,
        },
      },
      outlinedSecondary: {
        border: `1px solid ${colorSet.successMain}`,
        "&:disabled": {
          backgroundColor: colorSet.gray000,
          color: colorSet.gray400,
          border: `1px solid ${colorSet.gray400}`,
        },
        "&:hover": {
          backgroundColor: colorSet.successLight,
          color: colorSet.successMain,
        },
      },
    },
  },
  error: {
    palette: {
      secondary: {
        light: colorSet.errorLight,
        main: colorSet.errorBase,
        dark: colorSet.errorDark,
        contrastText: colorSet.gray000,
      },
    },
    style: {
      containedSecondary: {
        "&:disabled": {
          backgroundColor: colorSet.gray200,
          color: colorSet.gray500,
        },
        "&:hover": {
          backgroundColor: colorSet.errorDark,
          color: colorSet.gray000,
        },
      },
      outlinedSecondary: {
        border: `1px solid ${colorSet.errorBase}`,
        "&:disabled": {
          backgroundColor: colorSet.gray000,
          color: colorSet.gray400,
          border: `1px solid ${colorSet.gray400}`,
        },
        "&:hover": {
          backgroundColor: colorSet.errorLight,
          color: colorSet.errorBase,
        },
      },
    },
  },
};
