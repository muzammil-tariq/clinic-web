import React from 'react';
import { Redirect } from 'react-router-dom';
import SmartExamination from './SmartExamination';

const SmartExaminationConfig = {
	settings: {
		layout: {
            config: {}
		}
	},
	routes: [
		{
			path: '/smart-examination',
			component: SmartExamination
		}
	]
};

export default SmartExaminationConfig;