import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CountdownTimer from './CountdownTimer';
import RecentPerformances from './RecentPerformances';
import RegionalPerformances from './RegionalPerformances';

const MainContent = () => (
    <Box>
        <Typography variant="h5">시작하는 공연 정보</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    height="100%"
                >
                    <CountdownTimer />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    height="100%"
                >
                    <img src="/버스킹.PNG" alt="공연 사진" style={{ height: '100%', objectFit: 'cover' }} />
                </Box>
            </Grid>
        </Grid>
        <RecentPerformances />
        <RegionalPerformances />
    </Box>
);

export default MainContent;