import React from 'react';
import { Grid } from '@mui/material'; 
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import InfoCard from './InfoCard';

const EmployeeStats = () => {
  return (
   
    <div style={{display:'flex' ,justifyItems:'space-between',alignItems:'center',gap:'20px' ,padding:'15px'}}>
          <InfoCard
          color="#7D83FF"
          title="Total Employees"
          count="800"
          icon={PeopleIcon}
        />
            <InfoCard
          color="#28A745"
          title="Active Employees"
          count="736"
          icon={PersonIcon}
        />

     <InfoCard
          color="#FF851B"
          title="Inactive Employees"
          count="64"
          icon={PersonOffIcon}
        />
            <InfoCard
          color="#FF4136"
          title="Past Employees"
          count="110"
          icon={PersonOffIcon}
        />
    </div>
  );
};

export default EmployeeStats;
