import React from 'react'
import EmployeeGenderCard from './EmployeeGenderCard'
import EmployeeEngagingCard from './EmployeeEngagingCard'
import { Grid } from '@mui/material'

const GenderCards = () => {
  return (
    <div style={{display:'flex',justifyItems:'space-between',alignItems:'center',gap:'20px',padding:'15px'}}>
        <EmployeeGenderCard />
        <EmployeeEngagingCard />
    </div>
  )
}

export default GenderCards