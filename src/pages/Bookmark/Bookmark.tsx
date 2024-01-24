import React, {useState} from 'react';
import LeadHeader from "../../components/LeadHeader/LeadHeader";
import LeadFooter from "../../components/LeadFooter/LeadFooter";
import { Container, Stack, Grid, Typography, Paper, Avatar, Divider, FormControl, InputLabel, OutlinedInput, Select, MenuItem } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function Markets() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [activeList, setActive] = useState([])
    const [traderList, setTrader] = useState([])
    const [isFavourite, setFavourite] = useState(true)
    const [isAnalyze, setAnalyze] = useState(true)
    const [isLoser, setLoser] = useState(true)
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    
    const handleFavourite = () => {
        if(isFavourite) {
            setFavourite(false)
        }
        else {
            setFavourite(true)
        }
    }

    const handleAnalyze = () => {
        if(isAnalyze) {
            setAnalyze(false)
        }
        else {
            setAnalyze(true)
        }
    }

    const handleLoser = () => {
        if(isLoser) {
            setLoser(false)
        }
        else {
            setLoser(true)
        }
    }

    return (
        <div>
            <LeadHeader isDash={false} />
            
            <Box sx={{
                flexGrow: 1,
                padding: '65.6px 0px 0px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Container maxWidth={false}>
                    <Stack direction="column" sx={{paddingBottom: '32px', paddingTop: '20px'}}>
                        <Grid container >
                            <Grid item xs={12}>
                                <Stack direction="row" sx={{marginBottom: '8px'}}>
                                    <Stack direction="row" justifyContent="flex-start" width="auto">
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
                            </Grid>
                            <Stack direction="column" marginBottom={4} width="100%">
                                <Stack direction="column" rowGap={2}>
                                    <Stack direction="column" overflow="auto" maxWidth="100vw">
                                        <Stack direction="column" rowGap={1}>
                                            <Stack direction="column">
                                                <Paper sx={{
                                                    backgroundColor: 'rgb(16,20,35)',
                                                    color: 'white',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    boxShadow: 'none',
                                                    backgroundImage: 'none',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    borderRadius: '8px',
                                                    zIndex: 0,
                                                    padding: '24px'
                                                }}>
                                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                        <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'18px', fontWeight:600}}>favourites (0)</Typography>
                                                        <Stack direction="row" alignItems="center" columnGap={1}>
                                                            <IconButton sx={{
                                                                fontSize: '1.5rem',
                                                                padding: '8px',
                                                                borderRadius: '50%',
                                                                overflow: 'visible',
                                                                color: 'rgb(255, 255, 255)',
                                                                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                                                            }}>
                                                                <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                        
                                                                    <img alt="bell" src="/img/delete_icon.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />

                                                                </span>
                                                            </IconButton>
                                                            <Button sx={{
                                                                fontWeight: 400,
                                                                lineHeight: 2,
                                                                textTransform: 'capitalize',
                                                                fontFamily: 'Sora, sans-serif',
                                                                padding: '6px 8px',
                                                                height: '40px',
                                                                fontSize: '14px',
                                                                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                color: 'white',
                                                                border: '0.5px solid rgb(45, 45, 61)',
                                                                background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)',
                                                                borderRadius: '4px',
                                                                minWidth: '170px'
                                                            }}>
                                                                Remove From Table
                                                            </Button>
                                                            <IconButton sx={{
                                                                fontSize: '1.5rem',
                                                                padding: '8px',
                                                                borderRadius: '50%',
                                                                overflow: 'visible',
                                                                color: 'rgb(255, 255, 255)',
                                                                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                            }}
                                                            onClick={handleFavourite}>
                                                                {isFavourite? <KeyboardArrowDownIcon sx={{width: '1em', height: '1em', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', fontSize: '1.5rem',  transform: 'scale(1.5)', color: 'rgb(160, 163, 196)'}}/>:
                                                                <KeyboardArrowUpIcon sx={{width: '1em', height: '1em', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', fontSize: '1.5rem',  transform: 'scale(1.5)', color: 'rgb(89, 115, 254)'}}/>}
                                                                
                                                            </IconButton>
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                                {isFavourite?"":
                                                    <Box>
                                                        <TableContainer sx={{
                                                                width: '100%',
                                                                borderTop: '1px solid rgb(45,45,61)',
                                                                position: 'relative',
                                                                left: '0px',
                                                                borderRightColor: 'rgb(45,45,61)',
                                                                borderLeftColor: 'rgb(45,45,61)',
                                                                borderBottomColor: 'rgb(45,45,61)',
                                                                maxHeight: '1200px'
                                                            }}>
                                                                <Table>
                                                                    <colgroup>
                                                                        <col width="15" />
                                                                        <col width="10%"/>
                                                                        <col width="10%"/>
                                                                        <col width="10%"/>
                                                                        <col width="30%"/>
                                                                    </colgroup>
                                                                    <TableHead sx={{backgroundColor: 'rgb(11,14,24)', zIndex:12, left:'-25px', paddingTop: '10px', paddingBottom: '10px', padding: '16px'}}>
                                                                        <TableRow>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Trader</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Net PNL</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>ROI%</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Win %</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}></TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        {activeList.length == 0? 
                                                                            <TableRow>
                                                                                <TableCell align='left' colSpan={12} sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: '14px 24px 14px 24px', fontWeight:'400'}}>
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
                                                                                            }}>No active copied traders.</Typography>
                                                                                            <Typography marginTop={1} sx={{fontSize:'0.75rem', fontFamily:'Sora, sans-serif', fontWeight:'400', textAlign:'center'}}>Copy a trader to see your PNL grow</Typography>
                                                                                        </Stack>
                                                                                    </Stack>
                                                                                </TableCell>
                                                                            </TableRow>:activeList.map((item, index) => (
                                                                            <TableRow>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 24px 14px 0px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Stack direction="row" alignItems="center" sx={{cursor: 'pointer', columnGap: '16px'}}>
                                                                                            <Stack direction="row" alignItems="center">
                                                                                                <Box sx={{flexShrink: '0', visibility: 'hidden'}}>
                                                                                                    
                                                                                                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                                                                        
                                                                                                        <img alt="bell" src="/img/bookmark.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', transform:'rotate(-90deg)'}} />

                                                                                                    </span>
                                                                                                </Box>
                                                                                            </Stack>
                                                                                            <div className="main-svg">
                                                                                                <svg x="0" y="0" width="36" height="36">
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <Stack direction="column">
                                                                                                <Stack direction="row" columnGap="8px" alignItems="center" width="auto">
                                                                                                    <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'16px', fontWeight:400}}>didi-toucan-f56e</Typography>
                                                                                                </Stack>
                                                                                                <Stack direction="row" columnGap="8px" alignItems="center" sx={{gap:'8px'}}>
                                                                                                    <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400}}>0xb...7cd23</Typography>
                                                                                                </Stack>
                                                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400, color: 'rgb(195,194,212)'}}>11 Days, 11 Hours ago</Typography>
                                                                                            </Stack>
                                                                                        </Stack>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+$504.60</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+4978.78%</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>43.24</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>$10.14</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>1</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>1</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>100.00%</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Stack direction="row" alignItems="center" justifyContent="flex-end" color="rgb(160,163,196)">
                                                                                            <Stack direction="column">
                                                                                            <Button
                                                                                                variant='outlined'
                                                                                                sx={{
                                                                                                    height: '40px',
                                                                                                    fontSize: '14px',
                                                                                                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                                                    outline: '0px',
                                                                                                    textDecoration: 'none',
                                                                                                    verticalAlign: 'middle',
                                                                                                    boxSizing: 'border-box',
                                                                                                    userSelect: 'none',
                                                                                                    cursor: 'pointer',
                                                                                                    border: '0.5px solid rgb(102, 102, 128)',
                                                                                                    color: 'white',
                                                                                                    background: 'linear-gradient(135deg, rgb(37, 42, 64) 0.23%, rgb(22, 25, 38) 100%)',
                                                                                                    padding: '6px 8px',
                                                                                                    borderRadius: '4px',
                                                                                                    textTransform:'capitalize',
                                                                                                    width:'140px',
                                                                                                    fontFamily: 'Sora, sans-serif',
                                                                                                    zIndex: 0,
                                                                                                    '&:hover': {
                                                                                                        backgroundColor: 'rgb(89, 115, 254)',
                                                                                                        border: 'rgb(89, 115, 254)'
                                                                                                    }
                                                                                                }}
                                                                                            >
                                                                                                Copy Trader
                                                                                            </Button>
                                                                                            </Stack>
                                                                                        </Stack>
                                                                                    </Link>
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        ))}
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                    </Box>
                                                }
                                            </Stack>
                                            <Stack direction="column">
                                                <Paper sx={{
                                                    backgroundColor: 'rgb(16,20,35)',
                                                    color: 'white',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    boxShadow: 'none',
                                                    backgroundImage: 'none',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    borderRadius: '8px',
                                                    zIndex: 0,
                                                    padding: '24px'
                                                }}>
                                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                        <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'18px', fontWeight:600}}>analyzed (0)</Typography>
                                                        <Stack direction="row" alignItems="center" columnGap={1}>
                                                            <IconButton sx={{
                                                                fontSize: '1.5rem',
                                                                padding: '8px',
                                                                borderRadius: '50%',
                                                                overflow: 'visible',
                                                                color: 'rgb(255, 255, 255)',
                                                                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                                                            }}>
                                                                <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                        
                                                                    <img alt="bell" src="/img/delete_icon.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />

                                                                </span>
                                                            </IconButton>
                                                            <Button sx={{
                                                                fontWeight: 400,
                                                                lineHeight: 2,
                                                                textTransform: 'capitalize',
                                                                fontFamily: 'Sora, sans-serif',
                                                                padding: '6px 8px',
                                                                height: '40px',
                                                                fontSize: '14px',
                                                                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                color: 'white',
                                                                border: '0.5px solid rgb(45, 45, 61)',
                                                                background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)',
                                                                borderRadius: '4px',
                                                                minWidth: '170px'
                                                            }}>
                                                                Remove From Table
                                                            </Button>
                                                            <IconButton sx={{
                                                                fontSize: '1.5rem',
                                                                padding: '8px',
                                                                borderRadius: '50%',
                                                                overflow: 'visible',
                                                                color: 'rgb(255, 255, 255)',
                                                                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                            }}
                                                            onClick={handleAnalyze}>
                                                                {isAnalyze? <KeyboardArrowDownIcon sx={{width: '1em', height: '1em', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', fontSize: '1.5rem',  transform: 'scale(1.5)', color: 'rgb(160, 163, 196)'}}/>:
                                                                <KeyboardArrowUpIcon sx={{width: '1em', height: '1em', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', fontSize: '1.5rem',  transform: 'scale(1.5)', color: 'rgb(89, 115, 254)'}}/>}
                                                                
                                                            </IconButton>
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                                {isAnalyze?"":
                                                    <Box>
                                                        <TableContainer sx={{
                                                                width: '100%',
                                                                borderTop: '1px solid rgb(45,45,61)',
                                                                position: 'relative',
                                                                left: '0px',
                                                                borderRightColor: 'rgb(45,45,61)',
                                                                borderLeftColor: 'rgb(45,45,61)',
                                                                borderBottomColor: 'rgb(45,45,61)',
                                                                maxHeight: '1200px'
                                                            }}>
                                                                <Table>
                                                                    <colgroup>
                                                                        <col width="15" />
                                                                        <col width="10%"/>
                                                                        <col width="10%"/>
                                                                        <col width="10%"/>
                                                                        <col width="30%"/>
                                                                    </colgroup>
                                                                    <TableHead sx={{backgroundColor: 'rgb(11,14,24)', zIndex:12, left:'-25px', paddingTop: '10px', paddingBottom: '10px', padding: '16px'}}>
                                                                        <TableRow>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Trader</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Net PNL</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>ROI%</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Win %</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}></TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        {activeList.length == 0? 
                                                                            <TableRow>
                                                                                <TableCell align='left' colSpan={12} sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: '14px 24px 14px 24px', fontWeight:'400'}}>
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
                                                                                            }}>No active copied traders.</Typography>
                                                                                            <Typography marginTop={1} sx={{fontSize:'0.75rem', fontFamily:'Sora, sans-serif', fontWeight:'400', textAlign:'center'}}>Copy a trader to see your PNL grow</Typography>
                                                                                        </Stack>
                                                                                    </Stack>
                                                                                </TableCell>
                                                                            </TableRow>:activeList.map((item, index) => (
                                                                            <TableRow>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 24px 14px 0px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Stack direction="row" alignItems="center" sx={{cursor: 'pointer', columnGap: '16px'}}>
                                                                                            <Stack direction="row" alignItems="center">
                                                                                                <Box sx={{flexShrink: '0', visibility: 'hidden'}}>
                                                                                                    
                                                                                                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                                                                        
                                                                                                        <img alt="bell" src="/img/bookmark.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', transform:'rotate(-90deg)'}} />

                                                                                                    </span>
                                                                                                </Box>
                                                                                            </Stack>
                                                                                            <div className="main-svg">
                                                                                                <svg x="0" y="0" width="36" height="36">
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <Stack direction="column">
                                                                                                <Stack direction="row" columnGap="8px" alignItems="center" width="auto">
                                                                                                    <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'16px', fontWeight:400}}>didi-toucan-f56e</Typography>
                                                                                                </Stack>
                                                                                                <Stack direction="row" columnGap="8px" alignItems="center" sx={{gap:'8px'}}>
                                                                                                    <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400}}>0xb...7cd23</Typography>
                                                                                                </Stack>
                                                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400, color: 'rgb(195,194,212)'}}>11 Days, 11 Hours ago</Typography>
                                                                                            </Stack>
                                                                                        </Stack>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+$504.60</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+4978.78%</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>43.24</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>$10.14</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>1</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>1</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>100.00%</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Stack direction="row" alignItems="center" justifyContent="flex-end" color="rgb(160,163,196)">
                                                                                            <Stack direction="column">
                                                                                            <Button
                                                                                                variant='outlined'
                                                                                                sx={{
                                                                                                    height: '40px',
                                                                                                    fontSize: '14px',
                                                                                                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                                                    outline: '0px',
                                                                                                    textDecoration: 'none',
                                                                                                    verticalAlign: 'middle',
                                                                                                    boxSizing: 'border-box',
                                                                                                    userSelect: 'none',
                                                                                                    cursor: 'pointer',
                                                                                                    border: '0.5px solid rgb(102, 102, 128)',
                                                                                                    color: 'white',
                                                                                                    background: 'linear-gradient(135deg, rgb(37, 42, 64) 0.23%, rgb(22, 25, 38) 100%)',
                                                                                                    padding: '6px 8px',
                                                                                                    borderRadius: '4px',
                                                                                                    textTransform:'capitalize',
                                                                                                    width:'140px',
                                                                                                    fontFamily: 'Sora, sans-serif',
                                                                                                    zIndex: 0,
                                                                                                    '&:hover': {
                                                                                                        backgroundColor: 'rgb(89, 115, 254)',
                                                                                                        border: 'rgb(89, 115, 254)'
                                                                                                    }
                                                                                                }}
                                                                                            >
                                                                                                Copy Trader
                                                                                            </Button>
                                                                                            </Stack>
                                                                                        </Stack>
                                                                                    </Link>
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        ))}
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                    </Box>
                                                }
                                            </Stack>
                                            <Stack direction="column">
                                                <Paper sx={{
                                                    backgroundColor: 'rgb(16,20,35)',
                                                    color: 'white',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    boxShadow: 'none',
                                                    backgroundImage: 'none',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    borderRadius: '8px',
                                                    zIndex: 0,
                                                    padding: '24px'
                                                }}>
                                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                        <Typography sx={{fontFamily:'Sora, sans-serif', fontSize:'18px', fontWeight:600}}>losers (0)</Typography>
                                                        <Stack direction="row" alignItems="center" columnGap={1}>
                                                            <IconButton sx={{
                                                                fontSize: '1.5rem',
                                                                padding: '8px',
                                                                borderRadius: '50%',
                                                                overflow: 'visible',
                                                                color: 'rgb(255, 255, 255)',
                                                                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                                                            }}>
                                                                <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                        
                                                                    <img alt="bell" src="/img/delete_icon.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />

                                                                </span>
                                                            </IconButton>
                                                            <Button sx={{
                                                                fontWeight: 400,
                                                                lineHeight: 2,
                                                                textTransform: 'capitalize',
                                                                fontFamily: 'Sora, sans-serif',
                                                                padding: '6px 8px',
                                                                height: '40px',
                                                                fontSize: '14px',
                                                                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                color: 'white',
                                                                border: '0.5px solid rgb(45, 45, 61)',
                                                                background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)',
                                                                borderRadius: '4px',
                                                                minWidth: '170px'
                                                            }}>
                                                                Remove From Table
                                                            </Button>
                                                            <IconButton sx={{
                                                                fontSize: '1.5rem',
                                                                padding: '8px',
                                                                borderRadius: '50%',
                                                                overflow: 'visible',
                                                                color: 'rgb(255, 255, 255)',
                                                                transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                            }}
                                                            onClick={handleLoser}>
                                                                {isLoser? <KeyboardArrowDownIcon sx={{width: '1em', height: '1em', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', fontSize: '1.5rem',  transform: 'scale(1.5)', color: 'rgb(160, 163, 196)'}}/>:
                                                                <KeyboardArrowUpIcon sx={{width: '1em', height: '1em', transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', fontSize: '1.5rem',  transform: 'scale(1.5)', color: 'rgb(89, 115, 254)'}}/>}
                                                                
                                                            </IconButton>
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                                {isLoser?"":
                                                    <Box>
                                                        <TableContainer sx={{
                                                                width: '100%',
                                                                borderTop: '1px solid rgb(45,45,61)',
                                                                position: 'relative',
                                                                left: '0px',
                                                                borderRightColor: 'rgb(45,45,61)',
                                                                borderLeftColor: 'rgb(45,45,61)',
                                                                borderBottomColor: 'rgb(45,45,61)',
                                                                maxHeight: '1200px'
                                                            }}>
                                                                <Table>
                                                                    <colgroup>
                                                                        <col width="15" />
                                                                        <col width="10%"/>
                                                                        <col width="10%"/>
                                                                        <col width="10%"/>
                                                                        <col width="30%"/>
                                                                    </colgroup>
                                                                    <TableHead sx={{backgroundColor: 'rgb(11,14,24)', zIndex:12, left:'-25px', paddingTop: '10px', paddingBottom: '10px', padding: '16px'}}>
                                                                        <TableRow>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Trader</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Net PNL</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>ROI%</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                                <Box>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Win %</Typography>
                                                                                    <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                                                </Box>
                                                                            </TableCell>
                                                                            <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}></TableCell>
                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        {activeList.length == 0? 
                                                                            <TableRow>
                                                                                <TableCell align='left' colSpan={12} sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: '14px 24px 14px 24px', fontWeight:'400'}}>
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
                                                                                            }}>No active copied traders.</Typography>
                                                                                            <Typography marginTop={1} sx={{fontSize:'0.75rem', fontFamily:'Sora, sans-serif', fontWeight:'400', textAlign:'center'}}>Copy a trader to see your PNL grow</Typography>
                                                                                        </Stack>
                                                                                    </Stack>
                                                                                </TableCell>
                                                                            </TableRow>:activeList.map((item, index) => (
                                                                            <TableRow>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 24px 14px 0px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Stack direction="row" alignItems="center" sx={{cursor: 'pointer', columnGap: '16px'}}>
                                                                                            <Stack direction="row" alignItems="center">
                                                                                                <Box sx={{flexShrink: '0', visibility: 'hidden'}}>
                                                                                                    
                                                                                                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                                                                        
                                                                                                        <img alt="bell" src="/img/bookmark.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', transform:'rotate(-90deg)'}} />

                                                                                                    </span>
                                                                                                </Box>
                                                                                            </Stack>
                                                                                            <div className="main-svg">
                                                                                                <svg x="0" y="0" width="36" height="36">
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                                                    <rect x="0" y="0" width="36" height="36" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                                                </svg>
                                                                                            </div>
                                                                                            <Stack direction="column">
                                                                                                <Stack direction="row" columnGap="8px" alignItems="center" width="auto">
                                                                                                    <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'16px', fontWeight:400}}>didi-toucan-f56e</Typography>
                                                                                                </Stack>
                                                                                                <Stack direction="row" columnGap="8px" alignItems="center" sx={{gap:'8px'}}>
                                                                                                    <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400}}>0xb...7cd23</Typography>
                                                                                                </Stack>
                                                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400, color: 'rgb(195,194,212)'}}>11 Days, 11 Hours ago</Typography>
                                                                                            </Stack>
                                                                                        </Stack>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+$504.60</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+4978.78%</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>43.24</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>$10.14</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>1</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>1</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>100.00%</Typography>
                                                                                    </Link>
                                                                                </TableCell>
                                                                                <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                                                    <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                                        <Stack direction="row" alignItems="center" justifyContent="flex-end" color="rgb(160,163,196)">
                                                                                            <Stack direction="column">
                                                                                            <Button
                                                                                                variant='outlined'
                                                                                                sx={{
                                                                                                    height: '40px',
                                                                                                    fontSize: '14px',
                                                                                                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                                                    outline: '0px',
                                                                                                    textDecoration: 'none',
                                                                                                    verticalAlign: 'middle',
                                                                                                    boxSizing: 'border-box',
                                                                                                    userSelect: 'none',
                                                                                                    cursor: 'pointer',
                                                                                                    border: '0.5px solid rgb(102, 102, 128)',
                                                                                                    color: 'white',
                                                                                                    background: 'linear-gradient(135deg, rgb(37, 42, 64) 0.23%, rgb(22, 25, 38) 100%)',
                                                                                                    padding: '6px 8px',
                                                                                                    borderRadius: '4px',
                                                                                                    textTransform:'capitalize',
                                                                                                    width:'140px',
                                                                                                    fontFamily: 'Sora, sans-serif',
                                                                                                    zIndex: 0,
                                                                                                    '&:hover': {
                                                                                                        backgroundColor: 'rgb(89, 115, 254)',
                                                                                                        border: 'rgb(89, 115, 254)'
                                                                                                    }
                                                                                                }}
                                                                                            >
                                                                                                Copy Trader
                                                                                            </Button>
                                                                                            </Stack>
                                                                                        </Stack>
                                                                                    </Link>
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        ))}
                                                                    </TableBody>
                                                                </Table>
                                                            </TableContainer>
                                                    </Box>
                                                }
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Grid item xs={12}>
                                <Grid container sx={{width: 'calc(100% + 24px)', marginTop: '-24px', marginLeft: '-24px'}}>
                                    <Grid item xs={12} sx={{
                                        paddingLeft: '24px', paddingTop: '24px', width: {sm: '102.5%', xl:'105'},
                                    }}>
                                        <TableContainer sx={{
                                            width: {sm:'102.5%', xs: '105.5%'},
                                            borderTop: '1px solid rgb(45,45,61)',
                                            position: 'relative',
                                            left: '-22px',
                                            borderRightColor: 'rgb(45,45,61)',
                                            borderLeftColor: 'rgb(45,45,61)',
                                            borderBottomColor: 'rgb(45,45,61)',
                                            maxHeight: '1200px'
                                        }}>
                                            <Table>
                                                <colgroup>
                                                    <col width="22%" />
                                                    <col width="8%"/>
                                                    <col width="8"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="8"/>
                                                    <col width="8%"/>
                                                    <col width="8%"/>
                                                    <col width="8%"/>
                                                </colgroup>
                                                <TableHead sx={{backgroundColor: 'rgb(11,14,24)', zIndex:12, left:'-25px', paddingTop: '10px', paddingBottom: '10px', padding: '16px'}}>
                                                    <TableRow>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Traders</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>Last Position Closed</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Net PNL</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'white'}}>ROI%</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'white'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Average Leverage</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Average Trade Size</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Average Trades in a Position</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Streak</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Win %</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Closed positions</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(ALL Time)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {traderList.length == 0? <TableRow>
                                                        <TableCell align='left' colSpan={12} sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: '14px 24px 14px 24px', fontWeight:'400'}}>
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
                                                                    }}>No active copied traders.</Typography>
                                                                    <Typography marginTop={1} sx={{fontSize:'0.75rem', fontFamily:'Sora, sans-serif', fontWeight:'400', textAlign:'center'}}>Copy a trader to see your PNL grow</Typography>
                                                                </Stack>
                                                            </Stack>
                                                        </TableCell>
                                                    </TableRow>:
                                                    <TableRow>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 24px 14px 0px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Stack direction="row" alignItems="center" sx={{cursor: 'pointer', columnGap: '16px'}}>
                                                                    <Stack direction="row" alignItems="center">
                                                                        <Box sx={{flexShrink: '0', visibility: 'hidden'}}>
                                                                            
                                                                            <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                                                
                                                                                <img alt="bell" src="/img/bookmark.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', transform:'rotate(-90deg)'}} />

                                                                            </span>
                                                                        </Box>
                                                                    </Stack>
                                                                    <div className="main-svg">
                                                                        <svg x="0" y="0" width="36" height="36">
                                                                            <rect x="0" y="0" width="36" height="36" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                            <rect x="0" y="0" width="36" height="36" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                            <rect x="0" y="0" width="36" height="36" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                        </svg>
                                                                    </div>
                                                                    <Stack direction="column">
                                                                        <Stack direction="row" columnGap="8px" alignItems="center" width="auto">
                                                                            <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'16px', fontWeight:400}}>didi-toucan-f56e</Typography>
                                                                        </Stack>
                                                                        <Stack direction="row" columnGap="8px" alignItems="center" sx={{gap:'8px'}}>
                                                                            <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400}}>0xb...7cd23</Typography>
                                                                        </Stack>
                                                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'12px', fontWeight:400, color: 'rgb(195,194,212)'}}>11 Days, 11 Hours ago</Typography>
                                                                    </Stack>
                                                                </Stack>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+$504.60</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>+4978.78%</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>43.24</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>$10.14</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>1</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400, color: 'rgb(92, 229, 92)'}}>1</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>100.00%</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontSize:'0.875rem', fontWeight:400}}>1</Typography>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell align='left' sx={{borderBottom:'1px solid rgb(45,45,61)', borderTopColor: 'rgb(45,45,61)', borderRightColor:'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)', fontSize: '0.875rem', fontFamily:'Sora, sans-serif', color: 'white', padding: 0}}>
                                                            <Link href="#" sx={{padding: '14px 16px', display:'flex', alignItems:'center', color:'white', textDecoration:'none'}}>
                                                                <Stack direction="row" alignItems="center" justifyContent="flex-end" color="rgb(160,163,196)">
                                                                    <Stack direction="column">
                                                                    <Button
                                                                        variant='outlined'
                                                                        sx={{
                                                                            height: '40px',
                                                                            fontSize: '14px',
                                                                            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                                            outline: '0px',
                                                                            textDecoration: 'none',
                                                                            verticalAlign: 'middle',
                                                                            boxSizing: 'border-box',
                                                                            userSelect: 'none',
                                                                            cursor: 'pointer',
                                                                            border: '0.5px solid rgb(102, 102, 128)',
                                                                            color: 'white',
                                                                            background: 'linear-gradient(135deg, rgb(37, 42, 64) 0.23%, rgb(22, 25, 38) 100%)',
                                                                            padding: '6px 8px',
                                                                            borderRadius: '4px',
                                                                            textTransform:'capitalize',
                                                                            width:'140px',
                                                                            fontFamily: 'Sora, sans-serif',
                                                                            zIndex: 0,
                                                                            '&:hover': {
                                                                                backgroundColor: 'rgb(89, 115, 254)',
                                                                                border: 'rgb(89, 115, 254)'
                                                                            }
                                                                        }}
                                                                    >
                                                                        Copy Trader
                                                                    </Button>
                                                                    </Stack>
                                                                </Stack>
                                                            </Link>
                                                        </TableCell>
                                                    </TableRow>
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            rowsPerPageOptions={[10, 25, 100]}
                                            component="div"
                                            count={traderList.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            sx={{
                                                color:'rgb(160, 163, 196)',
                                                fontSize:'0.875rem',
                                                fontFamily:'Sora, sans-serif',
                                                position: 'sticky'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <LeadFooter />
        </div>
    );
};
