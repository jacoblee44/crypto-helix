import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import { AppBar, Toolbar,  Link, Tooltip, Menu } from '@material-ui/core';
import './LeadHeader.css';
import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { MenuProps } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
import Wallet from "../Wallet/Wallet";
import Mnemo from "../Mnemo/Mnemo";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    marginTop: theme.spacing(5),
    minWidth: 220,
    backgroundColor: 'rgb(16, 20, 35)',
    color:
      'rgb(255, 255, 255)',
    border: '0.5px solid rgb(102, 102, 128)',
    boxShadow:
      'rgba(86, 85, 108, 0.24) 0px 0px 2px 0px, rgba(86, 85, 108, 0.24) -20px 20px 40px -4px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'rgb(16, 20, 35)',
      },
    },
  },
}));



export default function LeadHeader(props: any) {

  const { isDash } = props
  const dragWidth = useRef(null);

  const [isMobile, setMobile] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isopen, setOpen] = React.useState(false);
  const [isMnemonics, setMnemonics] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleMnemoOpen = () => {
    setMnemonics(true);
    setAnchorEl(null);
  }

  const handleDialogClose = () => {
    setOpen(false);
    setMnemonics(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDashboard = () => {
    setAnchorEl(null);
    window.location.href = '/dashboard'
  }

  const handleBookmark = () => {
    setAnchorEl(null);
    window.location.href = '/bookmark'
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entires) => {
      for (let entry of entires) {
        const { width } = entry.contentRect;
        if (width < 1200) {
          setMobile(true);
        }
        else {
          setMobile(false);
        }
      }
    });

    if (dragWidth.current) {
      resizeObserver.observe(dragWidth.current);
    }
    return () => {
      resizeObserver.disconnect();
    }

  }, [])

  return (
    <div>
      <AppBar style={{ borderBottom: '1px solid rgb(61,61,61', backgroundColor: '#0B0E18' }} ref={dragWidth}>
        <Toolbar className="pr-10 pl-10 justify-between">
          <div className="flex justify-start items-center min-w-[33%]">
            <img
              src="./img/new_logo.png"
              className="w-[25px] h-[25px]"
              alt="logo"
              loading="lazy"
            />
            <Typography variant="h5" style={{ marginLeft: '10px', fontSize: '26px', fontFamily: 'Sora, sans-serif', fontWeight: '400', cursor: 'pointer' }} >alfred</Typography>
          </div>
          <div className="flex justify-between ">
            <Link href="/market" target="_blank" style={{ textDecoration: 'none' }}>
              <Typography variant="h5" style={{ fontSize: '1rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: isDash ? 'gray' : 'white' }} >Leaderboard</Typography>
            </Link>
            <Link href="/dashboard" target="_blank" style={{ textDecoration: 'none' }}>
              <Typography variant="h5" style={{ marginLeft: '35px', fontSize: '1rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: isDash ? 'white' : 'gray' }} >Dashboard</Typography>
            </Link>
          </div>
          <div className="head-right">
            <div className="btn-start">
              <div className="flex flex-col items-center justify-center min-w-[20px]">
                <span className="btn-span">
                  <img src="/img/Play.svg" alt="" className="btn-img" />
                </span>
              </div>
              <Typography style={{ fontSize: '12px', fontFamily: 'Sora, sans-serif', fontWeight: '400', paddingTop: '2px', lineHeight: '1.5' }} >QuickStart</Typography>
            </div>
            <div className="btn-second">
              <span className="btn-second-span">
                <img src="/img/support.svg" alt="" className="btn-img" />
              </span>
            </div>
            <div className="btn-third">
              <span className="btn-second-span">
                <img src="/img/bell.png" alt="" className="btn-img" />
              </span>
            </div>
            <div className="btn-four">
              <Button
                id="submenu-button"
                aria-controls={open ? 'submenu-button' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className="h-[40px] w-[150px]"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  position: 'relative',
                  boxSizing: 'border-box',
                  outline: '0px',
                  margin: '0px',
                  cursor: 'pointer',
                  userSelect: 'none',
                  verticalAlign: 'middle',
                  appearance: 'none',
                  textDecoration: 'none',
                  fontWeight: 400,
                  lineHeight: 2,
                  textTransform: 'capitalize',
                  fontFamily: 'Sora, sans-serif',
                  padding: '6px 8px',
                  height: '40px',
                  fontSize: '14px',
                  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  color: 'white',
                  border: '0.5px solid rgb(102, 102, 128)',
                  background: 'linear-gradient(135deg, rgb(37, 42, 64) 0.23%, rgb(22, 25, 38) 100%)',
                  borderRadius: '4px',
                  minWidth: '176px',
                  justifyContent: 'flex-start'
                }}>
                <div className="leadheader-svg">
                  <svg x="0" y="0" width="24" height="24">
                    <rect x="0" y="0" width="24" height="24" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                    <rect x="0" y="0" width="24" height="24" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                    <rect x="0" y="0" width="24" height="24" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                  </svg>
                </div>
                <Typography style={{ fontSize: '0.875rem', fontFamily: 'Sora, sans-serif', fontWeight: '400', lineHeight: '1.5', color: 'white', paddingLeft: '8px' }} >0x7...235468</Typography>
              </Button>
              <StyledMenu
                id="submenu-button"
                MenuListProps={{
                  'aria-labelledby': 'submenu-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDashboard} sx={{ height: '50px', padding: '12px 16px', fontSize: '0.875rem', color: 'rgb(255,255,255)', display: 'flex', columnGap: '8px' }}>
                  <span className="btn-second-span">
                    <img src="/img/grid-small.png" alt="" className="btn-img" />
                  </span>
                  Dashboard
                </MenuItem>
                <MenuItem onClick={handleBookmark} sx={{ height: '50px', padding: '12px 16px', fontSize: '0.875rem', color: 'rgb(255,255,255)', display: 'flex', columnGap: '8px' }}>
                  <span className="btn-second-span">
                    <img src="/img/bookmark.png" alt="" className="btn-img" />
                  </span>
                  Bookmarked Traders
                </MenuItem>
                <MenuItem onClick={handleClickOpen} sx={{ height: '50px', padding: '12px 16px', fontSize: '0.875rem', color: 'rgb(255,255,255)', display: 'flex', columnGap: '8px' }}>
                  <span className="btn-second-span">
                    <img src="/img/WalletNav.png" alt="" className="btn-img" />
                  </span>
                  My Wallet
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ height: '50px', padding: '12px 16px', fontSize: '0.875rem', color: 'rgb(255,255,255)', display: 'flex', columnGap: '8px' }}>
                  <span className="btn-second-span">
                    <img src="/img/Copy.png" alt="" className="btn-img" />
                  </span>
                  Copy Address
                </MenuItem>
                <MenuItem onClick={handleMnemoOpen} sx={{ height: '50px', padding: '12px 16px', fontSize: '0.875rem', color: 'rgb(255,255,255)', display: 'flex', columnGap: '8px' }}>
                  <span className="btn-second-span">
                    <img src="/img/privateKey.svg" alt="" className="btn-img" />
                  </span>
                  View Mnemonics
                </MenuItem>
                <Divider sx={{ margin: '8px 16px', borderColor: 'rgb(45,45,61)' }} />
                <MenuItem onClick={handleClose} sx={{ height: '50px', padding: '12px 16px', fontSize: '1rem', color: 'red', display: 'flex', columnGap: '8px' }}>
                  <span className="btn-second-span">
                    <img src="/img/SignOut.png" alt="" className="btn-img" />
                  </span>
                  Disconnect
                </MenuItem>
              </StyledMenu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Wallet open={isopen} isClose={handleDialogClose}/>
      <Mnemo open={isMnemonics} isClose={handleDialogClose} />
    </div>
  );
};
