import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';
// import GRCLeaderNavigation from '../main/grc-leader/GRCLeaderNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	//  GRCLeaderNavigation,
	{
		id: 'medicine-examination',
		title: 'Medicine Examination',
		type: 'group',
		icon: 'star',
		children: [
			{
				id: 'histories',
				title: 'Histories',
				type: 'item',
				url: '/histories'
			},
			{
				id: 'ros',
				title: 'ROS',
				type: 'item',
				url: '/ros'
			},
			{
				id: 'smart-examination',
				title: 'Smart Examination',
				type: 'item',
				url: '/smart-examination'
			},
			{
				id: 'detail-examination',
				title: 'Detail Examination',
				type: 'item',
				url: '/detail-examination'
			},
			{
				id: 'investigations',
				title: 'Investigations',
				type: 'item',
				url: '/investigations'
			},
			{
				id: 'plans-startegies',
				title: 'Plans & Startegies',
				type: 'item',
				url: '/plans-startegies'
			},
			{
				id: 'prescription',
				title: 'Prescription',
				type: 'item',
				url: '/prescription/prescription'
			}
			
		]
	},
	
];

export default navigationConfig;
