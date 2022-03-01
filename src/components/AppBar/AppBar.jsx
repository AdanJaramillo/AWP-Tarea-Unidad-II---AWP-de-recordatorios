import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Tooltip, Box, IconButton, Button, Grid } from '@mui/material';
import { supabase } from "../../config/supabaseClient";
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@mui/material/colors';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";



const Navbar = () => {    

    useEffect(() => {
        changeLaguage();
    }, []);
    
      const { i18n, t } = useTranslation();
      
      const changeLaguage = (language) => {
        i18n.changeLanguage(language);
      };

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
                        {t("WELCOME")}
                        </Typography>

                        <Button color="inherit" >
                                <Link to="/">
                                {t("HOME")}
                                </Link>
                                </Button>


                   

                        <Button color="inherit" >
                                <Link to="/Account">
                                {t("PROFILE")}
                                </Link>
                                </Button>

                                <br></br> 
                                

                        

                    
                    
                    
                        <Tooltip title="Account">
                            <IconButton sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: blue[700] }} variant="square">
                                AJ
                            </Avatar>
                            </IconButton>
                        </Tooltip>

                        <br></br>

                        <Grid>

                        <Button variant="contained" color="error" onClick={() => supabase.auth.signOut()}>
                        {t("EXIT")}
                    </Button>

                    </Grid>

                    </Toolbar>

                </AppBar>
            </Box>
           


        </div>
    );
}

export default Navbar