import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filterName) || contact.number.toLowerCase().includes(filterName));
    return filteredData;
});