import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { LoginContainer, Container, HeaderContainer, LogoContainer } from './styled';
import { connect } from 'react-redux';
import { makeLogin, closeNotification, makeRegister } from './actions';
import { formatFormData } from './helpers';
import CustomizedSnackbars from '../../components/Notification';


const Login = ({dispatch, state}:any) => {
    const [ register, setRegister ] = useState(false);
    const [ form, setForm ] = useState();
    console.log(state, form)
    return (
        <Container>
    <CustomizedSnackbars 
        message={state.feedBack.message} 
        variant={state.feedBack.success} 
        handleClose={() => dispatch(closeNotification())} 
        open={state.feedBack.open} />
    <LoginContainer>
        <HeaderContainer>
            <div>
                <Button 
                    color={!register ? 'primary' : 'default'} 
                    onClick={() => setRegister(false)}>Acceder</Button>
                <Button color={register ? 'primary' : 'default'} 
                    onClick={() => setRegister(true)}
                    >Registrarse</Button>
            </div>
            <LogoContainer>RÑ</LogoContainer>
            {register ? <> 
                <TextField
                    onChange={(e) => formatFormData('name', form, setForm, e.target.value)} 
                    style={{marginBottom: '20px'}} label="Nombre" variant="outlined" fullWidth />
                <TextField 
                    onChange={(e) => formatFormData('lastname', form, setForm, e.target.value)} 
                    style={{marginBottom: '20px'}} label="Apellido" variant="outlined" fullWidth />
            </> : null
            }
            <TextField 
                onChange={(e) => formatFormData('username', form, setForm, e.target.value)} 
                style={{marginBottom: '20px'}} label="Nombre de usuario" variant="outlined" fullWidth />
            <TextField 
                onChange={(e) => formatFormData('password', form, setForm, e.target.value)} 
                style={{marginBottom: '20px'}} label="Contraseña" variant="outlined" fullWidth />
            <Button
                disabled={!form || !form.username || !form.password}
                onClick={() => dispatch(register ? makeRegister(form) : makeLogin(form))}
                variant="contained" color="primary" size="large">Acceder</Button>
        </HeaderContainer>
</LoginContainer>
</Container>
    )
};

const mapStateToProps = (state: any) => {
    const { LoginReducer } = state;
    return {
        state: LoginReducer
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);