import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import image23 from '../assets/23.png';
import image22 from '../assets/22.png';

const RegionalPerformances = () => {
    const performances = [
        { title: '지역별 공연', image: image23 },
        { title: '지역별 공연 위치', image: image22, larger: true },
    ];

    return (
        <Box mt={4}>
            <Typography variant="h5">지역별 공연 정보</Typography>
            <Grid container spacing={2}>
                {performances.map((performance, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Box
                            component="img"
                            src={performance.image}
                            alt={performance.title}
                            sx={{
                                width: '100%',
                                height: performance.larger ? '500px' : '400px',
                                objectFit: 'cover',
                            }}
                        />
                        <Typography>{performance.title}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RegionalPerformances;