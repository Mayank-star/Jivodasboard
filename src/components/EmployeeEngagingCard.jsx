import { Box, Card, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import GroupsIcon from '@mui/icons-material/Groups';

const chartData = [
  { name: 'Engaging', value: 105 },
  { name: 'Remaining', value: 695 },
];

const COLORS = ['#7D83FF', '#D3D3D3'];

const EmployeeEngagingCard = () => {
  return (
    <Card
      sx={{
        width: '100%',
        p: 2,
        borderRadius: 2,
        boxShadow: '0px 2px 10px rgba(0,0,0,0.08)',
        bgcolor: '#fff',
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" mb={2} borderBottom="1px solid #eee">
        Employees Engaging
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box flex={1}>
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary">
              Employee Onboarded
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#FF6B6B' }}>
              800
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Employee Engaging
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#7D83FF' }}>
              105
            </Typography>
          </Box>
        </Box>

        <PieChart width={150} height={150}>
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={50}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <foreignObject x="35" y="35" width="80" height="80">
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GroupsIcon sx={{ color: '#FF6B6B', fontSize: 32 }} />
            </Box>
          </foreignObject>
        </PieChart>
      </Box>
    </Card>
  );
};

export default EmployeeEngagingCard;
