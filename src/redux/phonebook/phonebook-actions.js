import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

export const addContact = createAction('phonebook/addContact', (data) => {
    return {
        payload: { ...data, id: uuid() },
    };
});

export const deleteContact = createAction('phonebook/deleteContact', (event) => {
    const id = event.target.dataset.id;
    return {
        payload: id,
    };
});

export const handleFilter = createAction('phonebook/filterContact', (event) => {
    const { value } = event.currentTarget;
    return {
        payload: value,
    };
});
