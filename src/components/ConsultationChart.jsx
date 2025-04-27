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
  { name: "Employee Taking Sessions", Available: 1000, Used: 200 },
  { name: "Sessions Booked", Available: 500, Used: 100 },
];

const lineData = [
  { year: 2025, sessions: 150 },
  { year: 2026, sessions: 100 },
  { year: 2027, sessions: 250 },
  { year: 2028, sessions: 200 },
  { year: 2029, sessions: 360 },
  { year: 2030, sessions: 270 },
];

const ConsultationChart = () => {
  const [timeRange, setTimeRange] = React.useState("All Time");

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2, padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Consultation
        </Typography>
        <FormControl size="small">
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            sx={{ backgroundColor: "#f5f5f5", borderRadius: 2, minWidth: 120 }}
          >
            <MenuItem value="All Time">All Time</MenuItem>
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
              <Bar dataKey="Used" fill="#5c6bc0" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Right Line Chart */}
        <Box flex={1} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1" mb={1}>
            No. of sessions booked over the time.
          </Typography>
          <ResponsiveContainer width="100%" height={265}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sessions" stroke="#3f51b5" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

      </Box>
    </Card>
  );
};

export default ConsultationChart;
