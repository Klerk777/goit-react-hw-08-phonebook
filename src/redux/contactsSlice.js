import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialContactsList = [];
// const initialContactsList = [
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'spar2yX', name: 'Klerk', number: '777-77-77' },
//   { id: 'rwoTBBW', name: 'Ann Bakumenko', number: '333-33-33' },
//   { id: 'ega-V-C', name: 'Cho Chi', number: '123-123-123' },
//   { id: '8dT4Yvo', name: 'Chi Cho', number: '321-321-321' },
//   { id: '2eTSXsC', name: 'dgd', number: '1234124' },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContactsList,
    filter: '',
  },
  //mutable change state with Immer
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload); //mutable change state with Immer
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Actions
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
