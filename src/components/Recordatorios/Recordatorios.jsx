import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import AppBar from '../../components/AppBar';
import { Button } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Recordatorios({ session }) {
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    const [state, setState] = useState({id:'', titulo:'', fechacreacion:'', contenido:'', fecharecordatorio:'' });
    const handleChange = ({target}) => {setState({...state, [target.name]: target.value})}; 
    const navigate = useNavigate();
    

    useEffect(() => {
        getRecordatorios();
        return () => {}
    }, []);

    
    async function getRecordatorios() {
        try {
            setLoading(true);

            let { data, error, status } = await supabase
                .from("recordatorio")
                .select(`id_user, id, titulo, fechacreacion, contenido, fecharecordatorio `)
                .eq("id", id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) { setState(data)
                
               console.log(data);
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    const EditarRecordatorio = async () =>  { 
        try {
            setLoading(true);

            const update = {...state, updated_at: new Date()};

            let { error } = await supabase.from("recordatorio").upsert( update )

            if (error) {
                throw error;
            }
            navigate('/');
            
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }



    return (
        
        <div className="form-widget">
         <AppBar/>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={session.user.email}
                    disabled
                />
            </div>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input name="titulo"
                    id="titulo"
                    type="text"
                    value={state.titulo || "" }
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="fechacreacion">Fecha Creacion</label>
                <input name="fechacreacion"
                    id="fechacreacion"
                    type="Date"
                    value={state.fechacreacion || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="contenido">Contenido</label>
                <input name="contenido"
                    id="contenido"
                    type="text"
                    value={state.contenido || ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="fecharecordatorio">Fecha Recordatorio</label>
                <input name="fecharecordatorio"
                    id="fecharecordatorio"
                    type="Date"
                    value={state.fecharecordatorio || ""}
                    onChange={handleChange}
                />
            </div>
           

            <div>
                <Button
                    className="button block primary"
                    onClick={ 
                        EditarRecordatorio
                    }
                    disabled={loading}
                >
                    <Link to="/">
                    {loading ? "Loading ..." : "Update"}
                    </Link>
                </Button>
            </div>                   
            
        </div>
    );
}
