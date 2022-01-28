import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/contacts/contactsReducers';
const store = configureStore({
  reducer: {
    contacts: appReducer,
  },
});

export default store;
