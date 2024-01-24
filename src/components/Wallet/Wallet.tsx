import React, { useState, useEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from "@mui/material/IconButton";
import { MenuProps } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { styled, alpha } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Wallet({open, isClose}: any) {
    
    return (
        <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={isClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          
          '& .MuiPaper-root': {
            backgroundColor: 'rgb(16,20,35)',
            color: 'white',
            borderRadius: '16px',
            border: '1px solid rgb(45,45,61)',
            maxWidth:'600px',
            maxHeight:'calc(100%-64px)'
          },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(45,45,61,0.5) !important'
          }
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography sx={{fontFamily: 'Sora, sans-serif', fontSize:'20px', fontWeight:600}}>My Wallet</Typography>
            <Stack direction="row" alignItems="center">
              <IconButton sx={{color: 'gray'}} onClick={isClose}>
                <CloseIcon  />
              </IconButton>
            </Stack>
          </Stack>
        </DialogTitle>
        <Divider sx={{borderColor: 'rgb(45,45,61)'}}></Divider>
        <DialogContent>
          <Box>
            <Paper sx={{
              backgroundColor: 'rgb(16, 20, 35)',
              color: 'rgb(255, 255, 255)',
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              boxShadow: 'none',
              backgroundImage: 'none',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: '8px',
              zIndex: '0',
              marginBottom: '2.4px'
            }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" sx={{
                  zIndex: 1,
                  backgroundColor: 'rgb(28,35,61)',
                  padding: '16px',
                  alignItems:'center',
                  height:'80px',
                  width: '100%',
                  justifyContent:'space-between',
                  borderRadius:'10px'
                }}>
                  <Stack direction="row" alignItems="center" columnGap={2}>
                    <div className="main-svg">
                      <svg x="0" y="0" width="36" height="36">
                        <rect x="0" y="0" width="36" height="36" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                        <rect x="0" y="0" width="36" height="36" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                        <rect x="0" y="0" width="36" height="36" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                      </svg>
                    </div>
                    <Stack direction="column">
                      <Stack direction="row" alignItems="center">
                        <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'13px', fontWeight: 700}}>tierney-cobra-f413</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" justifyContent={"flex-start"}>
                        <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight: 400, color:'white', marginRight:'8px'}}>0x7...3f456</Typography>
                        <Stack direction={"row"}>
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" aria-label="Click to Copy" className=" iconify iconify--fluent" width="17" height="17" viewBox="0 0 16 16" style={{cursor: 'pointer'}}>
                            <path fill="currentColor" d="M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415M11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2zm0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5"></path>
                          </svg>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Button sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Sora, sans-serif',
                    minWidth: '64px',
                    padding: '6px 8px',
                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    color: 'rgb(255, 62, 51)',
                    borderRadius: '4px',
                    height: '40px',
                    fontSize: '14px',
                    margin: '0px',
                    fontWeight: 500
                  }}>Disconnect</Button>
                </Stack>
              </Stack>
            </Paper>
            <Stack direction={"row"} justifyContent={"space-between"} gap={1} marginTop={"12px"} marginBottom={"20px"}>
              <Button sx={{
                textTransform: 'capitalize',
                fontFamily: 'Sora, sans-serif',
                minWidth: '64px',
                padding: '6px 8px',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                color: 'white',
                borderRadius: '4px',
                width:'100%',
                height: '40px',
                fontSize: '14px',
                fontWeight: 600,
                backgroundColor:'rgb(28,35,61)'
              }}
              startIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--iconoir" width="20" height="20" viewBox="0 0 24 24" style={{cursor: 'pointer', marginRight: '10px', color: 'rgb(92, 229, 92)'}}>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6L6 19m0 0V6.52M6 19h12.48"></path>
                </svg>}>Receive
              </Button>
              <Button sx={{
                textTransform: 'capitalize',
                fontFamily: 'Sora, sans-serif',
                minWidth: '64px',
                padding: '6px 8px',
                width:'100%',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                color: 'white',
                borderRadius: '4px',
                height: '40px',
                fontSize: '14px',
                fontWeight: 600,
                backgroundColor:'rgb(28,35,61)'
              }}
              startIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--iconoir" width="20" height="20" viewBox="0 0 24 24" style={{cursor: 'pointer', marginRight: '10px', color: 'rgb(92, 229, 92)'}}>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6L6 19m0 0V6.52M6 19h12.48"></path>
                </svg>}>Send
              </Button>
              <Button sx={{
                textTransform: 'capitalize',
                fontFamily: 'Sora, sans-serif',
                minWidth: '64px',
                padding: '6px 8px',
                width:'100%',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                color: 'white',
                borderRadius: '4px',
                height: '40px',
                fontSize: '14px',
                fontWeight: 600,
                backgroundColor:'rgb(28,35,61)'
              }}
              startIcon={<span style={{width:'26px', height:'26px'}}>
                  <img src="/img/BuyCrypto.svg" alt="" style={{borderRadius:'5px'}} />
                </span>}>Buy
              </Button>
            </Stack>
            <Stack direction={"column"} marginLeft={1} marginRight={1} marginTop={2}>
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography sx={{fontFamily:'Sora, sans-serif', fontWeight:400, fontSize:'18px'}}>My Tokens</Typography>
                <IconButton sx={{color:'white', width:'24px', height:'24px'}} >
                  <RefreshIcon  />
                </IconButton>
              </Stack>
              <Stack direction={"column"} gap={2} marginTop={3}>
                <Stack direction="column" alignItems="center" sx={{
                    paddingTop: {sm:'40px', xs:'16px'},
                    paddingBottom: {sm:'40px', xs:'16px'},
                }}>
                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>

                        <img alt="bell" src="/img/NoData.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '180px', height: '180px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />

                    </span>
                    <Stack direction="column" alignItems="center" marginTop={3}>
                        <Typography variant='h5' sx={{
                            fontSize: {xl:'1.25rem', md:'1.25rem', sm:'1.875rem', xs:'1.125rem'},
                            fontFamily:'Sora, sans-serif',
                            fontWeight:700
                        }}>Your portfolio is empty</Typography>
                        <Typography marginTop={1} sx={{fontSize:'0.75rem', fontFamily:'Sora, sans-serif', fontWeight:'400', textAlign:'center'}}>Click the ‘Buy’ button to purchase crypto/tokens. You can also receive tokens in your wallet from another wallet by clicking on the ‘Receive’ button.</Typography>
                    </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </DialogContent>
        </Dialog>

    )
}