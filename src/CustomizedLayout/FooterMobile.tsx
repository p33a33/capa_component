import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Container } from ".";
import { ContainerProps } from "./Container";
import { Logo, Typography } from "../CustomizedComponent";
import { colorSet } from "../Provider";

export interface FooterMobileProps extends ContainerProps {
  onClickLogo: () => void;
  onClickEmail: () => void;
  mainLinks: { title: string; onClick: () => void }[];
  subLinks: { title: string; onClick: () => void }[];
}

const FooterMobile = (props: FooterMobileProps) => {
  const classes = useStyles();

  return (
    <Container
      style={{ padding: "36px 24px" }}
      justifyContent="center"
      wrapperStyle={{
        style: {
          borderTop: `1px solid ${colorSet.gray400}`,
        },
      }}
    >
      {/* Logo */}
      <Box className={classes.logoBox}>
        <Logo height={24} />
      </Box>

      {/* upper */}
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexDirection="column"
          className={classes.mainLinks}
        >
          {props.mainLinks.map((link, index) => (
            <Box className="item" key={`${index}${link.title}`}>
              <Typography onClick={link.onClick} color="textPrimary">
                {link.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        <Box className={classes.upperTextBox}>
          <Typography variant="body1" fontWeight="500" color="textPrimary">
            문의 사항은 우측 하단의 채널톡으로 주세요.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`평일 오전 10시 - 오후 6시
                (점심 시간 1시 - 2시 제외 • 주말/공휴일 제외)`}
          </Typography>
          <Typography onClick={props.onClickEmail} color="primary">
            support@capa.ai
          </Typography>
        </Box>
      </Box>

      {/* lower */}
      <Box display="flex" className={classes.subLinks}>
        {props.subLinks.map((link, index) => (
          <Typography
            variant="caption"
            color="textSecondary"
            key={`${link.title}${index}`}
            onClick={link.onClick}
          >
            {link.title}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default FooterMobile;

const useStyles = makeStyles((theme) => ({
  logoBox: {
    marginBottom: 32,
  },
  upperTextBox: {
    marginBottom: 70,
    whiteSpace: "pre-line",
    "& p": {
      "&:not(:last-child)": {
        marginBottom: 16,
      },
    },
  },
  subLinks: {
    "& span": {
      "&:hover": {
        cursor: "pointer",
      },
      "&:not(:last-child)": {
        "&:after": {
          content: ' "|" ',
          margin: "0px 8px",
        },
      },
    },
  },
  mainLinks: {
    width: 15,
    height: "fit-content",
    marginBottom: 46,
    "& .item": {
      width: 150,
      height: "fit-content",
      marginBottom: 12,
      "&:hover": {
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: 150,
      display: "block",
      overflow: "hidden",
    },
  },
}));
