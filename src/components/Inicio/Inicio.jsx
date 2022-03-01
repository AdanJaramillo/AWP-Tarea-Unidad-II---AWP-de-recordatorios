import AppBar from '../AppBar';
import { Card } from '../Content';
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
//import i18n from '../../config/localization/i18n';




export default function Inicio({session}) {
    const [,setLoading] = useState(true);
    const { i18n, t } = useTranslation();
    const [data, setData] = useState(null);
    const changeLaguage = (language) => {i18n.changeLanguage(language);};
    const handleDelete = async (id) => {const {} = await supabase.from('recordatorio').update({status: false}).eq("id", id); setIsReload(true);};
    const [isReload,setIsReload] = useState(true);
         
    
        useEffect(() => {
            if (isReload){
                setIsReload(false);
                getRecordatorios();
            }
        }, [isReload]);
    
        async function getRecordatorios() {
            try {
                setLoading(true);
                const user = supabase.auth.user();
    
                let { data, error, status } = await supabase
                    .from("recordatorio")
                    .select(`id,titulo, fechacreacion, contenido, fecharecordatorio`)
                    .in("id_user", [user.id])
                    .in("status", [true])
    
                if (error && status !== 406) {
                    throw error;
                }
    
                if (data) {
                    setData(data);

                    
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
            
             <Button variant="contained">
            < Link to="/NewRecordatorio">
                 {t("ADD REMINDER")}
             </Link>
        
                
                
             </Button>
             <Button href='https://github.com/AdanJaramillo/AWP-Tarea-Unidad-II---AWP-de-recordatorios'> Github </Button>

        <Button className={`App-link ${i18n.language === "es" ? "selected" : "unselected"}`}onClick={() => changeLaguage("es")}>
            MX
          </Button>
          <Button className={`App-link ${i18n.language === "en" ? "selected" : "unselected"}`}onClick={() => changeLaguage("en")}>
            US
            </Button>
            
            {data&&data.map(function(recordatorios){
                return <Grid item xs={12} sm={6} md={4} sx={{marginBottom:1}} >
                    <Card 
                    id={recordatorios.id}
                    titulo={recordatorios.titulo}                                 
                     contenido={recordatorios.contenido}
                      fechacreacion={recordatorios.fechacreacion}
                      fecharecordatorio={recordatorios.fechacreacion}              
                                > 
                                      
                    </Card>
                    <Grid>
                    <Grid>
      <Button variant="contained" size="small" color="success">
      <Link to={`/Recordatorios/${recordatorios.id}`}>
      {t("EDIT")}
      </Link>
      </Button> 
      <Button variant="contained" size="small" color="warning"
    onClick={ () => handleDelete(recordatorios.id)}>
    <Link to="/">{t("DELETE")}</Link>
    </Button>
      </Grid>
                    </Grid>
                              
                    </Grid>
                

            })}
            
        
            </div>
        );
    }