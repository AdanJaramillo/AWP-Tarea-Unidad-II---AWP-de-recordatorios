import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function MultiActionAreaCard({ id, titulo, fechacreacion, contenido, fecharecordatorio}) {
  
  useEffect(() => {
    changeLaguage();
},);

  const { i18n, t } = useTranslation();
  
  const changeLaguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Card sx={{ display: 'flex', height:250, width:800 }}>
    
      <CardActionArea>    
        <CardContent sx={{ flex: '1 0 auto' }}>
          
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
      </CardActionArea>
     
        <Button variant="contained" size="small" color="success">
        <Link to="/Recordatorios">
        {t("EDIT")}
        </Link>
        </Button> 
        <Button variant="contained" size="small" color="error">
        <Link to="/Recordatorios">
        {t("DELETE")}
        </Link>
        </Button> 
    </Card>
  );
}


