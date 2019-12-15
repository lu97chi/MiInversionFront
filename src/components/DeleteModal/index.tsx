import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

type Props = {
    handleClose: () => void,
    open: boolean,
    handleAccept: () => void
}

const DeleteModal = ({handleClose, open, handleAccept}:Props) => <Dialog
    open={open}
    onClose={() => handleClose()}
    >
    <DialogTitle>{"¿Desea eliminar este plan de inversión?"}</DialogTitle>
    <DialogContent>
    <DialogContentText>
    Una vez eliminado este ya no estara disponible en la seccion de planes
    </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button onClick={() => handleClose()} color="primary">
        Cancelar
    </Button>
    <Button onClick={() => handleAccept()} color="primary" autoFocus>
        Eliminar
    </Button>
    </DialogActions>
</Dialog>

export default DeleteModal;