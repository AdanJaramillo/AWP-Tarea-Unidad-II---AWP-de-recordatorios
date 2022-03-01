import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import AppBar from '../AppBar';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";



export default function RecordatorioAdd({session}) {
    // const [id, setid] = useState(null);
    const [loading, setLoading] = useState(false);
    const [titulo, setTitulo] = useState(null);
    const [fechacreacion, setFechaCreacion] = useState(null);
    const [contenido, setContenido] = useState(null);
    const [fecharecordatorio, setFechaRecordatorio] = useState(null);
    


    async function AgregarRecordatorio({ titulo, fechacreacion, contenido, fecharecordatorio  }) {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            const Agregar = {
                
                titulo, 
                fechacreacion, 
                contenido, 
                fecharecordatorio,
                updated_at: new Date(),
                id_user:user.id,
            };

                
            let { error } = await supabase.from("recordatorio").upsert(Agregar,  {
                returning: "minimal", // Don't return the value after inserting
            });

            if (error) {
                throw error;
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }



    return (
        
        <div>
                <Box>
         <AppBar/> 
         
            <div>
                <label htmlFor="email">Profile</label>
                <input
                    id="email"
                    type="text"
                    value={session.user.email}
                    disabled
                />
            </div>
            <div>
                <label htmlFor="titulo">Title</label>
                <input
                    id="titulo"
                    type="text"
                    value={titulo || ""}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fechacreacion">Creation date</label>
                <input
                    id="fechacreacion"
                    type="Date"
                    value={fechacreacion || ""}
                    onChange={(e) => setFechaCreacion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="contenido">Contents</label>
                <input
                    id="contenido"
                    type="text"
                    value={contenido ||""}
                    onChange={(e) => setContenido(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fecharecordatorio">Reminder Date</label>
                <input
                    id="fecharecordatorio"
                    type="Date"
                    value={fecharecordatorio || ""}
                    onChange={(e) => setFechaRecordatorio(e.target.value)}
                />
            </div>
           

            <div>
                <Button
                    className="button block primary"
                    // value={id || ""}
                    onClick={() =>
                        AgregarRecordatorio({ titulo, fechacreacion, contenido, fecharecordatorio })
                    }
                    disabled={loading}
                >
                    <Link to="/">
                    {loading ? "Loading ..." : "Guardar"}
                    </Link>
                </Button>
            </div>   
            </Box>              
        </div>
      
    );
}