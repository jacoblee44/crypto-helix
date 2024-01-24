import React, { useState, useEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Mnemo({ open, isClose }: any) {
    const [isView, setView] = useState(true);
    const handleViewClick = () => {
        setView(false);
    }
    const memoList = ["deposit", "woman", "kangaroo", "bring", "guard", "wool", "rubber", "announce", "elbow", "guess", "put", "use", "suffer", "trust"]

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={open}
            onClose={() => {
                isClose()
                setView(true)
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'rgb(16,20,35)',
                    color: 'white',
                    borderRadius: '16px',
                    border: '1px solid rgb(45,45,61)',
                    maxWidth: '600px',
                    maxHeight: 'calc(100%-64px)'
                },
                '& .MuiBackdrop-root': {
                    backdropFilter: 'blur(5px)',
                    backgroundColor: 'rgba(45,45,61,0.5) !important'
                }
            }}
        >
            {isView ? <><IconButton sx={{
                padding: '8px',
                borderRadius: '50%',
                overflow: 'visible',
                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                color: 'white',
                position: 'absolute',
                top: '20px',
                right: '30px',
                height: '50px',
                width: '50px',
                zIndex: 101
            }} onClick={() => {
                isClose();
                setView(true)
            }}>
                <CloseIcon />
            </IconButton><DialogContent>
                    <Stack direction={"column"} minHeight={"300px"} justifyContent={"space-evenly"} alignItems={"center"}>
                        <img src="/img/eyeCrossed.svg" style={{ color: 'transparent', maxWidth: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} width={40} height={40} />
                        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
                            <Typography variant="h4" sx={{
                                fontSize: { xl: '1.5rem', md: '1.5rem', sm: '1.25rem', xs: '1.25rem' },
                                fontWeight: 600,
                                fontFamily: 'Sora, sans-serif',
                                textAlign: 'center'
                            }}>Click to reveal your secret recovery phrase</Typography>
                            <Typography sx={{
                                marginTop: '8px',
                                fontSize: '1rem',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 400,
                                color: 'rgb(160,163,196)'
                            }}>Make sure no one is watching your screen</Typography>
                        </Stack>
                        <Button sx={{
                            textTransform: 'capitalize',
                            fontFamily: 'Sora, sans-serif',
                            minWidth: '64px',
                            padding: '6px 16px',
                            color: 'rgb(255, 255, 255)',
                            backgroundColor: 'rgb(89, 115, 254)',
                            boxShadow: 'rgba(86, 85, 108, 0.2) 0px 3px 1px -2px, rgba(86, 85, 108, 0.14) 0px 2px 2px 0px, rgba(86, 85, 108, 0.12) 0px 1px 5px 0px',
                            borderRadius: '4px',
                            height: '40px',
                            fontSize: '14px',
                            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                            width: '40%'
                        }}
                            onClick={handleViewClick}>View Mnemonics</Button>
                    </Stack>
                </DialogContent></> :
                 <>
                <Typography variant="h2" sx={{
                    fontSize: '1.125rem',
                    marginBottom:'8px',
                    fontWeight:700,
                    fontFamily:'Sora, sans-serif',
                    flex: '0 0 auto',
                    padding: '24px 24px 0px'
                }}>
                    <Typography variant="h5" sx={{
                        fontSize:{xl:'1.25rem', md:'1.25rem', sm:'1.1875rem', xs:'1.125rem'},
                        fontWeight: 700,
                        fontFamily:'Sora, sans-serif'
                    }}>Your recovery phrase</Typography>
                    <Typography sx={{
                        margin: '8px 0px 8px 8px',
                        fontSize: '0.875rem',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 400,
                        color: 'rgb(160, 163, 196)'
                    }}>Write down or copy these words in the right order and save them somewhere safe.</Typography>
                    <IconButton sx={{
                        padding: '8px',
                        borderRadius: '50%',
                        overflow: 'visible',
                        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        color: 'white',
                        position: 'absolute',
                        top: '20px',
                        right: '30px',
                        height: '50px',
                        width: '50px',
                        zIndex: 101
                    }} onClick={() => {
                        isClose();
                        setView(true)
                    }}>
                        <CloseIcon />
                    </IconButton>
                </Typography>
                <Divider sx={{
                    margin: '0px',
                    flexShrink: 0,
                    borderWidth: '0px 0px thin',
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.12)',
                    width: '100%'
                }}></Divider>
                <DialogContent>
                    <Grid container>
                        {memoList.map((item, index) => (
                            <Grid item sx={{
                                margin: '4.8px',
                                border: '1px solid rgb(160,163,196)',
                                backgroundColor: 'rgb(28,35,61)',
                                height:'40px',
                                borderRadius:'20px',
                                padding:'8px 16px',
                                textAlign:'center'
                            }}>
                                <Stack direction={"row"} gap={"12px"}>
                                    <Typography sx={{
                                        fontSize:'1rem',
                                        fontFamily: 'Sora, sans-serif',
                                        fontWeight:400,
                                        color: 'rgb(160, 163,196)'
                                    }}>{index+1}.</Typography>
                                    <Typography sx={{
                                        fontSize:'1rem',
                                        fontFamily: 'Sora, sans-serif',
                                        fontWeight:400,
                                    }}>{item}</Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                    <Divider sx={{
                        marginTop: '24px',
                        flexShrink: 0,
                        borderWidth: '0px 0px thin',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255, 255, 255, 0.12)',
                        width: '100%'
                    }}></Divider>
                    <Stack direction={"column"} height={3} alignItems={"flex-end"} justifyContent={"flex-end"} width={"100%"} color={"rgb(89,115,254)"} marginTop={3} marginBottom={1}>
                        <Stack direction={"row"}>
                            <Stack direction={"row"} alignItems={"center"} height={3} justifyContent={"flex-end"} paddingRight={1}>
                                <Typography sx={{
                                    marginRight: '8px',
                                    fontSize:'1rem',
                                    fontFamily:'Sora, sans-serif',
                                    fontWeight: 400,
                                    cursor: 'pointer'
                                }}>Copy to clipboard</Typography>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" aria-label="Click to Copy" className=" iconify            iconify--fluent" width="24" height="24" viewBox="0 0 16 16" style={{cursor: 'pointer'}}>
                                    <path fill="currentColor" d="M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415M11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2zm0 1h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5"></path>
                                </svg>
                            </Stack>
                        </Stack>
                    </Stack>
                </DialogContent></>}

        </Dialog>
    )
}