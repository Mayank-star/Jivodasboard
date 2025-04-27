import { Box, Card, Divider, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Male', value: 560, color: '#3498DB' },
  { name: 'Female', value: 240, color: '#FFB6C1' },
];

const EmployeeGenderCard = () => {
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
        Employees By Gender
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={40}
            outerRadius={60}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <Box flex={1} ml={2}>
          {data.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" mb={2}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  mr: 1,
                }}
              />
              <Box>
                <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.name} Employees
                </Typography>
              </Box>
              <Box ml="auto">
                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: item.color === '#3498DB' ? '#E8F4FD' : '#FFE8EF',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    color: item.color,
                    fontWeight: 'bold',
                  }}
                >
                  {((item.value / 800) * 100).toFixed(0)}%
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default EmployeeGenderCard;
