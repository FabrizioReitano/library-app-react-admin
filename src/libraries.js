import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const LibraryList = () => (
    <List basePath="/libraries">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="spot" />
        </Datagrid>
    </List>
);