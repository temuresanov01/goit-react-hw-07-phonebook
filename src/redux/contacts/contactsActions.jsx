import { createAction } from '@reduxjs/toolkit';
import { FILTER_CONTACT } from './contactsTupes';

export const setFilter = createAction(FILTER_CONTACT);
