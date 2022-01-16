import React from 'react';
import { Redirect } from 'react-router-dom';
import Histories from './Histories';

const HistoriesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/histories',
			component: Histories
		}
	]
};

export default HistoriesConfig;