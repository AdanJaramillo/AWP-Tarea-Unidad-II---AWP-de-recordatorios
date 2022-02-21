import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './config/supabaseClient'
import Auth from './components/Auth'
// import Recordatorios from "./components/Recordatorios";
import Routes from './components/Routes/Routes'



export default function RecordatorioHome() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>

 
      {!session ? <Auth /> : <Routes key={session.user.id} session={session} /> } 
    
            {/* <Account key={session.user.id} session={session} /> */}
</div>
  );
}