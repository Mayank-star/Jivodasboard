import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Track active item

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Members', icon: <GroupIcon />, path: '/members' },
    { text: 'Verification', icon: <VerifiedIcon />, path: '/verification' },
  ];

  const handleLogout = () => {
    // Perform logout logic here
    console.log("Logging out...");
    navigate("/login"); // example redirect to login
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 200 : 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 200 : 80,
          top: '80px',
          height: 'calc(100vh - 80px)',
          position: 'fixed',
          left:0,
          transition: 'width 0.3s',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column', // very important for bottom positioning
          justifyContent: 'space-between',
        },
      }}
    >
      <Box>
        {/* Top Section (Toggle) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: open ? "flex-end" : "center",
            alignItems: "flex-end",
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        {/* Sidebar Items */}
        <List sx={{ px: 1.5 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                mb: 1,
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: open ? 2 : 3,
                  ml: 1,
                  mr: 1,
                  backgroundColor: activeIndex === index ? '#7C82FF' : 'transparent',
                  borderRadius: '8px',
                  color: activeIndex === index ? '#ffffff' : 'inherit',
                  '&:hover': {
                    backgroundColor: activeIndex === index ? '#7C82FF' : '#f0f0f0',
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  setActiveIndex(index);
                  navigate(item.path);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: activeIndex === index ? '#ffffff' : 'inherit',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                {open && <ListItemText  
                 primaryTypographyProps={{
                    fontWeight: '700',
                    fontSize: '16px',
                    }} primary={item?.text}
                     />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Logout Button */}
      <Box sx={{ px: 1.5, mb: 2 }}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2,
              ml: 1,
              mr: 1,
              borderRadius: '8px',
              color: '#666666', // grey text color
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              transition: 'all 0.3s ease',
            }}
            onClick={handleLogout}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
                color: '#666666',
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Logout" />}
          </ListItemButton>
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
