import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Tooltip, Box, IconButton, Button } from '@mui/material';
import { supabase } from "../../config/supabaseClient";
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@mui/material/colors';


const Navbar = () => {    

    return (
        
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
                {/* <AppBar position="static"  color='primary'> */}
                <AppBar position="fixed" sx={{ bgcolor: blueGrey[700] }}>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        WELCOME
                        </Typography>

                        <Button color="inherit" >
                                <Link to="/">
                                Home
                                </Link>
                                </Button>

                        <Button color="inherit" >
                                <Link to="/Account">
                                Profile
                                </Link>
                                </Button>
                                

                        <Button variant="outlined" color="error" onClick={() => supabase.auth.signOut()}>
                        EXIT
                    </Button>

                    <br></br>
                    
                    
                        <Tooltip title="Account">
                            <IconButton sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: blue[700] }} variant="square">
                                AJ
                            </Avatar>
                            </IconButton>
                        </Tooltip>

                    </Toolbar>

                </AppBar>
            </Box>
           


        </div>
    );
}

export default Navbar