import React from 'react';
import { Box, Typography, TextField, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeToggle from './DarkModeToggle';
import logo from '../assets/logo.PNG';  // 정확한 파일 이름을 사용합니다.

const Header = ({ darkMode, toggleDarkMode }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
            <img src={logo} alt="showshow logo" style={{ width: '50px', marginRight: '10px' }} /> {/* 로고 이미지를 설정합니다 */}
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
