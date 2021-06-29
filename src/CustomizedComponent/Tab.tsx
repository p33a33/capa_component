import React from "react";
import {
  Tabs,
  Tab as MaterialTab,
  TabsProps,
  makeStyles,
} from "@material-ui/core";
import { Typography } from ".";
import { colorSet } from "../Provider";

export interface CustomizedTabProps extends TabsProps {
  tabs: (React.ReactNode | string)[];
  tabWidth?: number;
  currentTab: number;
  setCurrentTab: (newValue: any) => void;
}

const Tab = (props: CustomizedTabProps) => {
  const { container } = useStyles({ tabWidth: props.tabWidth || 120 });

  return (
    <Tabs
      {...props}
      className={`${props.className} ${container}`}
      value={props.currentTab || 0}
      onChange={(e: React.ChangeEvent<{}>, newValue: any) => {
        props.setCurrentTab(newValue);
      }}
    >
      {props.tabs.map((tab) => (
        <MaterialTab label={tab} />
      ))}
    </Tabs>
  );
};

export default Tab;

const useStyles = makeStyles((theme) => ({
  container: ({ tabWidth }: { tabWidth: number }) => ({
    backgroundColor: colorSet.gray000,
    "& .MuiTabs-indicator": {
      backgroundColor: colorSet.gray900,
    },
    "& .MuiTab-wrapper": {
      ...theme.typography.body2,
    },
    "& .MuiTab-root": {
      minWidth: tabWidth,
    },
  }),
}));
