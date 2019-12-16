import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Plans from './plans';
import Efficiency from './efficiency';

type dataItem = {
    label: string
    Icon: any
}

const handleClick = (drawer: any, activeSection: any, item: string) => {
    drawer(false);
    activeSection(item)
}
export const getListItems = (dataItems:any, drawer:any, activeSection:any) => {
    const Items:any = [];
    dataItems.forEach(({label, Icon}:dataItem) => {
        Items.push(
            <ListItem button key={label} onClick={() => handleClick(drawer, activeSection, label)}>
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