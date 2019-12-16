import React from 'react';
import { Grid } from "@material-ui/core";
import PlansCard from '../../../components/PlanCard';
import { deletePlan, addPlan, editPlan } from './actions';

export type Plan = {
    id: string,
    name: string,
    mininvest: string,
    maxinvest: string,
    monthlyrate: string,
    duration: number,
    isinitialplan: boolean,
    created_at: string
}


const buttonHandler = (modalHandler: (state: boolean) => void, setActivePlan: (id: string) => void, id:string) => {
    modalHandler(true);
    setActivePlan(id);
}

const editHandler = (modal: any, setActivePlan: any, id: string, setIsEdit: any) => {
    // modal, activePlan, 
    setIsEdit(true);
    setActivePlan(id);
    modal(true);
}

export const drawPlans = (data:Array<Plan>, setModal:any, setActivePlan: any, setAddModal: any, setIsEdit: any) => {
    const Plans:any = [];
    data.forEach(({name, id, maxinvest, mininvest, monthlyrate, isinitialplan, duration, created_at}, i) => Plans.push(
    <Grid xs={12} md={3} sm={6} item key={id}>
        <PlansCard 
            created_at={created_at}
            delay={`${i / 10}s`} 
            isFeature={false} 
            createdAt={'Today'} 
            owner={'Luis'} 
            title={name} 
            id={id}
            handleDelete={(id) => buttonHandler(setModal, setActivePlan, id)}
            handleEdit={(id) => editHandler(setAddModal, setActivePlan, id, setIsEdit)}
            max={maxinvest} 
            min={mininvest} 
            rate={monthlyrate} 
            duration={duration} 
            />
    </Grid>))
return Plans;
}

export const handleAcept = (active: string, dispatch: any, setModal: any) => {
    setModal(false);
    dispatch(deletePlan(active))
}


export const handleAddAcept = (dispatch: any, form: any, setAddModal: any, agentId: string, isEdit: boolean, planid: string) => {
    if (isEdit) {
        dispatch(editPlan(form, planid))
    } else {
        dispatch(addPlan(form, agentId))
    }
    setAddModal(false);
}
