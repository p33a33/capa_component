import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Logo } from "../CustomizedComponent/index";
import { colorSet } from "../Provider";

export interface GlobalNavigationBarProps {
  type: "partner" | "client";
  buttons?: React.ReactNode;
  tabs?: (React.ReactNode | string)[];
  onTabChange: (e: React.ChangeEvent<{}>, newValue: any) => void;
  banner?: React.ReactNode;
}

const GlobalNavigationBar = (props: GlobalNavigationBarProps) => {
  const {
    wrapper,
    container,
    LogoSection,
    TabSection,
    ButtonSection,
    BannerSection,
  } = useStyles({ type: props.type });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [currentTab, setCurrentTab] = useState(0);
  const handleChange = (e: React.ChangeEvent<{}>, newValue: any) => {
    props.onTabChange(e, newValue);
    setCurrentTab(newValue);
  };

  return (
    <Box className={wrapper}>
      <Box className={container}>
        <Box className="left">
          {/* Logo Section */}
          <Box className={LogoSection}>
            <Logo
              type={props.type}
              color="primary"
              height={matches ? 18 : 24}
            />
          </Box>

          {/* Tab Section */}
          {!matches && (
            <Box className={TabSection}>
              <Tabs value={currentTab} onChange={handleChange}>
                {props.tabs &&
                  props.tabs.map((tab, index) => (
                    <Tab value={index} label={tab} />
                  ))}
              </Tabs>
            </Box>
          )}
        </Box>

        {/* Button Section */}
        <Box className={ButtonSection}>{props.buttons}</Box>
      </Box>
      {/* GNB Bottom Banner Section */}
      {props.banner && <Box className={BannerSection}>{props.banner}</Box>}
    </Box>
  );
};

export default GlobalNavigationBar;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colorSet.gray000,
    width: "100vw",
    height: 61,
    borderBottom: `1px solid ${colorSet.gray400}`,
    "& .left": {
      display: "flex",
      alignItems: "center",
      height: 61,
    },
    [theme.breakpoints.down("xs")]: {
      height: 49,
      "& .left": {
        height: 49,
      },
    },
  },
  LogoSection: {
    padding: 24,
    marginRight: 24,
  },
  TabSection: (props: { type: "client" | "partner" }) => ({
    "& .MuiTab-root": {
      minWidth: props.type === "client" ? 108 : 120,
      height: 61,
      "& button": {
        height: 61,
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: colorSet.gray900,
    },
  }),
  ButtonSection: {
    padding: 24,
    "& button": {
      "&:not(:last-child)": {
        marginRight: 24,
        [theme.breakpoints.down("xs")]: {
          marginRight: 16,
        },
      },
    },
  },
  BannerSection: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));
