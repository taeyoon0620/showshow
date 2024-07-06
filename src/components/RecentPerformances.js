import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const RecentPerformances = () => {
    const performances = [
        { title: '2024 임영웅 콘서트', image: '/임영웅.PNG' },
        { title: '공연 2', image: '/Concert.PNG' },
        { title: '공연 3', image: '/Concert2.PNG' },
    ];

    const imageHeight = '200px'; // 원하는 높이로 설정

    return (
        <Box mt={4}>
            <Typography variant="h5">최근 인기 공연</Typography>
            <Grid container spacing={2}>
                {performances.map((performance, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Box
                            component="img"
                            src={performance.image}
                            alt="공연 사진"
                            sx={{
                                width: '100%',
                                height: imageHeight,
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

export default RecentPerformances;
