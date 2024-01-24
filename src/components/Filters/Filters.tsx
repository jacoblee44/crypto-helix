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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
    button: {
        '&:hover': {
            boxShadow: 'rgba(255, 255, 255, 0.15) 1px 1px 10px 3px',
            borderColor: 'transparent',
            textDecoration: 'none',
            backgroundColor: 'rgb(89, 115, 254)'
        }
    },
    selected: {
        backgroundColor: 'rgb(28, 35, 61)!important', // Set the background color for selected item
    },
})

export default function Filters({open, isClose}: any) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1); // State to keep track of the selected index

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        setSelectedIndex(index);
    };

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
                maxWidth:'900px',
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
                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontSize:'20px', fontWeight:600}}>Filters</Typography>
                    <Stack direction="row" alignItems="center">
                    <IconButton sx={{color: 'gray'}} onClick={isClose}>
                        <CloseIcon  />
                    </IconButton>
                    </Stack>
                </Stack>
            </DialogTitle>
            <Divider sx={{borderColor: 'rgb(45,45,61)'}}></Divider>
            <DialogContent sx={{padding:'24px 0px !important'}}>
                <Stack direction={"column"} sx={{ gap:{md:'32px', sm:'16px', xs:'8px'}}}>
                    <Stack direction={"column"}>
                        <Stack margin={"0px 24px 24px"}></Stack>
                        <Stack direction={"row"} alignItems={"flex-start"} borderBottom={"2px solid rgb(30,33,54)"}>
                            <Stack direction={"column"} width={"25%"} borderRight={"2px solid rgb(30,33,54)"}>
                                <List sx={{padding: 0}}>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 0}
                                        onClick={(e) => handleListItemClick(e, 0)}
                                        className={selectedIndex == 0? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Time Filter</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 1}
                                        onClick={(e) => handleListItemClick(e, 1)}
                                        className={selectedIndex == 1? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Net PNL</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 2}
                                        onClick={(e) => handleListItemClick(e, 2)}
                                        className={selectedIndex == 2? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>ROI%</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 3}
                                        onClick={(e) => handleListItemClick(e, 3)}
                                        className={selectedIndex == 3? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Avg Leverage</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 4}
                                        onClick={(e) => handleListItemClick(e, 4)}
                                        className={selectedIndex == 4? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Avg Trader Size</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 5}
                                        onClick={(e) => handleListItemClick(e, 5)}
                                        className={selectedIndex == 5? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Avg Pos Traders</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 6}
                                        onClick={(e) => handleListItemClick(e, 6)}
                                        className={selectedIndex == 6? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Win %</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 7}
                                        onClick={(e) => handleListItemClick(e, 7)}
                                        className={selectedIndex == 7? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Position Closed</Typography>
                                    </ListItem>
                                    <ListItem disablePadding button sx={{
                                        minHeight:'55px',
                                        padding: '8px 16px',
                                        '&:hover': {
                                            textDecoration:'none',
                                            backgroundColor: 'rgba(255,255,255,0.08)'
                                        }
                                        }} selected={selectedIndex == 8}
                                        onClick={(e) => handleListItemClick(e, 8)}
                                        className={selectedIndex == 8? classes.selected: ''}
                                    >
                                            <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'14px', fontWeight: 400}}>Streak</Typography>
                                    </ListItem>
                                </List>
                            </Stack>
                            <Stack direction={"column"} width={"100%"} margin={4}>
                                {selectedIndex === 0 && <Stack direction={"column"}>
                                    <FormControl sx={{
                                        '& .Mui-focused': {
                                            color: 'rgb(89,115,254)'
                                        },
                                        '& .Mui-checked': {
                                            color: 'rgb(89,115,254)'
                                        }
                                    }}>
                                        <FormLabel id="demo-radio-buttons-group-label" 
                                            sx={{
                                                fontFamily:'Sora, sans-serif', fontWeight: 400, padding:0, position:'relative', color: 'rgb(160,163,196)', fontSize:'1rem',
                                                '& .Mui-focused': {
                                                    color: 'rgb(160, 163, 196)'
                                                }
                                            }}>Time</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="7 Days" control={<Radio />} label="7 Days" sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize:'0.875rem', fontFamily:'Sora, sans-serif', fontWeight:400
                                                }
                                                }}/>
                                            <FormControlLabel value="30 Days" control={<Radio />} label="30 Days" sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize:'0.875rem', fontFamily:'Sora, sans-serif', fontWeight:400
                                                }
                                                }}/>
                                            <FormControlLabel value="60 Days" control={<Radio />} label="60 Days"sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize:'0.875rem', fontFamily:'Sora, sans-serif', fontWeight:400
                                                }
                                                }}/>
                                            <FormControlLabel value="All Time" control={<Radio />} label="All Time" sx={{
                                                '& .MuiFormControlLabel-label': {
                                                    fontSize:'0.875rem', fontFamily:'Sora, sans-serif', fontWeight:400
                                                }
                                                }}/>
                                        </RadioGroup>
                                    </FormControl>
                                </Stack>}
                                {selectedIndex === 1 && 
                                    <Stack direction={"column"} width={"100%"} gap={2} sx={{flexDirection: {sm:'row', xs:'column'}}}>
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
                                        }} variant="outlined" placeholder="minimum"></TextField>
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
                                        }} variant="outlined" placeholder="maximum"></TextField>
                                    </Stack>
                                } 
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>

    )
}