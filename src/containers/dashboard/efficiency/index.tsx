import React, { useState } from 'react';
import { Typography, MenuItem, Select, InputLabel, Grid, TextField, Button } from '@material-ui/core';
import { EfficiencyContainer, CustomPaper } from './styled';
import { monthlyRatePlan } from './helpers';
import Table from '../../../components/Table';
import Charts from '../../../components/Charts';

type Plan = {
  id: string,
  name: string,
  mininvest: string,
  maxinvest: string,
  monthlyrate: string,
  duration: number,
  isinitialplan: boolean,
}

const getPlans = (plans:Array<Plan>) => plans.map(({id, name}) => <MenuItem key={id} value={id}>{name}</MenuItem>);

const handlePlanSelection = (setActivePlan: any, setLimits:any, plans:Array<Plan>, selected:string) => {
  setActivePlan(selected);
  const {duration, maxinvest, mininvest, monthlyrate}:any = plans.find((plan) => plan.id === selected);
  setLimits({duration, maxinvest, mininvest, monthlyrate})
}

const Efficiency = ({dispatch, state}:any) => {
  const [ actualCalc, setActualCalc] = useState();
  const [ ammount, setAmmount ] = useState();
  const [ isTable, setIsTable ] = useState(true);
  const [ activePlan, setActivePlan ] = useState('');
  const [ limits, setLimits ]:any = useState({});
  return(
    <EfficiencyContainer>
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
            value={activePlan}
            fullWidth
            onChange={(e) => handlePlanSelection(setActivePlan, setLimits, state.plans, e.target.value as string)}
          >
            {getPlans(state.plans)}
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={ammount > limits.maxinvest || ammount < limits.mininvest}
            onChange={(e) => setAmmount(Number(e.target.value))}
            helperText={activePlan ? `Valores entre $${limits.mininvest} - $${limits.maxinvest}` : ''}
            style={{marginTop: activePlan ? '34px' : '16px' }} type="number" fullWidth id="outlined-basic" label="Monto" variant="outlined" />
        </Grid>
        <Grid item>
        <Button
          disabled={!activePlan || !ammount || ammount > limits.maxinvest || ammount < limits.mininvest}
          onClick={() => setActualCalc(monthlyRatePlan({duration: limits.duration, monthlyrate: limits.monthlyrate}, ammount))} 
          variant="contained" color="primary">Generar tabla de rendimiento</Button>
        </Grid>
          { actualCalc ? <Grid item xs={12}>
        <Button style={{marginRight: '22px'}} onClick={() => setIsTable(true)} variant="contained" color="primary">Tabla</Button>
        <Button variant="contained" color="primary" onClick={() => setIsTable(false)}>Grafica</Button>
      </Grid> : null}
      <Grid item xs={12}>
        {actualCalc && isTable ? 
          <Table actualCalc={actualCalc} />: null
        }
        {
          actualCalc && !isTable ? <Charts data={actualCalc} /> : null
        }
      </Grid>
      </Grid>
      
      
      </CustomPaper>
    </EfficiencyContainer>
  )
};

export default Efficiency;