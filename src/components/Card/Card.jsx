import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard({titulo, fechacreacion, contenido, fecharecordatorio}) {
  return (
    <Card sx={{ display: 'flex', height:250, width:800 }}>
    
      <CardActionArea>    
        <CardContent sx={{ flex: '1 0 auto' }}>
          
          <Typography gutterBottom variant="body2" component="div" color="red">
          {/* color="text.secondary" */}
          Title: 
            <Typography variant="body2" color="Black">
              {titulo} 
              </Typography>
          </Typography>
          
          <Typography gutterBottom variant="body2" component="div" color="red">
          Contents:
            <Typography variant="body2" color="Black">
              {contenido} 
              </Typography>
          </Typography>

          <Typography variant="body2" color="red">
          Creation date:
            <Typography variant="body2" color="Black">
              {fechacreacion} 
              </Typography>
          </Typography>
          <Typography variant="body2" color="red">
          Reminder Date:
            <Typography variant="body2" color="Black">
              {fecharecordatorio} 
              </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
     
        <Button variant="contained" size="small" color="success">
        <Link to="/Recordatorios">
        Edit
        </Link>
        </Button> 
        <Button variant="contained" size="small" color="error">
        <Link to="/Recordatorios">
        Delete
        </Link>
        </Button> 
    </Card>
  );
}


