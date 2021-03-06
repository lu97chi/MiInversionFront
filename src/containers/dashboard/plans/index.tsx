import React, { useEffect, useState } from 'react';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteModal from '../../../components/DeleteModal';
import { drawPlans, handleAcept, handleAddAcept } from './helpers';
import { getPlans, closeNotification } from './actions';
import CustomizedSnackbars from '../../../components/Notification';
import PlanModal from '../../../components/PlanModal';

const handleClose = (setModal:any, setActivePlan:any, setIsEdit:any) => {
    setModal(false);
    setActivePlan(-1);
    setIsEdit(false);
}

const Plans = ({dispatch, state}:any) => {
    const [ modal, setModal ] = useState(false);
    const [ addModal, setAddModal ] = useState(false);
    const [ activePlan, setActivePlan ] = useState();
    const [ isEdit, setIsEdit ] = useState(false);
    const user:any = localStorage.getItem('user');
    const { id, username }:any = JSON.parse(user);
    useEffect(() => {
        dispatch(getPlans(id))
    }, []);
    return (<div>
        <CustomizedSnackbars
        message={state.notification.state} 
        variant={state.notification.variant} 
        handleClose={() => dispatch(closeNotification())} 
        open={state.notification.open} />
        <Fab
            onClick={() => setAddModal(true)} 
            style={{position: 'fixed', zIndex: 4, right: 40, bottom: 40}} color="primary">
            <AddIcon />
        </Fab>
        <DeleteModal handleAccept={() => handleAcept(activePlan, dispatch, setModal)} open={modal} handleClose={() => setModal(false)} />
        {
            addModal ? <PlanModal 
            initialForm={state.plans.find(({id}:any) => id === activePlan)} 
            isEdit={isEdit} 
            handleAcept={(form) => handleAddAcept(dispatch, form, setAddModal, id, isEdit, activePlan)} 
            handleClose={() => handleClose(setAddModal, setActivePlan, setIsEdit)} open={addModal} /> : null
        }
        <Grid container spacing={4}>
        {
            state.plans ? drawPlans(state.plans, setModal, setActivePlan, setAddModal, setIsEdit, username) : null
        }
        </Grid>
    </div>)
}


export default Plans;