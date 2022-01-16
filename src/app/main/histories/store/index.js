import { combineReducers } from '@reduxjs/toolkit';
import histories from './historiesSlice';

const reducer = combineReducers({
	histories
});

export default reducer;
