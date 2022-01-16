import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Callback(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		// auth0Service.onAuthenticated(() => {
		// 	dispatch(showMessage({ message: 'Logging in with Auth0' }));
		// 	/**
		// 	 * Retrieve user data from Auth0
		// 	 */
		// 	auth0Service.getUserData().then(tokenData => {
		// 		dispatch(setUserDataAuth0(tokenData));
		// 		dispatch(showMessage({ message: 'Logged in with Auth0' }));
		// 	});
		// });
	}, [dispatch]);

	return <FuseSplashScreen />;
}

export default Callback;
