import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, InputAdornment } from '@material-ui/core';

type Props = {
    open: boolean,
    handleClose: () => void,
    handleAcept: (form: any) => void,
    isEdit: boolean,
    initialForm: any
}

type Fields = {
    label: string,
    id: string,
    end: string
}

const fields = [
    { label: 'Nombre', id: 'name', end: ''},
    { label: 'Inversión minima', id: 'mininvest', end: '$'},
    { label: 'Inversión maxima', id: 'maxinvest', end: '$'},
    { label: 'Tasa mensual', id: 'monthlyrate', end: '%'},
    { label: 'Duracion del plan', id: 'duration', end: '(Meses)'}
]

const initialState = {
    name: null,
    mininvest: null,
    maxinvest: null,
    monthlyrate: null,
    duration: null
}



const PlanModal = ({open, handleClose, handleAcept, isEdit, initialForm}:Props) => {
    const [ form, setForm ] = useState(initialForm ? initialForm : initialState);
    return (
        <Dialog open={open} onClose={() => handleClose()}>
            <DialogTitle id="form-dialog-title">Nuevo plan de inversión</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Para crear un nuevo plan, ingrese los datos a continuacion:
            </DialogContentText>
            { fields.map(({label, id, end}:Fields) => <TextField
                margin="dense"
                id={id}
                label={label}
                type={id === 'name' ? 'text' : 'number'}
                fullWidth
                error={
                    (id === 'mininvest' && form.mininvest > form.maxinvest) ||
                    (id === 'maxinvest' && form.maxinvest < form.mininvest)
                }
                defaultValue={isEdit ? initialForm[id] : ''}
                key={id}
                InputProps={{
                    startAdornment: <InputAdornment position="end">{end}</InputAdornment>,
                  }}
                onChange={(e) => setForm({...form, [id] : e.target.value})}
                variant="outlined"
            />)}
            </DialogContent>
            <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
                Cancelar
            </Button>
            <Button
                disabled={(!form.duration || 
                    !form.maxinvest || 
                    !form.mininvest || 
                    !form.monthlyrate || 
                    !form.name || 
                    form.mininvest > form.maxinvest || form.maxinvest < form.mininvest) && !isEdit} 
                onClick={() => handleAcept(form)} color="primary">
                  Aceptar
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default PlanModal;