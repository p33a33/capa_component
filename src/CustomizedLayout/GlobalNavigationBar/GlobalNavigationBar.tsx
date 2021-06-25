import React, {useState} from 'react';
import { Box, makeStyles, Tab, Tabs } from '@material-ui/core';
import { Logo } from '../../CustomizedComponent/index';
import { colorSet } from '../../Provider'

export interface GlobalNavigationBarProps {
  type : 'partner' | 'client',
  buttons? : React.ReactNode;
  tabs? : (React.ReactNode | string)[];
  handleTabChange? : (e : React.ChangeEvent<{}>, newValue : any) => void;
}

const GlobalNavigationBar = (props : GlobalNavigationBarProps) => {
  const { container, LogoSection, TabSection, ButtonSection} = useStyles({type : props.type});
  const [currentTab, setCurrentTab] = useState(0);
  const handleChange = (e : React.ChangeEvent<{}>, newValue : any) => {
    if(props.handleTabChange) {
      props.handleTabChange(e, newValue)
    }
    setCurrentTab(newValue)
  }

  return (
  <Box className={container}>
    <Box className="left">
    {/* Logo Section */}
    <Box className={LogoSection}>
      <Logo type={props.type} color="primary" width={props.type === 'client' ? 89 : 185} />
      </Box>

      {/* Tab Section */}
      <Box className={TabSection}>
          <Tabs value={currentTab} onChange={handleChange}>
          {props.tabs && props.tabs.map( (tab, index) => <Tab value={index} label={tab} />)}
          </Tabs>
      </Box>
      </Box>

      {/* Button Section */}
      <Box className={ButtonSection}>
        {props.buttons}
      </Box>
  </Box>)
}

export default GlobalNavigationBar;

const useStyles = makeStyles((theme) => ({
  container : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    backgroundColor : colorSet.gray000,
    width : '100vw',
    height : 61,
    '& .left' : {
      display : 'flex',
      alignItems : 'center',
      height : 61
    }
  },
  LogoSection : {
    padding : 24,
    marginRight : 24
  },
  TabSection : (props : {type : 'client' | 'partner'}) => ({
    '& .MuiTab-root' : {
      minWidth : props.type === 'client' ? 108 : 120,
      height : 61,
      '& button' : {
        height : 61
      }
    },
    '& .MuiTabs-indicator' : {
      backgroundColor : colorSet.gray900,
    }
  }),
  ButtonSection : {
    padding : 24,
    '& button' : {
      '&:not(:last-child)' : {
        marginRight : 24
      }
    }
  },
}))