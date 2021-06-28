import React, {useState} from 'react';
import { Box, makeStyles, Tab, Tabs } from '@material-ui/core';
import { Logo } from '../../CustomizedComponent/index';
import { colorSet } from '../../Provider'

export interface GlobalNavigationBarProps {
  type : 'partner' | 'client',
  buttons? : React.ReactNode;
  tabs? : (React.ReactNode | string)[];
  handleTabChange? : (e : React.ChangeEvent<{}>, newValue : any) => void;
  banner? : React.ReactNode;
}

const GlobalNavigationBar = (props : GlobalNavigationBarProps) => {
  const { container, LogoSection, TabSection, ButtonSection, BannerSection} = useStyles({type : props.type});
  const [currentTab, setCurrentTab] = useState(0);
  const handleChange = (e : React.ChangeEvent<{}>, newValue : any) => {
    if(props.handleTabChange) {
      props.handleTabChange(e, newValue)
    }
    setCurrentTab(newValue)
  }

  return (
    <>
  <Box className={container}>
    <Box className="left">
    {/* Logo Section */}
    <Box className={LogoSection}>
      <Logo type={props.type} color="primary" height={24} />
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

  </Box>
      {/* GNB Bottom Banner Section */}
      {props.banner && <Box className={BannerSection}>
        {props.banner}
      </Box>}
      </>)
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
  BannerSection : {
    position : 'absolute',
    display : 'flex',
    alignItems : 'center',
    width : '100%',
    borderTop : `1px solid ${colorSet.gray400}`
  }
}))