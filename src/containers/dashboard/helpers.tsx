import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Plans from './plans';
import Efficiency from './efficiency';

type dataItem = {
    label: string
    Icon: any
    exit?: boolean
}

const handleClick = (drawer: any, activeSection: any, item: string, exit?: boolean, history?: any) => {
    if (!exit) {
        drawer(false);
        activeSection(item)
    } else {
        localStorage.clear();
        history.push('/');
    }
}
export const getListItems = (dataItems:any, drawer:any, activeSection:any, history: any) => {
    const Items:any = [];
    dataItems.forEach(({label, Icon, exit}:dataItem) => {
        Items.push(
            <ListItem button key={label} onClick={() => handleClick(drawer, activeSection, label, exit, history)}>
              <ListItemIcon><Icon /></ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
        )
    })
    return Items;
}

export const getSection = (section:string, dispatch: any, state: any) => {
    switch (section) {
        case 'Planes':
            return <Plans dispatch={dispatch} state={state} />
        case 'Tablas':
            return <Efficiency dispatch={dispatch} state={state} />
        default:
            return <Plans dispatch={dispatch} state={state} />
    }
} 