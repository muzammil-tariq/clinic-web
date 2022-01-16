import React from 'react';
import { Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';

const LandingPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/landingPage',
			component: LandingPage
		}
	]
};

export default LandingPageConfig;