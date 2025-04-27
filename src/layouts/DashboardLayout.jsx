import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom'; 
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    // <Box sx={{display:'flex',flexDirection:'column'}}>
    //   <Topbar/>
     
    //   <Box sx={{display:'flex',position:'relative',  top: '80px',}}>
    //    <Sidebar/>
    //     <Box 
    //       p={3}
    //       sx={{
    //         width: 'calc(100vw - 248px)', 
    //         // ml: '200px', // move content after sidebar
    //         // backgroundColor:'red',
    //         position:'absolute',
    //         left:'200px', 
             
            
    //       }}
    //     >
    //       <Outlet />
    //     </Box>
    //   </Box>
    // </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
  {/* Topbar fixed at top */}
  <Topbar />

  {/* Content Area */}
  <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden',paddingTop:'80px' }}>
    {/* Sidebar fixed at left */}
    <Sidebar />

    {/* Main content scrollable */}
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        p: 3, 
        backgroundColor: '#f5f5f5', // optional background
      }}
    >
      <Outlet />
    </Box>
  </Box>
</Box>

  );
};

export default DashboardLayout;
