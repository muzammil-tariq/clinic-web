import React from 'react';
import { Redirect } from 'react-router-dom';
import PaedsTriage from './PaedsTriage';

const PaedsTriageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/paeds-triage',
			component: PaedsTriage
		}
	]
};

export default PaedsTriageConfig;