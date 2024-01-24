import React, { useState, useEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import IconButton from "@mui/material/IconButton";
import { MenuProps } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import {makeStyles} from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            boxShadow: 'rgba(255, 255, 255, 0.15) 1px 1px 10px 3px',
            borderColor: 'transparent',
            textDecoration: 'none',
            backgroundColor: 'rgb(89, 115, 254)'
        }
    }
}))

export default function CopyAddress({open, isClose}: any) {
    const classes = useStyles();
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
                <Typography sx={{fontFamily: 'Sora, sans-serif', fontSize:'20px', fontWeight:600}}>Copy Trader By Address</Typography>
                <Stack direction="row" alignItems="center">
                <IconButton sx={{color: 'gray'}} onClick={isClose}>
                    <CloseIcon  />
                </IconButton>
                </Stack>
            </Stack>
            </DialogTitle>
            <Divider sx={{borderColor: 'rgb(45,45,61)'}}></Divider>
            <DialogContent>
                <Stack direction="column">
                    <Stack direction={"row"} marginTop={1} marginBottom={2} sx={{
                        alignSelf:{sm:'flex-start', xs:'auto'}
                    }}>
                        <Stack direction={"row"} justifyContent={"flex-start"} width={"100%"}>
                            <Stack direction="row" sx={{border: '1px solid rgb(45,45,61)', padding: '3px', width: '100%', background: 'transparent', borderRadius: '6px', columnGap: '1.6px'}}>
                                <Button sx={{
                                    textTransform: 'capitalize',
                                    fontFamily: 'Sora, sans-serif',
                                    padding: '20px 10px',
                                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    backgroundColor: 'rgb(89, 115, 254)',
                                    boxShadow: 'rgba(86, 85, 108, 0.2) 0px 3px 1px -2px, rgba(86, 85, 108, 0.14) 0px 2px 2px 0px, rgba(86, 85, 108, 0.12) 0px 1px 5px 0px',
                                    borderRadius: '4px',
                                    height: '32px',
                                    fontSize: '14px',
                                    color: 'rgb(255, 255, 255)',
                                    fontWeight: '400',
                                    minWidth: '100px',
                                    width: '100%', 
                                    '&:hover': {
                                        backgroundColor: 'rgb(89, 115, 254)'
                                    }
                                }} variant='contained'>GMX V1</Button>
                                <Button sx={{
                                    textTransform: 'capitalize',
                                    fontFamily: 'Sora, sans-serif',
                                    padding: '20px 10px',
                                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    borderRadius: '4px',
                                    height: '32px',
                                    fontSize: '14px',
                                    color: 'rgb(255, 255, 255)',
                                    fontWeight: '400',
                                    minWidth: '100px',
                                    width: '100%'
                                }}>GMX V2</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Typography sx={{
                        marginTop:'8px',
                        fontSize:'0.875rem',
                        fontFamily:'Sora, sans-serif',
                        fontWeight: 400
                    }}>Enter Wallet Address</Typography>
                    <TextField sx={{
                        width:'100%',
                        backgroundColor:'rgb(11,14,24)',
                        fontSize:'1rem',
                        fontWeight: 400,
                        marginTop:'8px',
                        '& .MuiInputBase-root': {
                            color: 'white',
                            fontFamily:'Sora, sans-serif',
                            fontSize:'14px',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor:'rgba(255,255,255,0.23)',
                            borderRadius:'8px'
                        }
                    }} variant="outlined" placeholder="Paste or type address here"></TextField>
                </Stack>
            </DialogContent>
            <Divider sx={{borderColor: 'rgb(45,45,61)'}}></Divider>
            <DialogActions sx={{padding:'24px'}}>
                <Button sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Sora, sans-serif',
                    padding: '7px 21px',
                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderRadius: '4px',
                    height: '48px',
                    fontSize: '16px',
                    color: 'rgb(89, 115, 254)',
                    fontWeight: '400',
                    minWidth: '64px',
                    width: '70%',
                    border:'1px solid rgba(89,115,254,0.5)',
                    backgroundColor:'transparent',
                    '& .MuiButtonBase-root:hover':{
                        boxShadow:'none',
                        textDecoration:'none',
                        backgroundColor:'rgba(89,115,254,0.08)',
                        border:'1px solid rgb(89,115,254)'
                    }
                }} onClick={isClose}>Cancel</Button>
                <Button sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Sora, sans-serif',
                    padding: '8px 22px',
                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    borderRadius: '4px',
                    height: '48px',
                    fontSize: '16px',
                    boxShadow: 'rgba(86, 85, 108, 0.2) 0px 3px 1px -2px, rgba(86, 85, 108, 0.14) 0px 2px 2px 0px, rgba(86, 85, 108, 0.12) 0px 1px 5px 0px',
                    color: 'rgb(255, 255, 255)',
                    fontWeight: '400',
                    minWidth: '100px',
                    width: '70%',
                    backgroundColor:'rgb(89, 115, 254)',
                    '&:hover': {
                        backgroundColor:'rgb(89, 115, 254)'
                    },
                    '&::before': {
                        position: 'absolute',
                        left: '-100%',
                        top: '0px',
                        height: '100%',
                        width: '100%',
                        background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        opacity: '0.5',
                        transition: 'all 0.65s ease-in-out 0s'
                    },
                    '&:hover::before': {
                        left:'100%'
                    }
                }} className={classes.button}>Next</Button>
            </DialogActions>
        </Dialog>

    )
}