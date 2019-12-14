import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlans } from './actions';
import { Grid } from '@material-ui/core';
import PlansCard from '../../../components/PlanCard';

type Plan = {
    id: string,
    name: string,
    mininvest: string,
    maxinvest: string,
    monthlyrate: string,
    duration: number,
    isinitialplan: boolean
}

const drawPlans = (data:Array<Plan>) => {
    const Plans:any = [];
    data.forEach(({name, id, maxinvest, mininvest, monthlyrate, isinitialplan, duration}, i) => Plans.push(
    <Grid spacing={2} xs={12} md={3} sm={6} item key={id} style={{marginBottom: '24px'}}>
        <PlansCard delay={`.${i}s`} isFeature={false} createdAt={'Today'} owner={'Luis'} title={name} max={maxinvest} min={mininvest} rate={monthlyrate} duration={duration} />
    </Grid>))
    return Plans;
}

const Plans = ({dispatch, state}:any) => {
    useEffect(() => {
        dispatch(getPlans('1'))
    }, [])
    return (<div style={{marginTop: '64px'}}>
        
        <Grid container spacing={4}>
        {
            state.plans ? drawPlans(state.plans) : null
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