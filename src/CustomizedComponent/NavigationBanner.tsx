import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Typography } from './index';
import { colorSet } from '../Provider';

export interface NavigationBannerProps {
  backgroundColor : string;
  startIcon? : React.ReactNode;
  endIcon? : React.ReactNode;
  text : React.ReactNode;
  onClick? : () => void;
}

const NavigationBanner = ({ backgroundColor, startIcon, endIcon, text, onClick} : NavigationBannerProps) => {
  const { container, textBox } = useStyles({ backgroundColor})

  return (
    <Box className={container} onClick={ onClick? onClick : () => {}}>

      {startIcon && <Box className="startIconBox">
        {startIcon}
        </Box>}

      <Box className={textBox}>
        {text}
      </Box>

      {endIcon && <Box className="endIconBox">
        {endIcon}
        </Box>}

    </Box>
  )
}

export default NavigationBanner;

const useStyles = makeStyles((theme) => ({
  container : (props : { backgroundColor : string }) => ({
    display : 'flex',
    alignItems : 'center',
    paddingLeft : 24, 
    width : '100%',
    height : 48,
    backgroundColor : props.backgroundColor,
    '&:hover' : {
      cursor : 'pointer',
    },
    '& .startIconBox' : {
      marginRight : 4,
    },
    '& .endIconBox' : {
      marginLeft : 4,
    }

  }),
  textBox : {
    ...theme.typography.body2,
    fontWeight : 500
  }
}))