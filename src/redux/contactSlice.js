import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    },
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
        isLoading: false,
        error: null,
      };
    },

    [addContact.pending]: state => {
      return { ...state, isLoading: true };
    },

    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },

    [deleteContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...state.items.filter(({ id }) => id !== action.payload.id)],
        isLoading: false,
        error: null,
      };
    },

    [deleteContact.pending]: state => {
      return { ...state, isLoading: true };
    },

    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },
});

export const contactReducer = contactSlice.reducer;
