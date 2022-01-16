import React from 'react';
import { Redirect } from 'react-router-dom';
import ROS from './ROS';

const ROSConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/ros',
			component: ROS
		}
	]
};

export default ROSConfig;