import AppBar from '../../components/AppBar';
import { Card } from '../Content';
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

//import i18n from '../../config/localization/i18n';


export default function Recordatorio({session}) {
    const [,setLoading] = useState(true);
    const [titulo, setTitulo] = useState(null);
    const [fechacreacion, setFechaCreacion] = useState(null);
    const [contenido, setContenido] = useState(null);
    const [fecharecordatorio, setFechaRecordatorio] = useState(null);
            
    
        useEffect(() => {
            getRecordatorios();
        }, [session]);
    
        async function getRecordatorios() {
            try {
                setLoading(true);
                const user = supabase.auth.user();
    
                let { data, error, status } = await supabase
                    .from("recordatorio")
                    .select(`id,titulo, fechacreacion, contenido, fecharecordatorio `)
                    .eq("id", user.id)
                    .single();
    
                if (error && status !== 406) {
                    throw error;
                }
    
                if (data) {
                    // setid(data.id);
                    
                    setTitulo(data.titulo);
                    setFechaCreacion(data.fechacreacion);
                    setContenido(data.contenido);
                    setFechaRecordatorio(data.fecharecordatorio);
                    
                }
                console.log(data);
            } catch (error) {
                console.log(error);
                alert(error.message);
            } finally {
                setLoading(false);
            }
        }
    
        return (
            
            <div>
             <AppBar/> 

             <Button href='https://github.com/AdanJaramillo/Spotify_180394'> Github </Button>
             <Button variant="contained">
            < Link to="/NewRecordatorio">
                 {/* {i18n.t("ADD REMINDER")*/}
            ADD REMINDER
             </Link>
        
                
                
             </Button>
            
            
            <Grid container padding={10} spacing={7} className="CARD">
            <Grid item xs={12} sm={6} md={4} >
                <Card
                // id={id}
                titulo={titulo}                                 
                 contenido={contenido}
                  fechacreacion={fechacreacion}
                  fecharecordatorio={fecharecordatorio}              
                            >       
                </Card>
                    <br></br>            
                </Grid>
        </Grid>
            </div>
        );
    }