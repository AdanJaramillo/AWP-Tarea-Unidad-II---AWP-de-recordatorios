import { useState } from 'react'
import { supabase } from '../../config/supabaseClient'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box rounded={'lg'} boxShadow={'lg'} p={8} position={'center'}>
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header" >Log in</h1>
        <p className="description">Login via the magic link with your email below</p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained"
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className={'button block'}
            disabled={loading} sx={{ bgcolor: blueGrey[700]}}
          >
            {loading ? <span>Cargando</span> : <span>Send magic link</span>}
          </Button>
        </div>
      </div>
    </div>
    </Box>
  )
}