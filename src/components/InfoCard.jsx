import { Box, Card, Typography } from '@mui/material';

const InfoCard = ({ color, title, count, icon: IconComponent }) => {
  return (
    <Card
      sx={{
        width: '100%',
        p:1,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        minHeight: 100,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        bgcolor: '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: color,
          p: 1.5,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 50,
          minHeight: 50,
        }}
      >
        <IconComponent sx={{ color: '#fff', fontSize: 28 }} />
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#0D1B3E', mt: 0.5 }}>
          {count}
        </Typography>
      </Box>
    </Card>
  );
};

export default InfoCard;
