import { muiTheme } from "storybook-addon-material-ui";
import theme from "../src/Provider/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  backgrounds: {
    default: "gray",
    values: [{ name: "gray", value: "#E5E5E5" }],
  },
};

export const decorators = [muiTheme([theme])];
