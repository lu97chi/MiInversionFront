import React, { useState } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { LoginContainer, Container, HeaderContainer, LogoContainer } from './styled';
import { connect } from 'react-redux';
import { makeLogin, closeNotification, makeRegister } from './actions';
import { formatFormData, nameValidator } from './helpers';
import CustomizedSnackbars from '../../components/Notification';
import Logo from '../../assets/Logo.png'

const Login = ({dispatch, state, history}:any) => {
    const [ register, setRegister ] = useState(false);
    const [ form, setForm ] = useState({username:'', password: '', name:'', lastname: ''});
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
            <LogoContainer>
                <img src={Logo} width={'100%'} alt='MiInversion' />
            </LogoContainer>
            {register ? <> 
                <TextField
                    error={!nameValidator.test(form.name)}
                    onChange={(e) => formatFormData('name', form, setForm, e.target.value)} 
                    style={{marginBottom: '20px'}} label="Nombre" variant="outlined" fullWidth />
                <TextField 
                    error={!nameValidator.test(form.lastname)}
                    onChange={(e) => formatFormData('lastname', form, setForm, e.target.value)} 
                    style={{marginBottom: '20px'}} label="Apellido" variant="outlined" fullWidth />
            </> : null
            }
            <TextField 
                onChange={(e) => formatFormData('username', form, setForm, e.target.value)} 
                style={{marginBottom: '20px'}} label="Nombre de usuario" variant="outlined" fullWidth />
            <TextField 
                type="password"
                onChange={(e) => formatFormData('password', form, setForm, e.target.value)} 
                style={{marginBottom: '20px'}} label="Contraseña" variant="outlined" fullWidth />
            <Button
                disabled={!form.username || !form.password}
                onClick={() => dispatch(register ? makeRegister(form, history) : makeLogin(form, history))}
                variant="contained" color="primary" size="large">Acceder</Button>
        { state.loading ? <CircularProgress style={{marginTop: '12px'}} />: null }
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

const componentRouter = withRouter(Login)

export default connect(mapStateToProps, mapDispatchToProps)(componentRouter);