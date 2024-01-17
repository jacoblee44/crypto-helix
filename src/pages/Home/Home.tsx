import React, {useRef, useEffect, useState} from 'react';
import "tailwindcss/tailwind.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {Grid, Typography, Button, Link, Chip} from "@mui/material";
import Stack from '@mui/material/Stack';
import AddCardIcon from '@mui/icons-material/AddCard';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ReactPlayer from "react-player";

export default function Home() {
    const bodyWidth = useRef(null);
    const [isMobile, setMobile] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    const handleChipClick = () => {
        setIsSelected(!isSelected);
    };

    const chipStyle = {
        backgroundColor: isSelected ? 'rgb(37, 37, 235)' : 'rgb(45, 45, 61)',
        color: isSelected ? '#fff' : 'rgb(160, 163, 196)',
    };

    useEffect( () => {
        const resizeObserver = new ResizeObserver((entires) => {
            for (let entry of entires) {
                const {width} = entry.contentRect;
                if (width < 1200) {
                    document.getElementsByClassName("fifth-style")[0].classList.remove('flex-row');
                    document.getElementsByClassName("fifth-style")[0].classList.add('flex-col');
                    document.getElementsByClassName("fifth-thr-list")[0].classList.remove('h-full');
                    document.getElementsByClassName("fifth-thr-list")[0].classList.add('h-[550px]');
                    setMobile(true);
                }
                else {
                    document.getElementsByClassName("fifth-style")[0].classList.add('flex-row');
                    document.getElementsByClassName("fifth-style")[0].classList.remove('flex-col');
                    document.getElementsByClassName("fifth-thr-list")[0].classList.add('h-full');
                    document.getElementsByClassName("fifth-thr-list")[0].classList.remove('h-[550px]');
                    setMobile(false);
                }
            }
        });

        if (bodyWidth.current) {
            resizeObserver.observe(bodyWidth.current);
        }
        return () => {
            resizeObserver.disconnect();
        }
        
    }, [])

    return (
            <div>
                <Header />
                <div className="style-container " ref={bodyWidth}>
                    <Grid container>
                        <Stack style={{display: 'flex', flexDirection: 'column', gap: '0px', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                            <div style={{boxSizing: 'border-box', width: '100%', margin: '0px', justifyContent: 'space-evenly', alignItems: 'center', display: 'flex'}} className="home-click-layout style-body">
                                <Grid className="home-title-padding">
                                    <Stack>
                                        <Stack sx={{margin: '0px'}}>
                                            <Typography variant="h2" style={{margin: '0', fontFamily: 'Sora, sans-serif', lineHeight: '1.3', fontSize: '2.75rem', fontWeight: '100'}}>ONE CLICK</Typography>
                                            <Typography variant="h2" style={{margin: '0', fontFamily: 'Sora, sans-serif', lineHeight: '1.3', fontSize: '2.75rem', fontWeight: '800'}}>PRO TRADING.</Typography>
                                        </Stack>
                                        <Typography sx={{marginTop: '32px', lineHeight: '1.5', fontFamily: 'Sora, sans-serif', fontWeight: '400', color: 'rgb(195, 194, 212)', fontSize: '20px'}}>
                                            Alfred is a decentralized investment machine that allows you to follow the world’s best traders, and copy their trades with a single click.
                                        </Typography>
                                        <div className="btn-explore relative" style={{zIndex: '-1'}}>
                                            <span className="span-dot absolute">
                                                <img src="/img/Dot.png"/>
                                            </span>
                                        </div>
                                        <Button className="h-[40px] w-[120px] " style={{backgroundColor: 'rgb(37, 37, 235)', width: '80%', height: '48px', marginTop: '32px'}}>
                                            <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
                                                <Typography variant="h5" style={{ fontSize: '18px', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white', textTransform: 'capitalize'}} >EXPLORE TOP TRADES</Typography>
                                            </Link>
                                        </Button>
                                        <div className="btn-explore flex ">
                                            <div className="flex flex-col">
                                                <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '2rem'}}>
                                                    2K+
                                                </Typography>
                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', color: 'rgb(195,194,212)'}}>
                                                    Pro Traders
                                                </Typography>
                                            </div>
                                            <div className="flex flex-col ml-[80px]">
                                                <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '2rem'}}>
                                                    +55%
                                                </Typography>
                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', color: 'rgb(195,194,212)'}}>
                                                    Avg Weekly Profit
                                                </Typography>
                                            </div>
                                        </div>
                                    </Stack>
                                </Grid>
                                <Grid>
                                    <div className="home-carousel-layout">
                                        <div style={{width: '720px', height: '400px', backgroundColor: 'gray'}}></div>
                                    </div>
                                </Grid>
                            </div>
                            <div className="m-0 w-full flex justify-center" style={{backgroundColor: '#171722'}}>
                                <div className="max-w-[1536px] w-full relative" style={{backgroundColor: '#171722'}}>
                                    <div className="second-section second-style">
                                        <div className="sec-section-first flex flex-col">
                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', color: 'rgb(240,209,47)', background: 'linear-gradient(rgb(45,45,61), rgb(23,23,34))', width: '21%', minWidth:'120px', padding: '7px 5px', borderRadius: '4px', textAlign: 'center'}}>
                                                Introducing
                                            </Typography>
                                            <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '100', fontSize: '2.75rem', lineHeight:'1.3', margin: '8px 0px 0px'}}>
                                                Non-Custodial
                                            </Typography>
                                            <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '2.75rem', lineHeight:'1.3', margin: '8px 0px 0px'}}>
                                                Copytrading.
                                            </Typography>
                                        </div>
                                        <div className="sec-section-second flex flex-row justify-between">
                                            <div className="flex flex-row">
                                                <AddCardIcon></AddCardIcon>
                                                <div className="ml-[16px] flex flex-col">
                                                    <Typography variant="h5" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.25rem', lineHeight:'1.5'}}>
                                                        Your Keys, Your Crypto
                                                    </Typography>
                                                    <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', marginTop: '16px', color: 'rgb(195,194,212)'}}>
                                                        Alfred is 100% non-custodial, and your returns are effectively generated by you.
                                                    </Typography>
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <LeaderboardIcon />
                                                <div className="ml-[16px] flex flex-col">
                                                    <Typography variant="h5" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.25rem', lineHeight:'1.5'}}>
                                                        Mo' Money, No Problems
                                                    </Typography>
                                                    <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', marginTop: '16px', color: 'rgb(195,194,212)'}}>
                                                        Copy the world's best traders, each with a unique strategy, risk level and transparent track record.
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="thr-section thr-display">
                                <div className="w-full max-w-[1546px] relative">
                                    <div className="thr-trade">
                                        <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '2.75rem', lineHeight:'1.3', margin: '0px 0px 8px'}}>
                                            TRADE EASY
                                        </Typography>
                                        <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '100', fontSize: '2.75rem', lineHeight:'1.3', margin: '0px 0px 8px'}}>
                                            ON MOBILE
                                        </Typography>
                                        <div className="flex flex-col mt-[8px]" style={{rowGap:'24px'}}>
                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', margin: '0px', maxWidth:'500px', color: 'rgb(194,195,212)'}}>
                                                Experience copytrading like never before. We’ve brought all the powerful features of Alfred - right at your fingertips!
                                            </Typography>
                                            <button className="h-[40px] btn-thr btn-thr-style" style={{backgroundColor: 'rgb(37, 37, 235)', height: '48px', marginTop: '32px'}}>
                                                <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
                                                    <Typography variant="h5" style={{ fontSize: '18px', fontFamily: 'Sora, sans-serif', fontWeight: '700', color: 'white', textTransform: 'capitalize'}} >EXPLORE APP NOW</Typography>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <img src="/img/explore_bg.png" alt="" className="thr-img absolute"/>
                            </div>
                            <div className="w-full four-section four-style">
                                <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.875rem', lineHeight:'1.3', padding: '0px'}}>
                                    How To Start
                                </Typography>
                                <div className="four-video video-style">
                                    <ReactPlayer
                                        style={{ objectFit: 'fill', visibility: 'visible'}}
                                        url="https://firebasestorage.googleapis.com/v0/b/test-video-8e7d4.appspot.com/o/Alfred%20Quick%20Start%20Guid%20-%201.mp4?alt=media&amp;token=ed0d280f-2151-4917-911c-fcba03f4ab0b"
                                        controls={true}
                                        playing
                                        width="100%"
                                        height="100%"
                                        light="/img/startThumbnail.png"
                                    ></ReactPlayer>
                                </div>
                            </div>
                            <div className="fifth-section flex justify-center">
                                <div className="flex flew-row w-full max-w-[1536px] fifth-style">
                                    <div className="flex gap-[32px] fifth-first">
                                        <div className="fifth-sec-first flex flex-col gap-[40px]">
                                            <div className="flex flex-col">
                                                <div className="fifth-box-first">
                                                    <div className="fifth-box-title">
                                                        <div className="fifth-box-svg">
                                                            <svg x="0" y="0" width="36" height="36">
                                                                <rect x="0" y="0" width="36" height="36" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                <rect x="0" y="0" width="36" height="36" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                <rect x="0" y="0" width="36" height="36" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                            </svg>
                                                        </div>
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            0xc4b...ef56e
                                                        </Typography>
                                                    </div>
                                                    <div className="fifth-box-content">
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '15px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            ROI 30d
                                                        </Typography>
                                                        <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '35px', lineHeight:'1.5', margin: '0px'}}>
                                                            +4948.78%
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fifth-bottom">
                                                <Link href="#" target="_blank" style={{ textDecoration: 'none'}}>
                                                    <Typography style={{ fontSize: '0.875rem', fontFamily: 'Sora, sans-serif', fontWeight: '400',lineHeight:'1.5', color:'rgb(160,163,196)'}} >PNL 30d</Typography>
                                                    <Typography style={{ fontSize: '1.25rem', fontFamily: 'Sora, sans-serif', fontWeight: '700',lineHeight:'1.5', color:'rgb(75,210,161)'}} >+$504.6</Typography>
                                                </Link>
                                                <button className="fifth-btn">COPY</button>
                                            </div>
                                        </div>
                                        <div className="fifth-second flex flex-col gap-[32px]">
                                            <div className="flex flex-row gap-[24px]">
                                                <div className="flex flex-col">
                                                    <div className="fifth-box-second">
                                                        <div className="fifth-box-style">
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '10px', lineHeight:'1.5', margin: '0px'}}>
                                                                PNL 30d
                                                            </Typography>
                                                            <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '15px', lineHeight:'1.5', margin: '0px'}}>
                                                                +4948.78%
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fifth-box-thr flex flex-col w-[160px] justify-around">
                                                    <Typography style={{ fontSize: '0.875rem', fontFamily: 'Sora, sans-serif', fontWeight: '400',lineHeight:'1.5', color:'rgb(160,163,196)'}} >PNL 30d</Typography>
                                                    <Typography variant="h6" style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: '700',lineHeight:'1.5'}} >+$504.6</Typography>
                                                    <div className="fifth-sec-title">
                                                        <div className="fifth-sec-svg">
                                                            <svg x="0" y="0" width="24" height="24">
                                                                <rect x="0" y="0" width="24" height="24" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                <rect x="0" y="0" width="24" height="24" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                <rect x="0" y="0" width="24" height="24" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                            </svg>
                                                        </div>
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            0xc4b...ef56e
                                                        </Typography>
                                                    </div>
                                                    <button className="fifth-sec-btn">COPY</button>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-[24px]">
                                                <div className="flex flex-col">
                                                    <div className="fifth-box-second-1">
                                                        <div className="fifth-box-style">
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '10px', lineHeight:'1.5', margin: '0px'}}>
                                                                PNL 30d
                                                            </Typography>
                                                            <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '15px', lineHeight:'1.5', margin: '0px'}}>
                                                                +4948.78%
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fifth-box-thr flex flex-col w-[160px] justify-around">
                                                    <Typography style={{ fontSize: '0.875rem', fontFamily: 'Sora, sans-serif', fontWeight: '400',lineHeight:'1.5', color:'rgb(160,163,196)'}} >PNL 30d</Typography>
                                                    <Typography variant="h6" style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: '700',lineHeight:'1.5'}} >+$504.6</Typography>
                                                    <div className="fifth-sec-title">
                                                        <div className="fifth-sec-svg">
                                                        <svg x="0" y="0" width="24" height="24">
                                                            <rect x="0" y="0" width="24" height="24" transform="translate(5.198609658480716 0.24384716704960735) rotate(162.1 12 12)" fill="#C8145C"></rect>
                                                            <rect x="0" y="0" width="24" height="24" transform="translate(11.985339113491333 8.677709300748749) rotate(61.5 12 12)" fill="#F92A01"></rect>
                                                            <rect x="0" y="0" width="24" height="24" transform="translate(-19.033953827985744 -6.489168638321236) rotate(223.3 12 12)" fill="#F5AF00"></rect>
                                                        </svg>
                                                        </div>
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            0xc4b...ef56e
                                                        </Typography>
                                                    </div>
                                                    <button className="fifth-sec-btn">COPY</button>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-[24px]">
                                                <div className="flex flex-col">
                                                    <div className="fifth-box-second-2">
                                                        <div className="fifth-box-style">
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '10px', lineHeight:'1.5', margin: '0px'}}>
                                                                PNL 30d
                                                            </Typography>
                                                            <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '15px', lineHeight:'1.5', margin: '0px'}}>
                                                                +4948.78%
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fifth-box-thr flex flex-col w-[160px] justify-around">
                                                    <Typography style={{ fontSize: '0.875rem', fontFamily: 'Sora, sans-serif', fontWeight: '400',lineHeight:'1.5', color:'rgb(160,163,196)'}} >PNL 30d</Typography>
                                                    <Typography variant="h6" style={{ fontSize: '1.125rem', fontFamily: 'Sora, sans-serif', fontWeight: '700',lineHeight:'1.5'}} >+$504.6</Typography>
                                                    <div className="fifth-sec-title">
                                                        <div className="fifth-sec-svg">
                                                            <svg x="0" y="0" width="24" height="24">
                                                                <rect x="0" y="0" width="24" height="24" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                <rect x="0" y="0" width="24" height="24" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                <rect x="0" y="0" width="24" height="24" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                            </svg>
                                                        </div>
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            0xc4b...ef56e
                                                        </Typography>
                                                    </div>
                                                    <button className="fifth-sec-btn">COPY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {!isMobile? <hr className="fifth-line" />: ""}
                                    <div className="fifth-thr flex flex-col">
                                        <Typography variant="h5" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.25rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                            TOP TRADERS OVER
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '1rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                            Last 7 days
                                        </Typography>
                                        <div className="fifth-thr-list flex flex-col h-full justify-evenly">
                                            <div className="fifth-list-item">
                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                    1
                                                </Typography>
                                                <Link style={{textDecoration: 'none', width:'100%'}} href="#">
                                                    <div className="fifth-item-content">
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="fifth-thr-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '18px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                                    +$1,235,235.10
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    0x1351...5465465
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'rgb(63,182,139)'}}>
                                                                    +34.77%
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    ROI 7d
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {isMobile? <hr className="fifth-line-row" />: ""}
                                            <div className="fifth-list-item">
                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                    1
                                                </Typography>
                                                <Link style={{textDecoration: 'none', width:'100%'}} href="#">
                                                    <div className="fifth-item-content">
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="fifth-thr-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '18px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                                    +$1,235,235.10
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    0x1351...5465465
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'rgb(63,182,139)'}}>
                                                                    +34.77%
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    ROI 7d
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {isMobile? <hr className="fifth-line-row" />: ""}
                                            <div className="fifth-list-item">
                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                    1
                                                </Typography>
                                                <Link style={{textDecoration: 'none', width:'100%'}} href="#">
                                                    <div className="fifth-item-content">
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="fifth-thr-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '18px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                                    +$1,235,235.10
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    0x1351...5465465
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'rgb(63,182,139)'}}>
                                                                    +34.77%
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    ROI 7d
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {isMobile? <hr className="fifth-line-row" />: ""}
                                            <div className="fifth-list-item">
                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                    1
                                                </Typography>
                                                <Link style={{textDecoration: 'none', width:'100%'}} href="#">
                                                    <div className="fifth-item-content">
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="fifth-thr-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '18px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                                    +$1,235,235.10
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    0x1351...5465465
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'rgb(63,182,139)'}}>
                                                                    +34.77%
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    ROI 7d
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {isMobile? <hr className="fifth-line-row" />: ""}
                                            <div className="fifth-list-item">
                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                    1
                                                </Typography>
                                                <Link style={{textDecoration: 'none', width:'100%'}} href="#">
                                                    <div className="fifth-item-content">
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="fifth-thr-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '18px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                                    +$1,235,235.10
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    0x1351...5465465
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row gap-[16px]">
                                                            <div className="flex flex-col gap-[8px]">
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px', color:'rgb(63,182,139)'}}>
                                                                    +34.77%
                                                                </Typography>
                                                                <Typography variant="h6" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '600', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(160,163,196)'}}>
                                                                    ROI 7d
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='six-container'>
                                <div className='six-padding six-style'>
                                    <div className='six-first'>
                                        <div className='six-first-left'>
                                            <div className='flex flex-col'>
                                                <div className='six-box-first'>
                                                    <div className="six-box-content-1">
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '14.7px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            PNL 30d
                                                        </Typography>
                                                        <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '28px', lineHeight:'1.5', margin: '0px'}}>
                                                            $1,266,456.10
                                                        </Typography>
                                                    </div>
                                                    <div className='six-box-content-2'>
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '15.5px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            0x3b7...d5880
                                                        </Typography>
                                                    </div>
                                                    <div className='six-box-content-3'>
                                                        <div className='w-[48px] h-[48px]'>
                                                            <div className="six-box-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.06749156325829 -1.841953555589631) rotate(369.7 18 18)" fill="#FA4F00"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-14.604292388185637 -5.575390121092923) rotate(232.4 18 18)" fill="#F27A02"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(29.140581724510863 -15.310926291541277) rotate(402.5 18 18)" fill="#035E5E"></rect>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='six-box-second'>
                                                    <div className="six-second-content-1">
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '10.5px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            PNL 30d
                                                        </Typography>
                                                        <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '20px', lineHeight:'1.5', margin: '0px'}}>
                                                            $1,266,456.10
                                                        </Typography>
                                                    </div>
                                                    <div className='six-second-content-2'>
                                                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '11px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                            0x3b7...d5880
                                                        </Typography>
                                                    </div>
                                                    <div className='six-second-content-3'>
                                                        <div className='w-[48px] h-[48px]'>
                                                            <div className="six-box-svg">
                                                                <svg x="0" y="0" width="48" height="48">
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(-7.734140374794182 -0.24924547447885212) rotate(273.4 24 24)" fill="#FB1855"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(13.598438270386676 -14.655135919557896) rotate(451.0 24 24)" fill="#01828E"></rect>
                                                                    <rect x="0" y="0" width="48" height="48" transform="translate(15.664843263501584 -39.6023737849437) rotate(449.7 24 24)" fill="#C81444"></rect>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='six-box-third'>
                                                <div className="six-third-content-1">
                                                    <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '12.6px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                        PNL 30d
                                                    </Typography>
                                                    <Typography variant="h3" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '24px', lineHeight:'1.5', margin: '0px'}}>
                                                        $1,266,456.10
                                                    </Typography>
                                                </div>
                                                <div className='six-third-content-2'>
                                                    <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '13.3px', lineHeight:'1.5', margin: '0px', color:'white'}}>
                                                        0x3b7...d5880
                                                    </Typography>
                                                </div>
                                                <div className='six-second-content-3'>
                                                    <div className='w-[48px] h-[48px]'>
                                                        <div className="six-box-svg">
                                                            <svg x="0" y="0" width="48" height="48">
                                                                <rect x="0" y="0" width="48" height="48" transform="translate(7.057284295609736 12.039249234687944) rotate(192.4 24 24)" fill="#03415E"></rect>
                                                                <rect x="0" y="0" width="48" height="48" transform="translate(-23.96033066309502 20.24955674717627) rotate(270.4 24 24)" fill="#1876F2"></rect>
                                                                <rect x="0" y="0" width="48" height="48" transform="translate(36.04951195525472 -20.413304814214783) rotate(451.3 24 24)" fill="#F96801"></rect>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='six-second six-second-style'>
                                        <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '100', fontSize: '2.75rem', lineHeight:'1.3', margin: '0px', color:'white'}}>
                                            WORLD'S BIGGEST TRADERS WORK FOR YOU,
                                            <div style={{display:'inline', fontWeight:'700'}}>FOR FREE.</div>
                                        </Typography>
                                        <Typography sx={{lineHeight:'1.5', fontFamily:'Sora, sans-serif', fontWeight:'400', color: 'rgb(195,194,212)', fontSize: '18px'}}>
                                            Thousands of traders, each with a unique risk appetite, profit-making strategies and on-chain track record, are available for you to copy. You may pick one or two, or build your own master trading team of 50+ traders to “work” for you - simultaneously.
                                        </Typography>
                                        <Link href="#" >
                                            <button className="six-sec-btn six-btn-style">TRY COPYING A MASTER NOW</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='seven-container'>
                                <div className='w-full max-w-[1536px] relative'>
                                    <div className='seven-body seven-padding'>
                                        <div className='seven-first seven-first-padding'>
                                            <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '100', fontSize: '2.75rem', lineHeight:'1.3', margin: '0px'}}>
                                                Discover More
                                            </Typography>
                                            <Typography variant="h2" sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '2.75rem', lineHeight:'1.3', margin: '0px'}}>
                                                PRO TRADERS
                                            </Typography>
                                        </div>
                                        <div className='seven-second seven-second-padding'>
                                            <Chip label="Highest PNL" onClick={handleChipClick} sx={{
                                                    height: '32px',
                                                    fontFamily: 'Sora, sans-serif',
                                                }}
                                                style={chipStyle}
                                            />
                                            <Chip label="Highest ROI" onClick={handleChipClick} sx={{
                                                    height: '32px',
                                                    fontFamily: 'Sora, sans-serif',
                                                }}
                                                style={chipStyle}
                                            />
                                            <Chip label="Highest Volume" onClick={handleChipClick} sx={{
                                                    height: '32px',
                                                    fontFamily: 'Sora, sans-serif',
                                                }}
                                                style={chipStyle}
                                            />
                                            <Chip label="Highest Winning Rate" onClick={handleChipClick} sx={{
                                                    height: '32px',
                                                    fontFamily: 'Sora, sans-serif',
                                                }}
                                                style={chipStyle}
                                            />
                                        </div>
                                        <div className='seven-third seven-third-padding'>
                                            <div className='pl-[24px] flex flex-row'>
                                                <div className='seven-item'>
                                                    <div className='flex flex-col'>
                                                        <div className='seven-box-item'>
                                                            <div className='seven-box-title'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '12px', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL 30d
                                                                </Typography>
                                                                <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '24px', lineHeight:'1.5', margin: '0px'}}>
                                                                    $1,234,234.10
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-col p-[7px]'>
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.75rem', lineHeight:'1.5', margin: '0px', color: 'rgb(160,163,196)'}}>
                                                                0x3b7...d5880
                                                            </Typography>
                                                            <div className='seven-price'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL
                                                                </Typography>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(75,210,161)'}}>
                                                                    1.24M USD
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-row justify-center p-[7px]'>
                                                            <Link href="#" >
                                                                <Button style={{
                                                                    width: '240px',
                                                                    height: '36px',
                                                                    fontSize: '12px',
                                                                    color: 'white',
                                                                    fontWeight: '400',
                                                                    border: '1px solid rgb(45, 45, 61)',
                                                                    background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)'
                                                                }}>View Trader Profile</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pl-[24px] flex flex-row'>
                                                <div className='seven-item'>
                                                    <div className='flex flex-col'>
                                                        <div className='seven-box-item'>
                                                            <div className='seven-box-title'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '12px', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL 30d
                                                                </Typography>
                                                                <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '24px', lineHeight:'1.5', margin: '0px'}}>
                                                                    $1,234,234.10
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-col p-[7px]'>
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.75rem', lineHeight:'1.5', margin: '0px', color: 'rgb(160,163,196)'}}>
                                                                0x3b7...d5880
                                                            </Typography>
                                                            <div className='seven-price'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL
                                                                </Typography>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(75,210,161)'}}>
                                                                    1.24M USD
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-row justify-center p-[7px]'>
                                                            <Link href="#" >
                                                                <Button style={{
                                                                    width: '240px',
                                                                    height: '36px',
                                                                    fontSize: '12px',
                                                                    color: 'white',
                                                                    fontWeight: '400',
                                                                    border: '1px solid rgb(45, 45, 61)',
                                                                    background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)'
                                                                }}>View Trader Profile</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pl-[24px] flex flex-row'>
                                                <div className='seven-item'>
                                                    <div className='flex flex-col'>
                                                        <div className='seven-box-item'>
                                                            <div className='seven-box-title'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '12px', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL 30d
                                                                </Typography>
                                                                <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '24px', lineHeight:'1.5', margin: '0px'}}>
                                                                    $1,234,234.10
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-col p-[7px]'>
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.75rem', lineHeight:'1.5', margin: '0px', color: 'rgb(160,163,196)'}}>
                                                                0x3b7...d5880
                                                            </Typography>
                                                            <div className='seven-price'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL
                                                                </Typography>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(75,210,161)'}}>
                                                                    1.24M USD
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-row justify-center p-[7px]'>
                                                            <Link href="#" >
                                                                <Button style={{
                                                                    width: '240px',
                                                                    height: '36px',
                                                                    fontSize: '12px',
                                                                    color: 'white',
                                                                    fontWeight: '400',
                                                                    border: '1px solid rgb(45, 45, 61)',
                                                                    background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)'
                                                                }}>View Trader Profile</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pl-[24px] flex flex-row'>
                                                <div className='seven-item'>
                                                    <div className='flex flex-col'>
                                                        <div className='seven-box-item'>
                                                            <div className='seven-box-title'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '12px', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL 30d
                                                                </Typography>
                                                                <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '24px', lineHeight:'1.5', margin: '0px'}}>
                                                                    $1,234,234.10
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-col p-[7px]'>
                                                            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.75rem', lineHeight:'1.5', margin: '0px', color: 'rgb(160,163,196)'}}>
                                                                0x3b7...d5880
                                                            </Typography>
                                                            <div className='seven-price'>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px'}}>
                                                                    PNL
                                                                </Typography>
                                                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(75,210,161)'}}>
                                                                    1.24M USD
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[8px] flex flex-row justify-center p-[7px]'>
                                                            <Link href="#" >
                                                                <Button style={{
                                                                    width: '240px',
                                                                    height: '36px',
                                                                    fontSize: '12px',
                                                                    color: 'white',
                                                                    fontWeight: '400',
                                                                    border: '1px solid rgb(45, 45, 61)',
                                                                    background: 'linear-gradient(225deg, rgb(45, 45, 61) 0%, rgb(23, 23, 34) 100%)'
                                                                }}>View Trader Profile</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Stack>
                    </Grid>
                </div>
                <Footer />
            </div>
    );
};
