import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, handleFilter } from "./phonebook-actions";

const items = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) =>
        state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
    [handleFilter]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });