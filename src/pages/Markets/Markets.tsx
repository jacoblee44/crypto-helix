import React, {useState} from 'react';
import './Markets.css'
import LeadHeader from "../../components/LeadHeader/LeadHeader";
import LeadFooter from "../../components/LeadFooter/LeadFooter";
import { Container, Stack, Grid, Typography, Paper, Avatar, Divider, FormControl, InputLabel, OutlinedInput, Select, MenuItem } from '@mui/material';
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import RadioButtonUncheckedIcon  from '@mui/icons-material/RadioButtonUnchecked';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@mui/material/Tooltip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TuneIcon from '@mui/icons-material/Tune';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Link from '@mui/material/Link';
import CopyAddress from '../../components/CopyAddress/CopyAddress';
import Filters from '../../components/Filters/Filters';

const theme = createTheme({})

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    icon: {
        fill: 'white'
    }
}));
const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
        "& $notchedOutline": {
            borderColor: 'rgb(45, 45, 61)'
        },
        "&:hover $notchedOutline": {
            borderColor: 'rgb(45, 45, 61)'
        },
        "&$focused $notchedOutline": {
            borderColor: 'rgb(45, 45, 61)'
        }
    },
    focused: {},
    notchedOutline: {}
    
}));
function createData(
    id: string,
    netPNL: string,
    roi: string,
    average: number,
    tradeSize: string,
    position: number,
    streak: number,
    win: string,
    closed: number
) {
    return { id, netPNL, roi, average, tradeSize, position, streak, win, closed };
}

export default function Markets() {
    const classes = useStyles();
    const outlinedInputClasses = useOutlinedInputStyles();

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState('30d');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isCopyAddress, setCopyAddress] = useState(false)
    const [isFilter, setFilter] = useState(false)

    const handleFilterAddress = () => {
        setFilter(true);
    }

    const handleFilterClose = () => {
        setFilter(false)
    }

    const handleCopyAddress = () => {
        setCopyAddress(true);
    }

    const handleCopyClose = () => {
        setCopyAddress(false)
    }
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const handleMouseEnter = () => {
        setIsHovered(true)
    };
  
    const handleMouseLeave = () => {
        setIsHovered(false)
    };
    const handleMouseEnter1 = () => {
        setIsHovered1(true)
    };
  
    const handleMouseLeave1 = () => {
        setIsHovered1(false)
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true)
    };
  
    const handleMouseLeave2 = () => {
        setIsHovered2(false)
    };

    const handleClick = () => {
        if(isOpen) {
            setOpen(false)
        }
        else {
            setOpen(true)
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
                            <Grid item xs={12}>
                                <Stack direction="column" sx={{marginBottom: '16px'}}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{marginBottom: '8px'}}>
                                        <Stack direction="row" alignItems="center">
                                            <Typography
                                                sx={{
                                                    lingHeight: '1.5',
                                                    fontFamily: 'Sora, sans-serif',
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap',
                                                    fontSize: {sm: '16px', md: '20px'}
                                                }}
                                            >
                                                Recently Open Positions
                                            </Typography>
                                        </Stack>
                                        <Button sx={{
                                            textTransform: 'capitalize',
                                            fontFamily: 'Sora, sans-serif',
                                            padding: '6px 8px',
                                            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                            borderRadius: '4px',
                                            height: '40px',
                                            fontSize: '14px',
                                            color: 'rgb(89, 115, 254)',
                                            fontWeight: '400',
                                            minWidth: '64px'
                                        }}>View All</Button>
                                    </Stack>
                                    <Grid container spacing={3} sx={{width: {xs: 'calc(100% + 24px)'}, marginTop: {xs: '-24px'}, marginLeft: {xs: '-24px'}}}>
                                        <Grid item xs={12} md={6} xl={4} sx={{
                                            paddingLeft: {xs: '24px'},
                                            paddingTop: {xs: '24px'},
                                            flexBasis: {xl: '33.3%', md: '50%',sm: '50%', xs: '100%'},
                                            maxWidth: {xl: '33.3%', md: '50%',sm: '50%', xs: '100%'}, 
                                            flexGrow: 0
                                        }}>
                                            <Paper
                                                sx={{
                                                    color: 'rgb(255, 255, 255)',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    zIndex: '0',
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    background: 'radial-gradient(122.31% 120.18% at 102.04% -6.86%, rgb(32, 66, 47) 0%, rgb(35, 40, 61) 100%)',
                                                    height: '100%'
                                                }}
                                            >
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Stack direction="row" alignItems="center" columnGap="4px">
                                                        <Avatar alt="WBTC" src="/img/WBTC.svg" sx={{width: '48px', height: '48px', marginTop: '4px', zIndex: 10}} />
                                                        <Stack direction="column">
                                                            <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, cursor: 'pointer', zIndex: 10}}>WBTC-LONG</Typography>
                                                            <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, cursor: 'pointer', zIndex: 10, color: 'rgb(160, 163, 196)'}}>By: clare-falcon-29c5</Typography>
                                                        </Stack>
                                                    </Stack>
                                                    <Stack direction="column" justifyContent="space-between">
                                                        <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, margin: '8px 0px 0px', color: 'rgb(160, 163, 196)', textAlign: 'right'}}>Opened</Typography>
                                                        <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, textAlign: 'right'}}>52 Mins, 11 Secs ago</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Grid container
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    sx={{
                                                        width: '100%',
                                                        marginTop: '8px',
                                                        borderTop: '0px solid rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '8px'
                                                    }}
                                                >
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="flex-start" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Leverage</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>10.00X</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trade Size</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>$9.96</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trader ROI</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: 'rgb(255, 62, 51)'}}>-90.67%</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderTop: '0px rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '0px'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trader Win Rate</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>66.67%</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={8} sm={12} sx={{
                                                        flexBasis: '100%',
                                                        maxWidth: '100%',
                                                        flexGrow: 0,
                                                        margin: '8px 0px 0px',
                                                        flexDirection: 'row',
                                                        borderTop: '0px rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '0px',
                                                        display: isHovered? 'flex': 'none',
                                                        position: 'absolute',
                                                        top: '-10px',
                                                        left: '0px',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                        zIndex: 1,
                                                        cursor: 'default',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    
                                                    }}>
                                                        <Button sx={{
                                                            textTransform: 'capitalize',
                                                            fontFamily: 'Sora, sans-serif',
                                                            padding: '6px 16px',
                                                            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                            borderRadius: '4px',
                                                            height: '40px',
                                                            fontSize: '16px',
                                                            color: 'white',
                                                            fontWeight: '600',
                                                            maxWidth: '275px',
                                                            backgroundColor: 'rgb(89,115,254)',
                                                            boxShadow: 'rgba(86, 85, 108, 0.2) 0px 3px 1px -2px, rgba(86, 85, 108, 0.14) 0px 2px 2px 0px, rgba(86, 85, 108, 0.12) 0px 1px 5px 0px',
                                                            width: '100%',
                                                            minWidth: '64px',
                                                            margin: '64px 0px 0px',
                                                            '&:hover': {
                                                                backgroundColor: 'rgb(89,115,254)'
                                                            }
                                                        }}>Copy Trader and Position</Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12} md={6} xl={4} sx={{
                                            paddingLeft: {xs: '24px'},
                                            paddingTop: {xs: '24px'},
                                            flexBasis: {xl: '33.3%', md: '50%',sm: '50%', xs: '100%'},
                                            maxWidth: {xl: '33.3%', md: '50%',sm: '50%', xs: '100%'}, 
                                            flexGrow: 0
                                        }}>
                                            <Paper
                                                sx={{
                                                    color: 'rgb(255, 255, 255)',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    zIndex: '0',
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    background: 'radial-gradient(122.31% 120.18% at 102.04% -6.86%, rgb(32, 66, 47) 0%, rgb(35, 40, 61) 100%)',
                                                    height: '100%'
                                                }}
                                            >
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Stack direction="row" alignItems="center" columnGap="4px">
                                                        <Avatar alt="WBTC" src="/img/WBTC.svg" sx={{width: '48px', height: '48px', marginTop: '4px', zIndex: 10}} />
                                                        <Stack direction="column">
                                                            <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, cursor: 'pointer', zIndex: 10}}>WBTC-LONG</Typography>
                                                            <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, cursor: 'pointer', zIndex: 10, color: 'rgb(160, 163, 196)'}}>By: clare-falcon-29c5</Typography>
                                                        </Stack>
                                                    </Stack>
                                                    <Stack direction="column" justifyContent="space-between">
                                                        <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, margin: '8px 0px 0px', color: 'rgb(160, 163, 196)', textAlign: 'right'}}>Opened</Typography>
                                                        <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, textAlign: 'right'}}>52 Mins, 11 Secs ago</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Grid container
                                                    onMouseEnter={handleMouseEnter1}
                                                    onMouseLeave={handleMouseLeave1}
                                                    sx={{
                                                        width: '100%',
                                                        marginTop: '8px',
                                                        borderTop: '0px solid rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '8px'
                                                    }}
                                                >
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="flex-start" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Leverage</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>10.00X</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trade Size</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>$9.96</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trader ROI</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: 'rgb(255, 62, 51)'}}>-90.67%</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderTop: '0px rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '0px'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trader Win Rate</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>66.67%</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={8} sm={12} sx={{
                                                        flexBasis: '100%',
                                                        maxWidth: '100%',
                                                        flexGrow: 0,
                                                        margin: '8px 0px 0px',
                                                        flexDirection: 'row',
                                                        borderTop: '0px rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '0px',
                                                        display: isHovered1? 'flex': 'none',
                                                        position: 'absolute',
                                                        top: '-10px',
                                                        left: '0px',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                        zIndex: 1,
                                                        cursor: 'default',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    
                                                    }}>
                                                        <Button sx={{
                                                            textTransform: 'capitalize',
                                                            fontFamily: 'Sora, sans-serif',
                                                            padding: '6px 16px',
                                                            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                            borderRadius: '4px',
                                                            height: '40px',
                                                            fontSize: '16px',
                                                            color: 'white',
                                                            fontWeight: '600',
                                                            maxWidth: '275px',
                                                            backgroundColor: 'rgb(89,115,254)',
                                                            boxShadow: 'rgba(86, 85, 108, 0.2) 0px 3px 1px -2px, rgba(86, 85, 108, 0.14) 0px 2px 2px 0px, rgba(86, 85, 108, 0.12) 0px 1px 5px 0px',
                                                            width: '100%',
                                                            minWidth: '64px',
                                                            margin: '64px 0px 0px',
                                                            '&:hover': {
                                                                backgroundColor: 'rgb(89,115,254)'
                                                            }
                                                        }}>Copy Trader and Position</Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12} md={6} xl={4} sx={{
                                            paddingLeft: {xs: '24px'},
                                            paddingTop: {xs: '24px'},
                                            flexBasis: {xl: '33.3%', md: '50%',sm: '50%', xs: '100%'},
                                            maxWidth: {xl: '33.3%', md: '50%',sm: '50%', xs: '100%'}, 
                                            flexGrow: 0
                                        }}>
                                            <Paper
                                                sx={{
                                                    color: 'rgb(255, 255, 255)',
                                                    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    zIndex: '0',
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    background: 'radial-gradient(122.31% 120.18% at 102.04% -6.86%, rgb(32, 66, 47) 0%, rgb(35, 40, 61) 100%)',
                                                    height: '100%'
                                                }}
                                            >
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Stack direction="row" alignItems="center" columnGap="4px">
                                                        <Avatar alt="WBTC" src="/img/WBTC.svg" sx={{width: '48px', height: '48px', marginTop: '4px', zIndex: 10}} />
                                                        <Stack direction="column">
                                                            <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '20px', fontWeight: 600, cursor: 'pointer', zIndex: 10}}>WBTC-LONG</Typography>
                                                            <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, cursor: 'pointer', zIndex: 10, color: 'rgb(160, 163, 196)'}}>By: clare-falcon-29c5</Typography>
                                                        </Stack>
                                                    </Stack>
                                                    <Stack direction="column" justifyContent="space-between">
                                                        <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, margin: '8px 0px 0px', color: 'rgb(160, 163, 196)', textAlign: 'right'}}>Opened</Typography>
                                                        <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, textAlign: 'right'}}>52 Mins, 11 Secs ago</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Grid container
                                                    onMouseEnter={handleMouseEnter2}
                                                    onMouseLeave={handleMouseLeave2}
                                                    sx={{
                                                        width: '100%',
                                                        marginTop: '8px',
                                                        borderTop: '0px solid rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '8px'
                                                    }}
                                                >
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="flex-start" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Leverage</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>10.00X</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trade Size</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>$9.96</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                                                        borderTopColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trader ROI</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600, color: 'rgb(255, 62, 51)'}}>-90.67%</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={4} sm={3} sx={{
                                                        flexBasis: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        maxWidth: {xs: '33%', sm: '25%', md: '25%', xl: '25%'},
                                                        flexGrow: 0,
                                                        borderTop: '0px rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '0px'
                                                    }}>
                                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                                            <Stack direction="column">
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(160, 163, 196)'}}>Trader Win Rate</Typography>
                                                                <Typography sx={{lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontSize: '14px', fontWeight: 600}}>66.67%</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={8} sm={12} sx={{
                                                        flexBasis: '100%',
                                                        maxWidth: '100%',
                                                        flexGrow: 0,
                                                        margin: '8px 0px 0px',
                                                        flexDirection: 'row',
                                                        borderTop: '0px rgba(255, 255, 255, 0.12)',
                                                        borderRightColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderBottomColor: 'rgba(255, 255, 255, 0.12)',
                                                        borderLeftColor: 'rgba(255, 255, 255, 0.12)',
                                                        paddingTop: '0px',
                                                        display: isHovered2? 'flex': 'none',
                                                        position: 'absolute',
                                                        top: '-10px',
                                                        left: '0px',
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                        zIndex: 1,
                                                        cursor: 'default',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    
                                                    }}>
                                                        <Button sx={{
                                                            textTransform: 'capitalize',
                                                            fontFamily: 'Sora, sans-serif',
                                                            padding: '6px 16px',
                                                            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                            borderRadius: '4px',
                                                            height: '40px',
                                                            fontSize: '16px',
                                                            color: 'white',
                                                            fontWeight: '600',
                                                            maxWidth: '275px',
                                                            backgroundColor: 'rgb(89,115,254)',
                                                            boxShadow: 'rgba(86, 85, 108, 0.2) 0px 3px 1px -2px, rgba(86, 85, 108, 0.14) 0px 2px 2px 0px, rgba(86, 85, 108, 0.12) 0px 1px 5px 0px',
                                                            width: '100%',
                                                            minWidth: '64px',
                                                            margin: '64px 0px 0px',
                                                            '&:hover': {
                                                                backgroundColor: 'rgb(89,115,254)'
                                                            }
                                                        }}>Copy Trader and Position</Button>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{width: {xs:'0%', sm:'102.5%'}, borderTop: '1px solid rgb(45,45,61)', position: 'relative', left: '-22px', borderRightColor: 'rgb(45,45,61)', borderBottomColor: 'rgb(45,45,61)', borderLeftColor: 'rgb(45,45,61)'}}></Box>
                                <Stack direction="column" sx={{flexDirection: {md: 'row', xs: 'column'}, alignItems: {md:'center'}, width: '100%'}} justifyContent="space-between">
                                    <Stack direction="row" columnGap="24px" alignItems="center">
                                        <Stack direction="row" alignItems="center" width="100%">
                                            <Typography
                                                sx={{
                                                    lingHeight: '1.5',
                                                    fontFamily: 'Sora, sans-serif',
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap',
                                                    fontSize: {sm: '16px', md: '20px'}
                                                }}
                                            >
                                                Top Traders
                                            </Typography>
                                        </Stack>
                                        <Divider orientation='vertical' sx={{flexShrink: 0, borderWidth: '0px thin 0px 0px', borderStyle: 'solid', borderColor: 'rgb(45,45,61)', height: {sm:'55px', xs:'0px'}}}></Divider>
                                        <Stack direction="column"></Stack>
                                    </Stack>
                                    <Stack direction="column" alignItems="center" sx={{
                                        flexDirection: {sm: 'row'}
                                    }}>
                                        <Stack direction="column" alignItems="center" sx={{
                                            flexDirection: {sm: 'row', xs: 'column'}
                                        }}>
                                            <Stack direction="column" sx={{
                                                flexDirection: {xs: 'row'}
                                            }}>
                                                <Button
                                                    variant='outlined'
                                                    sx={{
                                                        height: {sm: '36px', xs: '38px'},
                                                        fontSize: {sm: '14px', xs: '12px'},
                                                        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                                        outline: '0px',
                                                        textDecoration: 'none',
                                                        verticalAlign: 'middle',
                                                        boxSizing: 'border-box',
                                                        userSelect: 'none',
                                                        cursor: 'pointer',
                                                        border: '1px solid rgb(45, 45, 61)',
                                                        color: 'rgb(160, 163, 196)',
                                                        backgroundColor: 'rgb(16, 20, 35)',
                                                        padding: '12px 20px 12px 12px',
                                                        borderRadius: '40px',
                                                        flexDirection: 'row-reverse',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                                            border: '1px solid rgb(45, 45, 61)'
                                                        }
                                                    }}
                                                    onClick={handleClick}
                                                >
                                                    {isOpen? <CancelIcon /> : <RadioButtonUncheckedIcon/>}
                                                    <Chip
                                                        sx={{
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            paddingLeft: '12px',
                                                            paddingRight: '12px',
                                                            whiteSpace: 'nowrap',
                                                            cursor: 'pointer',
                                                            userSelect: 'none',
                                                            color: 'rgb(160,163,196)'
                                                        }}
                                                        label="Open Positions"
                                                    />
                                                </Button>
                                                <FormControl variant="outlined" size="small" sx={{margin: '0px 0px 0px 8px', verticalAlign: 'top', minWidth: '120px'}}>
                                                    <InputLabel id="demo-select-small-label"></InputLabel>
                                                    <Select
                                                        labelId="demo-select-small-label"
                                                        id="demo-select-small"
                                                        value={selectedValue}
                                                        variant='outlined'
                                                        onChange={(e) => {handleChange(e)}}
                                                        inputProps={{
                                                            classes: {
                                                                icon: classes.icon
                                                            }
                                                        }}
                                                        input={<OutlinedInput classes={outlinedInputClasses}/>}
                                                        sx={{
                                                            lineHeight: '1.4375em',
                                                            fontFamily: 'Sora, sans-serif',
                                                            fontWeight: 400,
                                                            color: 'rgb(255, 255, 255)',
                                                            boxSizing: 'border-box',
                                                            cursor: 'text',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            position: 'relative',
                                                            borderRadius: '20px',
                                                            fontSize: '14px',
                                                            backgroundColor: 'rgb(16, 20, 35)'
                                                        }}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                style: {
                                                                    backgroundColor: 'rgb(16, 20, 35)',
                                                                    color: 'white',
                                                                    boxShadow: 'rgba(86, 85, 108, 0.24) 0px 0px 2px 0px, rgba(86, 85, 108, 0.24) -20px 20px 40px -4px'
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        <MenuItem value={'7d'} sx={{fontSize: '14px', fontFamily: 'Sora, sans-serif', fontWeight:400}}>7 Days</MenuItem>
                                                        <MenuItem value={'30d'}sx={{fontSize: '14px', fontFamily: 'Sora, sans-serif', fontWeight:400}}>30 Days</MenuItem>
                                                        <MenuItem value={'60d'}sx={{fontSize: '14px', fontFamily: 'Sora, sans-serif', fontWeight:400}}>60 Days</MenuItem>
                                                        <MenuItem value={'90d'}sx={{fontSize: '14px', fontFamily: 'Sora, sans-serif', fontWeight:400}}>90 Days</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Stack>
                                            <Stack direction="row" sx={{margin: {sm:'0px 0px 0px 8px', xs: '8px 0px 0px'}}}>
                                                <Button variant='outlined' endIcon={<ContentCopyIcon/>} sx={{backgroundColor: 'rgb(16, 20, 35)',color: 'white',borderColor: 'rgb(45, 45, 61)', textTransform: 'none'}} onClick={handleCopyAddress}>Copy By Address</Button>
                                                <Stack direction="row" sx={{margin: {sm:'0px 0px 0px 8px', xs: '8px 0px 0px'}}}>
                                                    <Button variant='outlined' endIcon={<TuneIcon/>} sx={{backgroundColor: 'rgb(16, 20, 35)',color: 'rgb(195, 194, 212)',borderColor: 'rgb(45, 45, 61)', fontSize: '14px', textTransform: 'none'}} onClick={handleFilterAddress}>Filters</Button>
                                                </Stack>
                                            </Stack>
                                            <div style={{margin: '0px 0px 0px 8px'}}>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        height: '42px',
                                                        width: '42px',
                                                        marginLeft: '10px',
                                                        backgroundColor: 'rgb(28, 35, 61)',
                                                        borderRadius: '18px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', 'background': 'non', opacity: 1, border: '0px, margin: 0px', padding: '0px', position: 'relative', maxWidth: '100%'}}>
                                                        
                                                        <img alt="bell" src="/img/bookmark.png" decoding="async" data-nimg="intrinsic" style={{inset: '0px', boxSizing: 'border-box',padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '30px', height: '30px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />

                                                    </span>
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>
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
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'white'}}>ROI%</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'white'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Average Leverage</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Average Trade Size</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Average Trades in a Position</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Streak</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Win %</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            <Box>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.875rem', color: 'rgb(160,163,196)'}}>Closed positions</Typography>
                                                                <Typography sx={{fontFamily: 'Sora, sans-serif', fontWeight:400, fontSize: '0.75rem', color: 'rgb(160,163,196)'}}>(30 days)</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ borderBottom: '1px solid rgb(45,45,61)'}}>
                                                            
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
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
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>
            <LeadFooter />
            <CopyAddress open={isCopyAddress} isClose={handleCopyClose} />
            <Filters open={isFilter} isClose={handleFilterClose} />
        </div>
    );
};
