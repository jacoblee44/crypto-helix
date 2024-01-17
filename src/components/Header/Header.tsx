import React, {useState, useEffect, useRef} from "react";
import "./Header.scss";
import "tailwindcss/tailwind.css";
import {AppBar, Toolbar, Typography, Divider, Link, Button, Tooltip} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";

export default function Header(props: any){
  const dragWidth = useRef(null);

  const [isMobile, setMobile] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect( () => {
    const resizeObserver = new ResizeObserver((entires) => {
        for (let entry of entires) {
            const {width} = entry.contentRect;
            if(width < 1200) {
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
      <AppBar color="transparent" style={{backdropFilter: "blur(20px)", borderBottom: '1px solid rgb(61,61,61'}} ref={dragWidth}>
        <Toolbar className="pr-10 pl-10">
          <div className="pl-10 flex justify-between items-center">
            <img
              src="./img/new_logo.png"
              className="w-[25px] h-[25px]"
              alt="logo"
              loading="lazy"
            />
            <Typography variant="h5" style={{marginLeft: '10px', fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: '700'}} >alfred</Typography>
          </div>
          <Divider orientation="vertical"
            style={{
              flexShrink: '0',
              borderWidth: '0px thin 0px 0px',
              borderStyle: 'solid',
              borderColor: 'rgba(255, 255, 255, 0.12',
              margin: '0px 35px',
              height: '40px',
              width: '0.2px',
              opacity: '0.5',
              backgroundColor: '#2D2D3D'
            }}
          ></Divider>
          {!isMobile? <div className="flex justify-between ">
            <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
            <Typography variant="h5" style={{ fontSize: '1rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white'}} >Resources</Typography>
            </Link>
            <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
            <Typography variant="h5" style={{marginLeft: '35px', fontSize: '1rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white'}} >About</Typography>
            </Link>
          </div>: ""}
          {!isMobile ? <div className="absolute right-[40px]">
            <Button className="h-[40px] w-[150px]" style={{backgroundColor: 'rgb(37, 37, 235)'}}>
              <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
                <Typography variant="h5" style={{ fontSize: '0.8rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white', textTransform: 'capitalize'}} >Launch App</Typography>
              </Link>
            </Button>
          </div> : <div className="absolute right-[40px]">
            <Tooltip title="SubMenu">
              <Button className="h-[40px] w-[64px] " style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxSizing: 'border-box',
                outline: '0px',
                margin: '0px',
                cursor: 'pointer',
                userSelect: 'none',
                verticalAlign: 'middle',
                appearance: 'none',
                textDecoration: 'none',
                fontWeight: '400',
                lineHeight: '2',
                textTransform: 'capitalize',
                fontFamily: 'Sora, sans-serif',
                minWidth: '64px',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                color: 'rgb(37, 37, 235)',
                height: '40px',
                fontSize: '14px',
                backgroundColor: 'transparent',
                padding: '8px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px'}} onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}>
                  <div className="sub-menu">
                    <SvgIcon>
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </SvgIcon>
                  </div>
              </Button>
            </Tooltip>  
          </div>}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                borderRadius: '10px',
                bgcolor: "rgb(23, 23, 34)",
                boxShadow: 'rgba(86, 85, 108, 0.24) 0px 0px 2px 0px, rgba(86, 85, 108, 0.24) -20px 20px 40px -4px',
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                  bgcolor: "rgb(23, 23, 34)"
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "rgb(23, 23, 34)",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Button className="h-[40px] w-[120px]" style={{backgroundColor: 'rgb(37, 37, 235)', marginLeft: '20px', marginRight: '20px'}}>
                <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
                  <Typography variant="h5" style={{ fontSize: '0.8rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white', textTransform: 'capitalize'}} >Launch App</Typography>
                </Link>
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose} style={{justifyContent: 'center'}}>
              <Typography variant="h5" style={{ fontSize: '0.8rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white'}} >Resources</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} style={{justifyContent: 'center'}}>
              <Typography variant="h5" style={{fontSize: '0.8rem', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white'}} >About</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
    
  );
};
