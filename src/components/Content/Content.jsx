import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActions } from '@mui/material';
import { useTranslation } from "react-i18next";


export default function MultiActionAreaCard({ id, titulo, fechacreacion, contenido, fecharecordatorio}) {


  const { t } = useTranslation();
  
  return (
    <Card sx={{ display: 'flex', height:250, width:800 }}>
    
      <CardActions>    
        <CardContent sx={{ fontSize: 14 }} color="text.secondary">
          
          <Typography gutterBottom variant="body2" component="div" color="red">
          {/* color="text.secondary" */}
          {t("TITLE")}
            <Typography variant="body2" color="Black">
              {titulo} 
              </Typography>
          </Typography>
          
          <Typography gutterBottom variant="body2" component="div" color="red">
          {t("CONTENT")}
            <Typography variant="body2" color="Black">
              {contenido} 
              </Typography>
          </Typography>

          <Typography variant="body2" color="red">
          {t("CREATION DATE")}
            <Typography variant="body2" color="Black">
              {fechacreacion} 
              </Typography>
          </Typography>
          <Typography variant="body2" color="red">
          {t("REMINDER DATE")}
            <Typography variant="body2" color="Black">
              {fecharecordatorio} 
              </Typography>
          </Typography>
        </CardContent>
      </CardActions>
      
        
    </Card>
   
  );
}


