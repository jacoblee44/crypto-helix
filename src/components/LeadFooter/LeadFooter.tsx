import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import {Container, Stack } from '@mui/material';
import Box from "@mui/material/Box";
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Divider from "@mui/material/Divider";
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LeadFooter(props: any) {


    return (
        <Box sx={{
            paddingBottom: {sm:'0px', xs:'4px'},
            minHeight:'64px',
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
        }}
        style={{
            backgroundColor:'rgb(11,14,24)',
            borderTop:'1px solid rgb(45,45,61)',
            borderRightColor:'rgb(45,45,61)',
            borderBottomColor:'rgb(45,45,61)',
            borderLeftColor:'rgb(45,45,61)'
        }}>
            <Container maxWidth={false} sx={{width:'100%', marginLeft:'auto', padding:'8px 16px'}}>
                <Stack sx={{
                    display:'flex',
                    flexDirection:{md:'row', xs:'column'},
                    rowGap:'4px',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <Stack direction="row" alignItems="center" columnGap="16px">
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <Button sx={{
                                textTransform:'capitalize',
                                minWidth:'64px',
                                transform:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                borderRadius: '4px',
                                height:'40px',
                                fontFamily:'Sora, sans-serif',
                                fontSize:'14px',
                                color:'rgb(160,163,196)',
                                padding:'0px',
                                '&:hover':{
                                    color:'white'
                                }
                            }}>Terms and Policies</Button>
                        </Link>
                        <Divider orientation="vertical" sx={{flexShrink: 0, borderWidth:'0px this 0px 0px', borderStyle:'solid', borderColor:'rgb(45,45,61)', height:'24px'}}></Divider>
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <Button sx={{
                                textTransform:'capitalize',
                                minWidth:'64px',
                                transform:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                borderRadius: '4px',
                                height:'40px',
                                fontSize:'14px',
                                fontFamily:'Sora, sans-serif',
                                color:'rgb(160,163,196)',
                                padding:'0px',
                                '&:hover':{
                                    color:'white'
                                }
                            }}>Refund Policy</Button>
                        </Link>
                        <Divider orientation="vertical" sx={{flexShrink: 0, borderWidth:'0px this 0px 0px', borderStyle:'solid', borderColor:'rgb(45,45,61)', height:'24px'}}></Divider>
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <Button sx={{
                                textTransform:'capitalize',
                                minWidth:'64px',
                                transform:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                borderRadius: '4px',
                                height:'40px',
                                fontFamily:'Sora, sans-serif',
                                fontSize:'14px',
                                color:'rgb(160,163,196)',
                                padding:'0px',
                                '&:hover':{
                                    color:'white'
                                }
                            }}
                            startIcon={<MessageIcon />}>Send Feedback</Button>
                        </Link>
                    </Stack>
                    <Stack direction="row" columnGap="4.8px" alignItems="center">
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <IconButton
                            sx={{
                                fontSize:'1.5rem',
                                borderRadius:'50%',
                                overflow:'visible',
                                color: 'white',
                                transition:'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                padding:'4.8px'
                            }}
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Link>
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <IconButton
                            sx={{
                                fontSize:'1.5rem',
                                borderRadius:'50%',
                                overflow:'visible',
                                color: 'white',
                                transition:'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                padding:'4.8px'
                            }}
                            >
                                <XIcon />
                            </IconButton>
                        </Link>
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <IconButton
                            sx={{
                                fontSize:'1.5rem',
                                borderRadius:'50%',
                                overflow:'visible',
                                color: 'white',
                                transition:'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                padding:'4.8px'
                            }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                        <Link href="#" sx={{
                            color:'rgb(89, 115, 254)',
                            textDecoration:'none'
                        }}>
                            <IconButton
                            sx={{
                                fontSize:'1.5rem',
                                borderRadius:'50%',
                                overflow:'visible',
                                color: 'white',
                                transition:'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                padding:'4.8px'
                            }}
                            >
                                <img alt="bell" src="/img/DiscordLogo.svg" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />
                            </IconButton>
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};
