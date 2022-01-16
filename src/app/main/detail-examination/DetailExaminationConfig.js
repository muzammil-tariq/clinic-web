import React from 'react';
import { Redirect } from 'react-router-dom';
import DetailExamination from './DetailExamination';

const DetailExaminationConfig = {
	settings: {
		layout: {
            config: {}
		}
	},
	routes: [
		{
			path: '/detail-examination',
			component: DetailExamination
		}
	]
};

export default DetailExaminationConfig;