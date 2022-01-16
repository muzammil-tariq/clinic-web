import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import React, { useRef } from 'react';

import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import PrescriptionNavigation from './PrescriptionNavigation';
import PrescriptionPageBreadcrumb from './PrescriptionPageBreadcrumb';

function PrescriptionPageLayout({ content, route }) {
	const pageLayout = useRef(null);

	return (
		<FusePageSimple
			classes={{
				root: 'h-full',
				contentWrapper: 'p-24',
				content: 'flex flex-col h-full',
				leftSidebar: 'w-288 pt-8',
				header: 'h-64 min-h-64',
				wrapper: 'min-h-0'
			}}
			header={
				<div className="flex items-center justify-center px-12 h-full w-full">
					<Hidden lgUp>
						<IconButton
							onClick={ev => pageLayout.current.toggleLeftSidebar()}
							aria-label="open left sidebar"
						>
							<Icon>menu</Icon>
						</IconButton>
					</Hidden>
					<div className="flex flex-1 items-center justify-center lg:px-12">
						<Link
							color="inherit"
							to="/documentation"
							className="text-18 font-500 flex items-center"
							role="button"
						>
							<Icon className="mr-8">import_contacts</Icon> <span>Prescription</span>
						</Link>
					</div>
				</div>
			}
			content={
				<div className="max-w-2xl min-h-full flex flex-auto flex-col">
					<PrescriptionPageBreadcrumb />
					<div className="flex flex-col flex-1 relative py-32">
						<FuseSuspense>{renderRoutes(route.routes)}</FuseSuspense>
					</div>
				</div>
			}
			leftSidebarContent={
				<FuseNavigation className={clsx('navigation')} navigation={PrescriptionNavigation.children} />
			}
			sidebarInner
			ref={pageLayout}
		/>
	);
}

export default PrescriptionPageLayout;
