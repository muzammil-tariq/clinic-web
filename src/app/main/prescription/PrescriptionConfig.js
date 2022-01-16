import React from 'react';

const PrescriptionConfig = {
	routes: [
		{
			path: '/prescription',
			component: React.lazy(() => import('./PrescriptionPageLayout')),
			routes: [
				{
					path: '/prescription/prescription',
					component: React.lazy(() => import('./prescription/Prescription'))
				}
			]
		}
	]
};

export default PrescriptionConfig;
