import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteModal from '../../../components/DeleteModal';
import { drawPlans, handleAcept, handleAddAcept } from './helpers';
import { getPlans, closeNotification } from './actions';
import CustomizedSnackbars from '../../../components/Notification';
import PlanModal from '../../../components/PlanModal';


// const addPlan = () => 

const Plans = ({dispatch, state}:any) => {
    const [ modal, setModal ] = useState(false);
    const [ addModal, setAddModal ] = useState(false);
    const [ activePlan, setActivePlan ] = useState();
    const [ isEdit, setIsEdit ] = useState(false);
    useEffect(() => {
        dispatch(getPlans('1'))
    }, []);
    return (<div style={{marginTop: '54px'}}>
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
        <PlanModal initialForm={state.plans.find(({id}:any) => id === activePlan)} isEdit={isEdit} handleAcept={(form) => handleAddAcept(dispatch, form, setAddModal, '4', isEdit, activePlan)} handleClose={() => setAddModal(false)} open={addModal} />
        <Grid container spacing={4}>
        {
            state.plans ? drawPlans(state.plans, setModal, setActivePlan, setAddModal, setIsEdit) : null
        }
        </Grid>
    </div>)
}

const mapStateToProps = (state: any) => {
    return {
        state: state.PlanesReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plans);