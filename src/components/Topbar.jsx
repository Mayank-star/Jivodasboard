import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { ArrowDropDown, Autorenew, HelpOutline, Notifications, NotificationsNone, Settings } from '@mui/icons-material'; 

const Topbar = () => {
  return (
    <AppBar position="fixed" sx={{ background: 'white', boxShadow: 'none', color: 'black',  top: 0, left: 0, right: 0, zIndex: 1100    }}>
    
      <Toolbar sx={{height:"80px" ,display:'flex',justifyItems:'center',alignItems:'center' ,gap:"20px"}}>
      <div style={{display:'flex',justifyItems:'center',alignItems:"flex-start",gap:"10px" ,}}>
            <img src='src\assets\logo.png' height={"48px"}/>
            <p style={{color:'#666666', fontSize:'18px' , fontWeight:'500'}}>Admin Area</p>
      </div>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize:'28px',fontWeight:"600" ,fontFamily:'sans-serif'}}>
          Dashboard
        </Typography>

        <button style={{backgroundColor:'#7D83FF',display:'flex',justifyContent:'center',alignItems:'center' ,gap:'10px',borderRadius:'8px',color:'#FFFFFF',border:'none' , fontWeight:'300',fontSize:'14px' ,padding: '12px 13px'}}>
        <img src='src\assets\icons\import.png' height={'16px'}/>
           Import Bulk Employee
        </button>
       
        <Box sx={{display:'flex',justifyItems:'center',alignItems:'center',gap:'20px'}}> 
        <IconButton color="inherit" sx={{backgroundColor:'#F6F6F6',padding:'12px',borderRadius:'14px'}}>
             <HelpOutline color='#000000'/>
          </IconButton>
          <IconButton color="inherit" sx={{backgroundColor:'#F6F6F6',padding:'12px',borderRadius:'14px'}}>
             <Autorenew/>
          </IconButton>
          <IconButton color="inherit" sx={{backgroundColor:'#F6F6F6',padding:'12px',borderRadius:'14px'}}>
             <NotificationsNone/>
          </IconButton>
        
        </Box>
        <Box sx={{backgroundColor:'#F6F6F6',padding:'8px',borderRadius:'14px',display:'flex',justifyItems:'center',alignItems:'center',gap:'10px'}}>
            <div style={{backgroundColor:'white',padding:'6px',borderRadius:'10px',display:'flex',justifyItems:'center',alignItems:'center'}}>
                <img src='src\assets\icons\jivoCare.png' height={'20px'} />
            </div>

            <Typography > Raj Kaushal</Typography>
            <Typography  sx={{fontSize:'13px'}}> Admin</Typography>
             <ArrowDropDown/>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
