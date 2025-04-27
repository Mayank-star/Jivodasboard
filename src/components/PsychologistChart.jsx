import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { name: "Employee Taking Sessions", Available: 500, Used: 36 },
  { name: "Total Psychologist Sessions", Available: 500, Used: 208 },
];

const lineData = [
  { month: 'Apr 24', sessions: 0 },
  { month: 'May 24', sessions: 30 },
  { month: 'Jun 24', sessions: 10 },
  { month: 'Jul 24', sessions: 10 },
  { month: 'Aug 24', sessions: 13 },
  { month: 'Sep 24', sessions: 8 },
  { month: 'Oct 24', sessions: 10 },
  { month: 'Nov 24', sessions: 15 },
  { month: 'Dec 24', sessions: 18 },
  { month: 'Jan 25', sessions: 13 },
  { month: 'Feb 25', sessions: 11 },
  { month: 'Mar 25', sessions: 7 },
  { month: 'Apr 25', sessions: 15 },
  { month: 'May 25', sessions: 25 },
];

const PsychologistChart = () => {
  const [timeRange, setTimeRange] = React.useState("All Time");

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
        Psychologist
        </Typography>
        <FormControl size="small">
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            sx={{ backgroundColor: "#f5f5f5", borderRadius: 2, minWidth: 120 }}
          >
            <MenuItem value="All Time">Split By</MenuItem>
            <MenuItem value="Last 6 Months">Last 6 Months</MenuItem>
            <MenuItem value="Last Year">Last Year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* Left Bar Chart */} 
        <Box flex={1} display="flex" flexDirection="column" alignItems="center">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Bar dataKey="Available" fill="#d3d3d3" barSize={40} />
              <Bar dataKey="Used" fill="#87B9FE" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Right Line Chart */}
        <Box flex={1} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1" mb={1}>
          Sessions Utilisation over time
          </Typography>
          <ResponsiveContainer width="100%" height={265}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sessions" stroke="#87B9FE" dot={{ r: 4}} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

      </Box>
    </Card>
  );
};

export default PsychologistChart; 