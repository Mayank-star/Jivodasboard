import React from 'react'
import { Box, Typography, Button, IconButton, Grid, Card, CardContent, Divider } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import { NotificationsNone } from '@mui/icons-material';
import enggLogo from "../assets/enggLogo.png"
import clock from "../assets/clock.png"
import cube from "../assets/icons/cube.png"
import upload from "../assets/icons/upload.png"
import doctorbag from "../assets/icons/doctorBag.png"
import paper from "../assets/icons/paper.png"


const Details = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 2 }}>
        
            <Card sx={{ flex: 1, display: 'flex', alignItems: 'center', p: 2, minWidth: 300 }}>
                <Box component="img"
                    src={enggLogo}
                    alt="Company Logo"
                    sx={{ width: 150, height: 150, mr: 2 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" fontWeight="light">Hello, Raj Kaushal</Typography>
                    <Typography variant="subtitle2" fontWeight="bold" color="text.secondary">HG Infra Engineering Ltd.</Typography>

                        <Box
                    sx={{
                    height: '2px',
                    width: '100%',
                    background: 'linear-gradient(90deg, #7D83FF 0%, #FFFFFF 100%)',
                    my: 2, // margin top and bottom
                    }}
                />
                    <Grid container spacing={1} sx={{ mt: 1 }}>
                    <Grid item sx={{color:'#7D83FF'}} >
                        <IconButton size="small" sx={{color:'#7D83FF'}}>
                        <CalendarTodayIcon fontSize="medium" />
                        </IconButton>
                        <Typography variant="body2" display="inline">Monday, 14th April 2025</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton size="small" sx={{color:'#7D83FF'}}>
                        <AccessTimeIcon fontSize="medium" />
                        </IconButton>
                        <Typography variant="body2" sx={{color:'#7D83FF'}} display="inline">10:04 AM</Typography>
                    </Grid>
                    </Grid>
                </Box>

                <Box sx={{ ml: 'auto' }}>
                    <Box component="img"
                    src={clock}
                    alt="Clock"
                    sx={{ width: 119, height: 129 }}
                    />
                </Box>
            </Card>

            <Card sx={{ flex: 1, minWidth: 300, background: 'linear-gradient(135deg, #e3ecfb, #f5e7f9)' }}>
            <CardContent>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',gap:'10px' }}>
                <Box component="img"
                src={cube}
                alt="Cube icon"
                sx={{ width: 36, height: 36, }}
                />
                <Typography variant="h6" fontWeight="bold" fontSize="22" color='#00033E'>
                    Corporate Plan
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',gap:'10px' }}>
                    <button style={{border:'none',color:'white', fontSize:'12px',fontWeight:'500',padding:'8px 10px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center',gap:'10px',borderRadius:'4px',backgroundColor:'#7D83FF'}}>
                    <img src={upload} height="12px"/>
                    Upgrade
                    </button>
                    <button style={{border:'none',color:'black', fontSize:'12px',fontWeight:'500',padding:'8px 10px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center',gap:'10px',borderRadius:'4px',backgroundColor:'white'}}>
                    <img src={cube} height="15px"/>
                    View Package Plans
                    </button>
                
                </Box>
                </Box>
                <Grid container spacing={3} alignItems="center" sx={{ mt: 3 }}>
                {/* Left part */}
                <Grid item xs={5}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: '#00033E' }} />
                    <Typography variant="body2" color="#00033E">
                    Started At :{' '}
                    <Box component="span" sx={{ color: '#7D83FF', fontWeight: 500 }}>
                        March 10, 2025
                    </Box>
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ mr: 1, color: '#00033E' }} />
                    <Typography variant="body2" color="#00033E">
                    Ended At :{' '}
                    <Box component="span" sx={{ color: '#7D83FF', fontWeight: 500 }}>
                        April 9, 2026
                    </Box>
                    </Typography>
                </Box>
                </Grid>

                <Box component="img"
                src={doctorbag}
                alt="doctorBag icon"
                sx={{ width: 63, height: 63, }}
                />

                {/* Vertical Divider */}
                <Divider
                orientation="vertical"
                flexItem
                sx={{
                    borderColor: '#c4c4c4', // border color instead of background
                    borderRightWidth: '2px',
                }}
                />


                {/* Right part */}
                <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="img"
                src={cube}
                alt="Cube icon"
                sx={{ width: 23, height: 22, mr:1  }}
                />
                    <Typography variant="body2" color="#00033E">
                    Plan :{' '}
                    <Box component="span" sx={{ color: '#7D83FF', fontWeight: 500 }}>
                        Yearly
                    </Box>
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <NotificationsNone sx={{ mr: 1, color: '#00033E' }} />
                    <Typography variant="body2" color="#00033E">
                    Status :{' '}
                    <Box component="span" sx={{ color: '#7D83FF', fontWeight: 500 }}>
                        Active
                    </Box>
                    </Typography>
                </Box>
                </Grid>
                <Box component="img"
                src={paper}
                alt="paper icon"
                sx={{ width: 63, height: 63, }}
                />
            </Grid>
            

            
            </CardContent>
            </Card>
   
  </Box>
  )
}

export default Details