import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const RegionalPerformances = () => {
    const performances = [
        { title: '지역별 공연 ', image: 'ClassicConcert.PNG', height: '500px', width: '100%' },
        { title: '지역별 공연 위치', image: 'Mapshow.PNG', height: '600px', width: '100%' }, // 높이와 길이 더 크게 설정
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
                                width: performance.width,
                                height: performance.height,
                                objectFit: 'cover', // 비율을 유지하면서 크기를 맞춤
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
