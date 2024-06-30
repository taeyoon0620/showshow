import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const HomePage = () => {
    const theme = createTheme();
    const history = useHistory();

    const navigateToSignUp = () => {
        history.push('/signup');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Welcome to Our Website
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={navigateToSignUp}
                    >
                        Go to Sign Up
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
