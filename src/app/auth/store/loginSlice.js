import { createSlice } from '@reduxjs/toolkit';
import { setUserData } from './userSlice';
import jwtService from 'app/services/https';

export const submitLogin = ({ email, password }) => async dispatch => {
	return new Promise((resolve, reject) => {
		return jwtService
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch(setUserData(user));

				return dispatch(loginSuccess());
			})
			.catch(error => {
				return dispatch(loginError(error));
			});
	});
};

const initialState = {
	success: false,
	error: {
		username: null,
		password: null
	}
};

const loginSlice = createSlice({
	name: 'auth/login',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.success = true;
		},
		loginError: (state, action) => {
			state.success = false;
			state.error = action.payload;
		}
	},
	extraReducers: {}
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;