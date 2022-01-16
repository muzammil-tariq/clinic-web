import React from 'react';
import { Redirect } from 'react-router-dom';
import PlansStartegies from './PlansStartegies';

const PlansStartegiesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/plans-startegies',
			component: PlansStartegies
		}
	]
};

export default PlansStartegiesConfig;