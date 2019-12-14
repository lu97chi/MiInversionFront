import React from 'react';
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions, Fade } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { CardContainer } from './styled';

type Props = {
    owner: string,
    title: string,
    createdAt: string,
    min: string,
    max: string,
    rate: string,
    duration: number,
    isFeature: boolean,
    delay: string
}

const PlansCard = ({min, max, rate, duration, delay}: Props) => <CardContainer delay={delay}>
<Card >
<CardHeader
  avatar={
    <Avatar aria-label="recipe" >
      R
    </Avatar>
  }
  title="Shrimp and Chorizo Paella"
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
<CardActions disableSpacing>
  <IconButton aria-label="Edit">
    <EditIcon />
  </IconButton>
  <IconButton aria-label="Delete">
    <DeleteIcon />
  </IconButton>
</CardActions>
</Card>
</CardContainer>
    

export default PlansCard;