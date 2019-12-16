import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Fade } from '@material-ui/core';

type Calc = {
    actual: number,
    month: string,
    acc: number
  }
  
type Props = {
    actualCalc: Array<Calc>
}

const TableComponent = ({actualCalc} : any) => <Fade in={actualCalc !== undefined}>
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
</Fade> 

export default TableComponent;