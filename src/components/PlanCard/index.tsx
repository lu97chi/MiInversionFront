import React from 'react';
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { CardContainer } from './styled';

type Props = {
    id: string,
    owner: string,
    title: string,
    createdAt: string,
    min: string,
    max: string,
    rate: string,
    duration: number,
    isFeature: boolean,
    delay: string,
    handleDelete: (id: string) => void,
    handleEdit: (id: string) =>void,
}

const PlansCard = ({min, max, rate, duration, delay, handleDelete, handleEdit, id, title}: Props) => <CardContainer delay={delay}>
<Card >
<CardHeader
  avatar={
    <Avatar aria-label="recipe" >
      R
    </Avatar>
  }
  title={title}
  subheader="September 14, 2016"
/>
<CardContent>
  <Typography variant="body2" color="textSecondary" component="p">
    Inversion minima : {min}
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
    Inversion maxima : {max}
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
    Tasa mensual : {rate} %
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
    Duracion del plan(meses) : {duration}
  </Typography>
</CardContent>
<CardActions disableSpacing >
  <IconButton aria-label="Edit" onClick={() => handleEdit(id)}>
    <EditIcon />
  </IconButton>
  <IconButton aria-label="Delete" onClick={() => handleDelete(id)}>
    <DeleteIcon />
  </IconButton>
</CardActions>
</Card>
</CardContainer>
    

export default PlansCard;