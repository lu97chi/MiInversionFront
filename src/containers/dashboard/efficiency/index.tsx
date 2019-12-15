import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, MenuItem, Select, InputLabel, Grid, TextField, Button, Fade } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { EfficiencyContainer, CustomPaper } from './styled';
import { monthlyRatePlan } from './helpers';

const steps = ['Informacion de inversion', 'Grafica de rendimiento', 'Finalizar']
// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

type Calc = {
  actual: number,
  month: string,
  acc: number
}

const Efficiency = () => {
  console.log(monthlyRatePlan({duration: 24, monthlyrate: 4.500}, 1000));
  const [ actualCalc, setActualCalc] = useState();
  return(
    <EfficiencyContainer>
    <Stepper style={{width: '60%'}} activeStep={1}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <CustomPaper>
          <Typography variant="h6">Ingresar los datos correspondientes para generar la tabla de rendimiento</Typography>
          <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}  >
          <InputLabel id="select-plan-label">
            Seleccionar plan
          </InputLabel>
            <Select
            labelId="select-plan-label"
            id="select-plan"
            variant="outlined"
            value={10}
            fullWidth
            onChange={() => console.log('ye')}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField style={{marginTop: '16px' }} type="number" fullWidth id="outlined-basic" label="Monto" variant="outlined" />
        </Grid>
        <Button
          onClick={() => setActualCalc(monthlyRatePlan({duration: 24, monthlyrate: 4.500}, 1000))} 
          variant="contained" color="primary">Generar tabla de rendimiento</Button>
      </Grid>
      {actualCalc ? 
      <Fade in={actualCalc !== undefined}>
      <div style={{width: '100%', overflowX: 'auto'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Número de pago</TableCell>
            <TableCell align="left">Nombre del mes</TableCell>
            <TableCell align="left">Rendimiento acumulado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actualCalc.map(({actual, month, acc}:Calc) => (
            <TableRow key={actual + acc}>
              <TableCell align="left">#{actual}</TableCell>
              <TableCell align="left">{month}</TableCell>
              <TableCell align="left">${acc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </Fade> : null
      }
      </CustomPaper>
</EfficiencyContainer>
  )
};

export default Efficiency;