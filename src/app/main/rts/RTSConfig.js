import React from 'react';
import { Redirect } from 'react-router-dom';
import RTS from './RTS';

const RTSConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/rts',
			component: RTS
		}
	]
};

export default RTSConfig;