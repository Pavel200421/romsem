

import React from 'react';
import { List, Datagrid, Edit, Create, DeleteButton, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
const ReviewList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <DateField source="published_at" />
                <TextField source="text" />
                <EditButton basePath="/reviews" />
                <DeleteButton basePath="/reviews" />
            </Datagrid>
        </List>
    );
};

export default ReviewList;