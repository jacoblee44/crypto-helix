import React, {useState} from 'react';
import LeadHeader from "../../components/LeadHeader/LeadHeader";
import LeadFooter from "../../components/LeadFooter/LeadFooter";
import { Container, Stack, Grid, Typography, Avatar, Divider, FormControl, InputLabel, OutlinedInput, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Link from '@mui/material/Link';

export function Badge() {
    return (
        <Box sx={{
            marginBottom: '0px',
            marginRight:'8px',
            marginLeft:'8px',
            padding:'2px 8px',
            borderRadius:'2px',
            backgroundColor:'rgb(89,115,254)',
            color:'white'
        }}>0</Box>
    )
}

export default function Dashboard() {
    
    const list = [0,1,2,3,4,5,6];
    const [activeList, setActive] = useState([])
    const [value, setValue] = React.useState('1');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div>
            <LeadHeader isDash={true}/>
            
            <Box sx={{
                flexGrow: 1,
                padding: '65.6px 0px 0px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Container maxWidth={false}>
                    <Stack direction="column" sx={{paddingBottom: '16px'}}>
                        <Stack direction="column" rowGap="32px">
                            <Stack direction="column">
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack direction="row" alignItems="center" marginBottom="16px" marginTop="8px">
                                        <Typography sx={{fontSize: {xs:'16px', sm:'20px'}, fontFamily:'Sora, sans-serif', fontWeight:600}}>My Analytics</Typography>
                                    </Stack>
                                </Stack>
                                <Paper variant='outlined' sx={{
                                    padding: {md:'48px', xs:'16px'},
                                    backgroundColor: 'rgb(16, 20, 35)',
                                    color: 'rgb(255, 255, 255)',
                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    boxShadow: 'none',
                                    backgroundImage: 'none',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    borderRadius: '8px',
                                    zIndex: '0',
                                    border: '1px solid rgb(45, 45, 61)'
                                }}>
                                    <Grid container sx={{
                                        width:'calc(100%+8px)',
                                        marginLeft:'-8px',
                                        rowGap:'32px'
                                    }}>
                                        {list.map((item, index) => (
                                            <Grid item xs={6} sm={4} lg={2}>
                                                <Paper sx={{
                                                    color: 'white',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    overflow: 'hidden',
                                                    zIndex: '0',
                                                    borderRadius: '4px',
                                                    boxShadow: 'none',
                                                    background: 'transparent',
                                                    position: 'static'
                                                }}>
                                                    <Stack direction="column" alignItems="flex-start">
                                                        <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" width="100%" columnGap="8px">
                                                            <Box zIndex="1">
                                                                <Typography sx={{
                                                                    fontSize:{sm:'14px', xs:'10px'},
                                                                    fontFamily:'Sora, sans-serif',
                                                                    color: 'rgb(160, 163, 196)',
                                                                    fontWeight: 400
                                                                }}>Invested (USDC)</Typography>
                                                            </Box>
                                                        </Stack>
                                                        <Typography sx={{
                                                            margin:'8px 0px 0px',
                                                            fontSize:{sm:'20px', xs:'16px'},
                                                            fontFamily:'Sora, sans-serif',
                                                            color: 'white',
                                                            fontWeight: 500
                                                        }}>--</Typography>
                                                    </Stack>
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </Stack>
                            <Box sx={{width:'100%', paddingBottom:'48px'}}>
                                <Stack direction="row" alignItems={'center'} marginBottom={2}>
                                    <Typography sx={{fontSize:{sm:'20px', xs:'16px'}, fontFamily:'Sora, sans-serif', fontWeight:600}}>Copied Traders</Typography>
                                </Stack>
                                <Tabs value={value} onChange={handleChange} aria-label="lab API tabs example" sx={{
                                    '& .MuiTab-root': {
                                        color: 'white',
                                        textTransform:'capitalize',
                                        fontFamily:'Sora, sans-serif'
                                    },
                                    '& .MuiTabs-indicator' : {
                                        backgroundColor: 'rgb(89,115,254)',
                                        height: '3px'
                                    },
                                    '& .Mui-selected': {
                                        color: 'rgb(89,115,254)',
                                        textTransform:'capitalize',
                                        fontFamily:'Sora, sans-serif'
                                    }
                                }}>
                                    <Tab label="Active" value="1" icon={<Badge />} iconPosition='end'/>
                                    <Tab label="Archived" value="2" icon={<Badge />} iconPosition='end'/>
                                </Tabs>
                                <Box sx={{ width: '100%'}}>
                                    <TabContext value={value}>
                                        <TabPanel value="1">
                                            <Box paddingTop={3} paddingBottom={3}>
                                                <Grid container sx={{
                                                    marginTop:'-24px',
                                                    width:'calc(100%+24px)',
                                                    marginLeft:'-24px'
                                                }}>
                                                    <Grid item xs={12}>
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
                                                                <col width="15%" />
                                                                <col width="8%"/>
                                                                <col width="8%"/>
                                                                <col width="8%"/>
                                                                <col width="8%"/>
                                                                <col width="8%"/>
                                                                <col width="8%"/>
                                                                <col width="8%"/>
                                                                <col width="10%"/>
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
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(USDC)</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Invested</Typography>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(USDC)</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Current Value</Typography>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(USDC)</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Open Positions</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Funds in Active Positions</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Max Amount Per Trade</Typography>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(USDC)</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Tradable Reserved Funds</Typography>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(USDC)</Typography>
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
                                                    <TablePagination
                                                        rowsPerPageOptions={[10, 25, 100]}
                                                        component="div"
                                                        count={20}
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
                                            </Box>
                                        </TabPanel>
                                        <TabPanel value="2">
                                        <Box paddingTop={3} paddingBottom={3}>
                                                <Grid container sx={{
                                                    marginTop:'-24px',
                                                    width:'calc(100%+24px)',
                                                    marginLeft:'-24px'
                                                }}>
                                                    <Grid item xs={12}>
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
                                                                <col width="auto" />
                                                                <col width="20%"/>
                                                                <col width="20%"/>
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
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Net PNL (USDC)</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>ROI %</Typography>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                                        <Box>
                                                                            <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Invested (USDC)</Typography>
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
                                                    <TablePagination
                                                        component="div"
                                                        count={0}
                                                        page={0}
                                                        rowsPerPage={10}
                                                        rowsPerPageOptions={[5, 10, 25]}
                                                        onPageChange={handleChangePage}
                                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                                        labelRowsPerPage="Rows per page:"
                                                        slotProps={{
                                                            select: {
                                                                inputProps: { 'aria-label': 'rows per page' },
                                                                value: 10,
                                                                input: (
                                                                <InputBase
                                                                    inputProps={{ 'aria-label': 'rows per page' }}
                                                                    sx={{ color: 'primary', fontFamily: 'Arial, sans-serif' }} // Change the font family and color here
                                                                />
                                                                ),
                                                            }
                                                        }}
                                                        ActionsComponent={({ onPageChange }) => (
                                                            <div>
                                                            <IconButton >
                                                                <KeyboardArrowLeft />
                                                            </IconButton>
                                                            <IconButton >
                                                                <KeyboardArrowRight />
                                                            </IconButton>
                                                            </div>
                                                        )}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </TabPanel>
                                    </TabContext>
                                    </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <LeadFooter />
        </div>
    );
};
