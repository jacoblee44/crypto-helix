import React from 'react';
import "tailwindcss/tailwind.css";
import {Container, Box, Grid, Typography, Button, Link, Chip, FormControl, Input, Divider, Stack} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

export default function Footer(props: any) {
  return (
    <footer className="footer-body">
      <div className="w-full max-w-[1536px] relative">
        <div className="footer-content flex gap-[40px] flex-col ">
          <div className="footer-first">
            <div className="footer-body-first flex gap-[24px] justify-start items-center">
              <div className="footer-first-left-padding footer-first-left ">
                <div className="footer-first-left-style flex flex-row justify-between">
                  <div className="footer-first-left-1">
                    <div className="flex justify-center flex-col">
                      <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.875rem', lineHeight:'1.5', margin: '0px 0px 12px'}}>
                          Alfred
                      </Typography>
                      <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px 0px 24px', width: '90%', color:'rgb(150,150,150)'}}>
                          The world’s first non-custodial copytrading tool that allows you to copy the moves of top traders in real time.
                      </Typography>
                      <div className='flex flex-row items-center gap-[16px]'>
                        <Link href="#" style={{textDecoration: 'none' , color:'white', margin: '0px 0px 4px'}}>
                          <InstagramIcon/>
                        </Link>
                        <Link href="#" style={{textDecoration: 'none' , color:'white', margin: '0px 0px 4px'}}>
                          <TwitterIcon/>
                        </Link>
                        <Link href="#" style={{textDecoration: 'none' , color:'white', margin: '0px 0px 4px'}}>
                          <LinkedinIcon/>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='footer-first-left-2'>
                    <div className='flex flex-col items-start'>
                      <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px 0px 20px'}}>
                          Alfred
                      </Typography>
                      <Link href="#" style={{margin: '0px 0px 7px', textDecoration: 'none'}}>
                        <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(153,153,153)'}}>
                          Top Traders
                        </Typography>
                      </Link>
                      <Link href="#" style={{margin: '0px 0px 7px', textDecoration: 'none'}}>
                        <Typography variant='h3' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color:'rgb(153,153,153)'}}>
                          Trader of the day
                        </Typography>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='footer-body-second flex flex-col justify-end'>
                <div className='footer-first-right flex justify-end'>
                  <div className='footer-first-right-1 mb-24px'>
                    <div className='flex flex-col'>
                      <Typography variant='h5' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.25rem', lineHeight:'1.5', margin: '0px'}}>
                        Contact Us
                      </Typography>
                      <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)'}}>
                        Registered Office Address:
                      </Typography>
                      <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)', width: '90%'}}>
                        Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines
                      </Typography>
                      <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '15px 0px 0px', color: 'rgb(153, 153, 153)'}}>
                        Mailling Address:
                      </Typography>
                      <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)'}}>
                        P.O. Box. No. 1510, Beachmont, Kingstown, St. Vincent and the Grenadines support@alfred.capital
                      </Typography>
                      <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '0.875rem', lineHeight:'1.5', margin: '15px 0px 0px', color: 'rgb(153, 153, 153)'}}>
                      +19985437008
                      </Typography>
                    </div>
                  </div>
                  <div className='footer-first-right-1 mb-24px'>
                    <div className='flex flex-col items-start'>
                      <Typography variant='h5' sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '700', fontSize: '1.125rem', lineHeight:'1.5', margin: '0px 0px 20px'}}>
                        Stay in the loop
                      </Typography>
                      <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px 0px 20px', color: 'rgb(153, 153, 153)'}}>
                        Join our mailing list to stay in the loop with our newest feature releases, and tips and tricks for navigating the crypto trading world.
                      </Typography>
                      <FormControl style={{width: '90%', minWidth:'295px', }}>
                        <Input style={{fontSize:'13px', color: 'rgb(0,0,0)', backgroundColor:'rgb(255,255,255)', padding: '0px 10px', height: '50px', borderRadius:'25px'}} placeholder='Enter your email address'></Input>
                        <Button style={{width: '40%',borderRadius:'20px', height:'40px', backgroundColor:'rgb(37,37,235)', color: 'white', fontWeight:'700', padding:'8px 10px', position:'absolute', fontSize:'12px', textTransform:'capitalize', minWidth:'64px',top:'5px', right:'5px'}}>Subscribe Now</Button>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)'}}>
          Digital assets are subject to a number of risks, including price volatility, cybersecurity vulnerabilities, and/or permanent loss of digital assets. Transacting in digital assets could result in significant losses and may not be suitable for some consumers. You are solely responsible for analyzing all possible risk factors and by exercising your own independent discretion. Digital assets do not typically have legal tender status and are not covered by deposit protection insurance. The past performance of a digital asset is not a guide to future performance, nor is it a reliable indicator of future results or performance.
          </Typography>
          <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)'}}>
          Alfred is NOT a custodian of digital assets and does not provide any guarantees of any kind about asset protection, the security of our software, or any other guarantees of any kind. Alfred does not have access to the private keys associated with your wallet or the digital assets in your wallet, nor does Alfred have the ability to reverse completed blockchain transactions you make from your wallet.
          </Typography>
          <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)'}}>
          Alfred Capital LLC is a registered business under the law of Saint Vincent and the Grenadines. Services offered by Alfred Platform do not include financial, investment, tax, legal, regulatory, accounting, business, or other advice. For additional details, please click here to see Alfred’s terms and policies.
          </Typography>
          <Divider style={{backgroundColor: 'rgb(153, 153, 153)'}}></Divider>
          <Stack direction="column" style={{height:'80px', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.75rem', lineHeight:'1.5', margin: '0px', color: 'rgb(153, 153, 153)'}}>
              The term 'investment machine' and its derivatives are not indicative of the nature of the product and are merely used as marketing tagline.
            </Typography>
            <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: '400', fontSize: '0.875rem', lineHeight:'1.5', margin: '0px'}}>
              Copyright © 2023 | Alfred Capital LLC
            </Typography>
          </Stack>
        </div>
      </div>
    </footer>
  );
}
