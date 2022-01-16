// import FuseComponentsNavigation from './fuse-components/FuseComponentsNavigation';
// import MaterialUIComponentsNavigation from './material-ui-components/MaterialUIComponentsNavigation';
// import ThirdPartyComponentsNavigation from './third-party-components/ThirdPartyComponentsNavigation';

const PrescriptionNavigation = {
	id: 'documentation',
	title: 'Documentation',
	type: 'group',
	icon: 'star',
	children: [
		{
			id: 'dashboard',
			title: 'Dashboard',
			type: 'item',
			icon: 'history',
			url: '/prescription/prescription',
		},
		{
			id: 'switch-to-smart-prescription',
			title: 'Switch to smart Prescription',
			type: 'item',
			icon: 'history',
			url: '/aa',
		},
		{
			id: 'previous-record',
			title: 'Previous Record',
			type: 'collapse',
			icon: 'play_arrow',
			children: [
				{
					id: '',
					title: 'Patient Summary',
					type: 'item',
					url: '/ion'
				},
				{
					id: '',
					title: 'Prescription',
					type: 'item',
					url: '/ljlj'
				},
				{
					id: '',
					title: 'Vitals',
					type: 'item',
					url: '/lll'
				},
				{
					id: '',
					title: 'Lab reports',
					type: 'item',
					url: '/kjkjk'
				},
				{
					id: '',
					title: 'Radiology Reports',
					type: 'item',
					url: '/kkkk'
				},
				{
					id: '',
					title: 'Histories',
					type: 'item',
					url: '/kkkk'
				},
				{
					id: '',
					title: 'Notes',
					type: 'item',
					url: '/kkkk'
				},
				{
					id: '',
					title: 'Medicines',
					type: 'item',
					url: '/kkkk'
				},
				{
					id: '',
					title: 'Chronic diseases',
					type: 'item',
					url: '/kkkk'
				},
				{
					id: '',
					title: 'Voice notes',
					type: 'item',
					url: '/kkkk'
				},
				{
					id: '',
					title: 'Video recordings',
					type: 'item',
					url: '/kkkk'
				}
				
			]
		},
		{
			id: 'go-to-detail-exam',
			title: 'Go to Detail Exam/Hist',
			type: 'item',
			icon: 'history',
			url: '/prescrn',
		},
		{
			id: 'dashboard',
			title: 'Enter Allergies',
			type: 'item',
			icon: 'history',
			url: '/kkkk',
		},
		// {
		// 	id: 'development',
		// 	title: 'Development',
		// 	type: 'collapse',
		// 	icon: 'developer_board',
		// 	children: [
		// 		{
		// 			id: 'development-server-doc',
		// 			title: 'Development Server',
		// 			type: 'item',
		// 			url: '/prescription/development/development-server'
		// 		},
		// 		{
		// 			id: 'production-doc',
		// 			title: 'Production Build',
		// 			type: 'item',
		// 			url: '/prescription/development/production'
		// 		},
		// 		{
		// 			id: 'deployment-doc',
		// 			title: 'Deployment',
		// 			type: 'item',
		// 			url: '/prescription/development/deployment'
		// 		},
		// 		{
		// 			id: 'project-structure-doc',
		// 			title: 'Project Structure',
		// 			type: 'item',
		// 			url: '/prescription/development/project-structure'
		// 		},
		// 		{
		// 			id: 'api-calls-doc',
		// 			title: 'API Calls',
		// 			type: 'item',
		// 			url: '/documentation/development/api-calls'
		// 		},
		// 		{
		// 			id: 'updating-fuse-react-doc',
		// 			title: 'Updating Fuse React',
		// 			type: 'item',
		// 			url: '/documentation/development/updating-fuse-react'
		// 		},
		// 		{
		// 			id: 'fuse-react-ides-vscode-webstorm-doc',
		// 			title: 'IDEs (Webstorm, VsCode)',
		// 			type: 'item',
		// 			url: '/documentation/development/ides-vscode-webstorm'
		// 		}
		// 	]
		// },
		
		// FuseComponentsNavigation,
		// MaterialUIComponentsNavigation,
		// ThirdPartyComponentsNavigation
	]
};

export default PrescriptionNavigation;
