import React from 'react'
import { Card, CardContent, Typography, Box, Rating, Select, MenuItem, Divider } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const invoiceData = [
    { year: 2019, value: 20 },
    { year: 2020, value: 60 },
    { year: 2021, value: 45 },
    { year: 2022, value: 70 },
    { year: 2023, value: 65 },
    { year: 2024, value: 80 },
    { year: 2025, value: 120 },
  ];
  
const InvoicesChart = () => {
    return (
        <Box sx={{borderRadius: 3, display: 'flex', gap: 2 }}>
          
          {/* Invoices Card */}
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="h6" fontWeight="bold">Invoices</Typography>
                <Select size="small" value="Per Year" sx={{ fontSize: 14 }}>
                  <MenuItem value="Per Year">Per Year</MenuItem>
                </Select>
              </Box>
              <Divider
                sx={{
                    borderColor: '#eff0ff',  
                    borderBottomWidth: 4,   
                }} />
              <ResponsiveContainer width="100%" height={200} >
                <LineChart data={invoiceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#7C82F0" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
    
          {/* Ratings Card */}
          <Card sx={{ flex: 1, boxShadow: 3 }}>
            <CardContent sx={{ textAlign: 'center' }}> 
              <Typography variant="h6" fontWeight="bold" textAlign={"start"}  mb={2}>Ratings</Typography>
              <Divider
                sx={{
                    borderColor: '#eff0ff', // Light gray color
                    borderBottomWidth: 4,   // Thickness (height) of divider
                }} 
              />
              <Typography variant="body2" color="#00033E" mt={2} mb={2} fontSize={"20px"} fontWeight="bold">
                Average reviews for Jivocare health experts.
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
                <Typography variant="h4" color="primary" fontWeight="bold">4.5</Typography>
                <Typography variant="h6" color="text.secondary" sx={{ ml: 0.5 }}>/5</Typography>
              </Box>
              <Rating value={4.5} precision={0.5} readOnly size="large" sx={{ mb: 1 }}  />
              <Typography variant="body2" color="#00033E" fontSize={"16px"} fontWeight='bold'>35 Employee Ratings</Typography>
            </CardContent>
          </Card>
    
        </Box>
      );
}

export default InvoicesChart