import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Grid, Paper, Button, Stack } from '@mui/material';
import { AccountCircle, Business, SettingsSuggest } from '@mui/icons-material';


function MainContainer() {


    return (
        <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            padding: "5vh 5vw",
            minHeight: "84vh",
            backgroundColor: '#e4eaf5'
        }}>
            <Paper sx={{ paddingTop: 2, px: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '73vh' }} className="container">
                <Typography variant="h4" align='center' gutterBottom>
                    Welcome to Placement Cell
                </Typography>
                <Grid container spacing={3} sx={{ mx: 2, my: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Paper sx={{
                            m: 3,
                            textAlign: 'center',
                            backgroundColor: '#e4eaf5',
                            p: 2,
                            flexGrow: 150,
                        }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Student
                            </Typography>
                            <AccountCircle fontSize="large" sx={{ fontSize: '200px' }} />
                            <Stack spacing={2}>
                                <Link to="https://placement-cell-student.vercel.app/register">
                                    <Button fullWidth variant="contained" color="primary">
                                        Register
                                    </Button>
                                </Link>
                                <Link to="https://placement-cell-student.vercel.app/">
                                    <Button fullWidth variant="outlined" color="primary" >
                                        Login
                                    </Button>
                                </Link>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Paper sx={{ m: 3, textAlign: 'center', backgroundColor: '#e4eaf5', p: 2, flexGrow: 150 }}>
                            <Typography variant="h6" gutterBottom>
                                Admin
                            </Typography>
                            <SettingsSuggest fontSize="large" sx={{ fontSize: '200px' }} />
                            {/* Add your Citizen login/register form here */}
                            <Stack spacing={2}>
                                <Link to='https://placement-cell-admin.vercel.app/'>
                                    <Button fullWidth variant="outlined" color="primary" sx={{ mt: 6.5 }}>
                                        Login
                                    </Button>
                                </Link>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Paper sx={{ m: 3, textAlign: 'center', backgroundColor: '#e4eaf5', p: 2, flexGrow: 150 }}>
                            <Typography variant="h6" gutterBottom>
                                Company
                            </Typography>
                            <Business fontSize="large" sx={{ fontSize: '200px' }} />
                            {/* Add your Contractor login/register form here */}
                            <Stack spacing={2}>
                                <Link to="https://placement-cell-company.vercel.app/register">
                                    <Button fullWidth variant="contained" color="primary">
                                        Register
                                    </Button>
                                </Link>
                                <Link to="https://placement-cell-company.vercel.app/">
                                    <Button fullWidth variant="outlined" color="primary" >
                                        Login
                                    </Button>
                                </Link>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default MainContainer;