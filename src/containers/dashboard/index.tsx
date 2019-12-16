import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, Typography, List } from '@material-ui/core';
import { connect } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { getListItems, getSection } from './helpers';
import { InformationContainer, ImageContainer, MainContainer } from './styled';
import ProfilePicture from '../../assets/Profile.png';
import { withRouter } from 'react-router-dom';

const Dashboard = ({dispatch, state, history}: any) => {
    const [ isDrawerOpen, setDrawerOpen ] = useState(false);
    const [ activeSection, setActiveSection ] = useState('Planes');
    // const { user: { firstname, lastname} } = state.LoginReducer;
    const user:any = JSON.parse(localStorage.getItem('user') as any);
    if (!user) {
      history.push('/');
    }
    return (
        <div>
            {user ? <>
              <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setDrawerOpen(true)}
                    edge="start" >
                    <MenuIcon />
                    </IconButton>
                <Typography variant="h6" noWrap>
                    MiInversion
                </Typography>
                </Toolbar>
        </AppBar>
        <Drawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} >
        <List>
          <InformationContainer>
            <Typography>Agente</Typography>
            <ImageContainer>
              <img width={'100%'} alt='Profile' src={ProfilePicture} />
            </ImageContainer>
            <Typography>{user.firstname}</Typography>
            <Typography>{user.lastname}</Typography>
          </InformationContainer>
          {getListItems([
            {label: 'Planes', Icon: AppsIcon},
            {label: 'Tablas', Icon: AssignmentIndIcon},
            {label: 'Salir', Icon: ExitToAppIcon, exit: true}
          ], setDrawerOpen, setActiveSection, history)}
        </List>
        </Drawer>
          <MainContainer>
            {getSection(activeSection, dispatch, state)}
          </MainContainer>
            </> : null}
        </div>
    )
};

const mapStateToProps = (state: any) => {
  const { LoginReducer, PlanesReducer } = state;
  return {
      state: {...PlanesReducer, LoginReducer}
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      dispatch
  }
}

const componentRouter = withRouter(Dashboard)


export default connect(mapStateToProps, mapDispatchToProps)(componentRouter);