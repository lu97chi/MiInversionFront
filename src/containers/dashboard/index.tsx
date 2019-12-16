import React, { useState } from 'react';
import { Drawer, AppBar, Toolbar, IconButton, Typography, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { getListItems, getSection } from './helpers';
import { InformationContainer, ImageContainer, MainContainer } from './styled';
import ProfilePicture from '../../assets/Profile.png';
import { connect } from 'react-redux';

const Dashboard = ({dispatch, state}: any) => {
    const [ isDrawerOpen, setDrawerOpen ] = useState(false);
    const [ activeSection, setActiveSection ] = useState('Planes');
    return (
        <div>
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
            <Typography>Luis Roberto</Typography>
            <Typography>Hernandez Robles</Typography>
          </InformationContainer>
          {getListItems([
            {label: 'Planes', Icon: AppsIcon},
            {label: 'Tablas', Icon: AssignmentIndIcon}
          ], setDrawerOpen, setActiveSection)}
        </List>
        </Drawer>
          <MainContainer>
            {getSection(activeSection, dispatch, state)}
          </MainContainer>
        </div>
    )
};

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


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);