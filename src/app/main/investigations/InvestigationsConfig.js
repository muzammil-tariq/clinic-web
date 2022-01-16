import React from 'react';
import { Redirect } from 'react-router-dom';
import Investigations from './Investigations';



const InvestigationsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/investigations',
			component: Investigations
		}
	]
};

export default InvestigationsConfig;


