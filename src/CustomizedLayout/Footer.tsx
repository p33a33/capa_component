import React from "react";
import { Box, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Container } from ".";
import { ContainerProps } from "./Container";
import { Logo, Typography } from "../CustomizedComponent";
import { colorSet } from "../Provider";

export interface FooterProps extends ContainerProps {
  onClickLogo: () => void;
  onClickEmail: () => void;
  links: { title: string; onClick: () => void }[];
}

const Footer = (props: FooterProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Container
      style={{ height: !matches ? 422 : 433 }}
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
      <Box display="flex" justifyContent="space-between">
        {/* left */}
        <Box display="flex" flexDirection="column">
          <Box className={classes.upperTextBox}>
            <Typography variant="body1" fontWeight="500">
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

        {/* right */}
        <Box
          display="flex"
          flexDirection="row"
          className={classes.links}
          justifyContent="flex-end"
        >
          {props.links.map((link, index) => (
            <Box className="item" key={`${index}${link.title}`}>
              <Typography onClick={link.onClick}>{link.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* lower */}
      <Box className={classes.lowerBox}>
        <Box display="flex" flexDirection="column">
          <Typography variant="caption" color="textSecondary">
            {`(주)에이팀벤처스 (대표: 고산)​   |   서울특별시 서초구 나루터로 60​ (잠원동, 정원빌딩), 3층​`}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {`사업자등록번호 : 101-86-83458​   |   [사업자정보확인] 통신판매신고번호 : 2017-서울서초-1387​   |   팩스 : 02-6442-5450`}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  logoBox: {
    marginBottom: 20,
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
  lowerBox: {
    "& span": {
      "&:not(:last-child)": {
        marginBottom: 4,
      },
    },
  },
  links: {
    width: 300,
    height: "fit-content",
    flexWrap: "wrap",
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
