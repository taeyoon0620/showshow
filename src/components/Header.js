import React from 'react';
import { Box, Typography, TextField, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ darkMode, toggleDarkMode }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
            <img src="/logo.PNG" alt="showshow logo" style={{ width: '50px', marginRight: '10px' }} /> {/* 로고 추가 */}
            <Typography variant="h4">showshow</Typography>
        </Box>
        <Box display="flex" alignItems="center">
            <TextField variant="outlined" size="small" placeholder="Search..." />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Box>
        <Box>
            <Button variant="contained">EN</Button>
            <Button variant="contained">KR</Button>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Box>
    </Box>
);

export default Header;
