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

export const getSection = (section:string) => {
    switch (section) {
        case 'Planes':
            return <Plans />
        case 'Tablas':
            return <Efficiency />
        default:
            return <Plans />
    }
} 